// Data that was extracted using the python program and has been transferred here
import {edges} from './edges.js';
import {vertices} from './vertices.js';
import { edgeDescriptions } from './descriptions.js';

var edgesObj = Object.entries(edges).map(([key, e]) => ({
  id: key,
  ...e
}));

var verticesObj = Object.entries(vertices).map(([id, v]) => ({
  id: Number(id),
  ...v
}));

// Haversine's formula to calculate distance between two coordinates
const GetDistance = (coordinates) => {
  const φ1 = coordinates[0][1] * Math.PI/180;
  const φ2 = coordinates[1][1] * Math.PI/180;
  const Δφ = (coordinates[1][1]-coordinates[0][1]) * Math.PI/180;
  const Δλ = (coordinates[1][0]-coordinates[0][0]) * Math.PI/180;
  const a = Math.sin(Δφ/2)**2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)**2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = 6371e3 * c;
  return [d, coordinates[1][2]-coordinates[0][2]];
}

// Accessing form data
const params = new URLSearchParams(location.search);
let start = params.get('start');
let midpoint1 = params.get('midpoint1');
let midpoint2 = params.get('midpoint2');
let midpoint3 = params.get('midpoint3');
let end = params.get('end');
let constraint = params.get('modes');
let classroomstart = params.get('classroomstart') || null;
let classroomend = params.get('classroomend') || null;
if (classroomstart === 'none') classroomstart = null;
if (classroomend === 'none') classroomend = null;

let waypoints = [start, midpoint1, midpoint2, midpoint3, end];
waypoints = waypoints.filter(m => m && m !== 'none');
if (waypoints.length < 2) {
  alert('Please enter at least two locations for your travel.');
  document.getElementById('Error').submit();
}

// Build vertex lists for start/midpoints/end
const vertexById = verticesObj.reduce((acc, v) => { {
  acc[v.id] = v;
  return acc;
} }, {});
const edgeByPair = {};
for (const edge of Object.values(edges)) {
  edgeByPair[`${edge.from}-${edge.to}`] = edge;
  edgeByPair[`${edge.to}-${edge.from}`] = edge;
}

// Heuristic using Haversine distance
function heuristic(aId, bId) {
  const aV = vertexById[aId];
  const bV = vertexById[bId];
  const [dist, _] = GetDistance([aV.point, bV.point]);
  return dist; // distance in meters
}

const startlist = [];
const finishlist = [];
let gHouse = verticesObj.find(v => v.place === 'G House');

if (start === 'D House') startlist.push(gHouse);
if (end === 'D House') finishlist.push(gHouse);

for (let v of verticesObj) {
  if (v.place === start) startlist.push(v);
}

let destinations = [];
for (let mp of waypoints) {
  const sublist = [];
  if (mp === 'D House') sublist.push(gHouse);
  for (let v of verticesObj) if (v.place === mp) sublist.push(v);
  if (sublist.length) destinations.push(sublist);
}

// Wheelchair constraint
if (constraint === 'Wheelchair') {
  edgesObj = edgesObj.filter(e => e.wheelchair);
  console.log("Filtering edges for wheelchair accessibility, remaining edges:", edgesObj.length);
}

// Generate all possible routes
const possibleRoutes = destinations.reduce(
  (acc,d) => acc.flatMap(r => d.map(v => [...r,v])),
  [[]]
);

// A* Pathfinder
function findPath(startId, endId) {
  const open = new Set([startId]);
  const closed = new Set();
  const routes = {[startId]: {prev:null,distance:0,time:0,score:heuristic(startId,endId)}};

  while (open.size) {
    let current = null, bestScore = Infinity;
    for (const id of open) if (routes[id].score < bestScore) {bestScore=routes[id].score;current=id;}
    if (current === endId) break;
    open.delete(current);
    closed.add(current);

    for (const nb of vertexById[current].connections) {
      if (closed.has(nb)) continue;
      const edge = edgeByPair[`${current}-${nb}`];
      if (!edge) continue;
      const newDist = routes[current].distance + edge.distance;
      const newTime = routes[current].time + edge.time;
      const score = newDist + heuristic(nb,endId);
      if (!(nb in routes) || score < routes[nb].score) {
        routes[nb] = {prev:current,distance:newDist,time:newTime,score};
        open.add(nb);
      }
    }
  }

  if (!(endId in routes)) return null;
  const path = [];
  let cur = endId;
  while (cur !== null) {path.push(vertexById[cur]); cur = routes[cur].prev;}
  return {path:path.reverse(),distance:routes[endId].distance,time:routes[endId].time};
}

// Find best route by shortest distance
let bestRoute = null;
for (const route of possibleRoutes) {
  let totaldistance = 0
  let totaltime = 0
  let fullroute = [];
  let failed=false
  let startroom=null
  let endroom=null;

  for (let i=0;i<route.length-1;i++) {
    const s = route[i], e = route[i+1];
    const sId = Number(s.id), eId = Number(e.id);

    if (classroomstart) {
      if (s.name === 'Bloods (Front)') startroom = bloodsrooms[classroomstart][0];
      if (s.name === 'Bloods (Back)') startroom = bloodsrooms[classroomstart][1];
    }
    if (classroomend) {
      if (e.name === 'Bloods (Front)') endroom = bloodsrooms[classroomend][0];
      if (e.name === 'Bloods (Back)') endroom = bloodsrooms[classroomend][1];
    }

    const result = findPath(sId,eId);
    if (!result) {failed=true;break;}
    fullroute.push(result.path);
    totaldistance += result.distance;
    totaltime += result.time;
    if (startroom) totaldistance += startroom[0];
    if (endroom) totaldistance += endroom[0];
  }

  if (!failed) {
    if (!bestRoute || totaldistance < bestRoute.totaldistance) {
      bestRoute = {route, fullroute, totaldistance, totaltime};
    }
  }
}

// Compute elevation and estimated time
let totalelevation = 0;
const flatRoute = bestRoute.fullroute.flat();
for (let i=0;i<flatRoute.length-1;i++) {
  const a = flatRoute[i].id, b = flatRoute[i+1].id;
  const edge = Object.values(edges).find(e=>(e.from===a && e.to===b)||(e.from===b && e.to===a));
  if(edge) totalelevation += edge.elevation;
}
var totaltime = Math.round(bestRoute.totaldistance*0.7 + Math.max(totalelevation,0)*2);
const minutes = Math.floor(totaltime/60);
const seconds = String(totaltime%60).padStart(2,'0');
const estimatedtime = `${minutes}:${seconds}`;

// Build prompt
const destinationsfinal = [];
for (const v of bestRoute.route) {
  if(!destinationsfinal.some(d=>d.id===v.id)) {
    destinationsfinal.push(v);
  }
}
let prompt = '';

if(classroomstart && ['Bloods (Back)','Bloods (Front)'].includes(destinationsfinal[0].name)){
  prompt = `Your Route: ${classroomstart} to ${destinationsfinal[0].name} `;
} else prompt = `Your Route: ${destinationsfinal[0].name} `;
for(let i = 1; i<destinationsfinal.length; i++){
  prompt += `to ${destinationsfinal[i].name} `;
  if(i===destinationsfinal.length-1 && classroomend && ['Bloods (Back)','Bloods (Front)'].includes(destinationsfinal[i].name)){
    prompt += `to ${classroomend}`;
  }
}

// Update DOM
document.getElementById('prompt').innerHTML = prompt;
document.getElementById('distance').innerHTML = `Total Distance: ${Math.floor(bestRoute.totaldistance*0.95)}m`;
document.getElementById('time').innerHTML = `Estimated Time: ${estimatedtime} mins`;

// Draw route on canvas
LoadImage(flatRoute, bestRoute.route);
addDescriptions(flatRoute);

function GetPosition(coordinates){
  const dimensions = [2000,1200];
  const bottom = 51.444687, top=51.452396, left=-1.142394, right=-1.121153;
  return [
    Math.round((coordinates[0]-left)/(right-left)*dimensions[0]),
    Math.round((top-coordinates[1])/(top-bottom)*dimensions[1])
  ];
}

// Image generator with white lines for each edge and green dots for waypoints
function LoadImage(flatRoute, waypoints){
  const lines = [];

  for(let i = 0; i < flatRoute.length-1; i++){
    const a=flatRoute[i].id
    const b=flatRoute[i+1].id
    for(const e of edgesObj){
      if((e.from===a && e.to===b)||(e.from===b && e.to===a)){
        lines.push(e.points)
        break;
      }
    }
  }

  if(!lines.length) {
    return;
  }

  let x = [] 
  let y = [];
  for (const line of lines) {
    for (let i = 0; i < line.length; i++){
      const [px,py] = GetPosition(line[i]);
      x.push(px); 
      y.push(py);
    }
  }
  x.sort((a,b)=>a-b)
  y.sort((a,b)=>a-b);

  let xdiff = x.at(-1)-x[0]
  let ydiff = y.at(-1)-y[0]

  if(ydiff*5/3 > xdiff) {
    xdiff = ydiff*5/3;
  }
  else {
    ydiff = xdiff*3/5;
  }
  let left = x[0] - 60
  let top = y[0] - 36
  let width = xdiff + 120
  let height = ydiff + 72;
  if(top + height >= 1200 || left + width >= 2000){
    left=0; 
    top=0; 
    width=2000; 
    height=1200;
  }

  const img = new Image(600,300); 
  img.src = 'static/BradfieldGo.png'; 
  img.hidden = true; 
  document.getElementById('mapDiv').appendChild(img);

  img.onload=()=>{
    const c = document.getElementById('Canvas'); 
    const ctx = c.getContext('2d');
    ctx.drawImage(img,left,top,width,height,0,0,600,360);
    ctx.strokeStyle='rgb(255,255,255)';
    
    for(const line of lines){
      for(let i =0; i < line.length-1; i++){
        const p1 = GetPosition(line[i])
        const p2 = GetPosition(line[i+1])

        ctx.beginPath()
        ctx.moveTo((p1[0]-left)/width*600,(p1[1]-top)/height*360);
        ctx.lineTo((p2[0]-left)/width*600,(p2[1]-top)/height*360)
        ctx.stroke();
      }
    }
    for(const v of waypoints){
      const p = GetPosition(v.point);

      ctx.beginPath(); 
      ctx.arc((p[0]-left)/width*600,(p[1]-top)/height*360,3,0,2*Math.PI); 
      ctx.fillStyle='rgb(100,255,100)'; 
      ctx.fill();
    }
  };
}

function addDescriptions(flatRoute) {
  const container = document.getElementById('description');
  container.innerHTML = '';

  for (let i = 0; i < flatRoute.length - 1; i++) {
    const a = flatRoute[i].id;
    const b = flatRoute[i+1].id;

    // try both directions
    const key1 = `${a}-${b}`;
    const key2 = `${b}-${a}`;

    var desc = 'Nothing';
    if (edgeDescriptions[key1]) {
      desc = edgeDescriptions[key1][0];
    }
    else if (edgeDescriptions[key2]) {
      desc = edgeDescriptions[key2][1];
    }
    else {
      console.log(key1, key2);
      console.log(edgeDescriptions)
      continue;
    }
    
    if (desc != 'Nothing') {
      const el = document.createElement('h6');
      el.textContent = desc;
      container.appendChild(el);
    }
  }
}
