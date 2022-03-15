// Data that was extracted using the python program and has been transferred here
import * as edgeobj from './edges.js';
import * as vertexobj from './vertexs.js';
var edges = Object.values(edgeobj.edges)
var vertexs = Object.values(vertexobj.vertexs)
var vertexdict = {}
for (let vertex of vertexs){vertexdict[vertex.name] = vertex}
let bloodsrooms = {'BD1':[[120,'From snake door, walk straight along the corridor and continue past the right turn to quad to the end of the corridor by the chapel. BD1 will be on your left up a small set of stairs.'],[10,'From the back entrance of bloods, BD1 will be straight ahead up a small set of stairs.']],'BD2':[[110,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD2 will be the last classroom on the left.'],[10, 'From the back entrance to bloods, BD2 will be the first room on the left in the main corridor.']],'BD3':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD3 will be the second last classroom on the left.'],[20, 'From the back entrance to bloods, BD3 will be the second room on the right in the main corridor.']],'BD4':[[90,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD4 will be the third classroom on the left.'],[30, 'From the back entrance to bloods, BD4 will be the third room on the right in the main corridor.']],'BD5':[[90,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD5 will be the second classroom on the left.'],[30,'From the back entrance to bloods, BD5 will be the second last room on the right in the main corridor.']],'BD6':[[80,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD6 will be the first classroom on the left.'],[40,'From the back entrance to bloods, BD6 will be the last room on the right in the main corridor.']],'BD7':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD7.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD7.']],'BD8':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD8.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD8.']],'BD9':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD9.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD9.']],'BD10':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD10.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD10.']],'BD11':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, Continue to the end until you reach a set of stairs, walk up the stairs to BD11.'],[50,'From the back entrance to bloods, Walk up the stairs on the right to BD11.']],'BD12':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, Continue to the end until you reach a set of stairs, walk up the stairs to BD12.'],[50,'From the back entrance to bloods, Walk up the stairs on the right to BD12.']],'Q1':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q1.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q1.']],'Q2':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q2.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q2.']],'Q3':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q3.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q3.']],'Q4':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q4.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q4.']],'Q5':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q5.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q5.']],'Q6':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q6.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q6.']],'Q7':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q7.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q7.']],'EF1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to EF1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the Dining Hall and take the stairs on the right, take the stairs up to EF1.']],'EF1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to PO1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the Dining Hall and take the stairs on the right, take the stairs up to PO1.']],'CL1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to CL1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the Dining Hall and take the stairs on the right, take the stairs up to CL1.']],'CL2':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to CL2'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the Dining Hall and take the stairs on the right, take the stairs up to CL2.']]}
var score = null

const Route = (previous, distance, time, score) => {
    return {
        previous,
        distance,
        time,
        score,
    }
}
const GetDistance = (coordinates) => {
    var x = 0
    const φ1 = coordinates[x][1] * Math.PI/180;
    const φ2 = coordinates[x+1][1] * Math.PI/180;
    const Δφ = (coordinates[x+1][1]-coordinates[x][1]) * Math.PI/180;
    const Δλ = (coordinates[x+1][0]-coordinates[x][0]) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = 6371e3 * c; 

    var distance = d
    var height = coordinates[x+1][2] - coordinates[x][2]
    return [distance,height]
}
// Accessing form data
var params = new URLSearchParams(location.search)
var start = params.get('start')
var midpoint1 = params.get('midpoint1')
var midpoint2 = params.get('midpoint2')
var midpoint3 = params.get('midpoint3')
var end = params.get('end')
var constraint = params.get('modes')
var classroomstart = null
var classroomend = null
try {var classroomstart = params.get('classroomstart')}catch{}
try {var classroomend = params.get('classroomend')}catch{}
if (classroomstart == 'none'){
    classroomstart = null
}
if (classroomend == 'none'){
    classroomend = null
}


var midpoints = [start,midpoint1, midpoint2, midpoint3,end]
var tempmidpoints = {'end':end}
for (let x=0; x < 2; x++){
    for (let midpoint of midpoints){
        if (midpoint == 'none'){
            midpoints.splice(midpoints.indexOf(midpoint),1)
        }
    }
}
if (midpoints.length < 2){
    var form = document.getElementById('Error');
    alert('Please enter atleast two locations for your travel.')
    form.submit();
}
var destinations = []
var startlist = []
var midpointlist = []
var finishlist = []

for (let vertex of vertexs){
    if (vertex.place == 'G House'){
        var gHouse = vertex
        break
    }
}

if (start == 'D House'){
    startlist.push(gHouse)
}
if (end == 'D House'){
    finishlist.push(gHouse)
}

for (let vertex of vertexs){
    if (vertex.place == start){
        startlist.push(vertex)
    }
}
var ogstart = startlist

for (let midpoint of midpoints){
    var dHouseAdded = false
    var midpointsublist = []
    if (midpoint == 'D House' && dHouseAdded == false){
        midpointsublist.push(gHouse)
        dHouseAdded = true
    }
    for (let vertex of vertexs){
        if (vertex.place == midpoint){
            midpointsublist.push(vertex)
        }
    }
    if (midpointsublist != []){
        destinations.push(midpointsublist)
    }
}

if (constraint == 'Wheelchair'){
    for (let edge of edges){
        if (edge.wheelchair == false){
            edges.splice(edges.indexOf(edge),1);
        }
    }
}

var edgenames = []
for (let edge of edges){
    edgenames.push(`${edge.start}-${edge.end}`)
}

var numPossibleRoutes = 1
for (let destination of destinations){
    if (destination.length > 1){
        numPossibleRoutes *= destination.length
    }
}
var possibleRoutes = []
for (let x = 0; x < numPossibleRoutes; x++){
    possibleRoutes.push(new Array())
}
var alternate = 1
for (let destination of destinations){
    if (destination.length >= 2){
        var pos = 0
        for (let x = 0; x < possibleRoutes.length; x++){
        var temppos = Math.floor(pos/alternate)
        possibleRoutes[pos].push(destination[temppos%destination.length])
        pos += 1
    }
    alternate *= destination.length
    }
    else {
        for (let x = 0; x < possibleRoutes.length; x++){
            possibleRoutes[x].push(destination[0])
        }
    }
}

var comparisons = []
for (let y = 0; y < possibleRoutes.length; y++){
    var destinations = possibleRoutes[y]  
    var totaldistance = 0 
    var totaltime = 0
    var fullroute = []
    var startroom = null
    var endroom = null
    for (let x = 0; x < destinations.length-1; x++){
        if (classroomstart != null){
            if (destinations[0].name == 'Bloods (Front)'){
                startroom = bloodsrooms[classroomstart][0]
            }
            else if (destinations[0].name == 'Bloods (Back)'){
                startroom = bloodsrooms[classroomstart][1]
            }
        }
        if (classroomend != null){
            if (destinations[destinations.length-1].name == 'Bloods (Front)'){
                endroom = bloodsrooms[classroomend][0]
            }
            else if (destinations[destinations.length-1].name == 'Bloods (Back)'){
                endroom = bloodsrooms[classroomend][1]
            }
        }
        var start = destinations[x]
        var end = destinations[x+1]
        var previous = start
        var current = start
        var searched = [start.name] 
        var visited = [start.name]
        var routes = {}  
        var starttoend = GetDistance([start.point, end.point])
        var enddistance = ((starttoend[0])**2+(starttoend[1])**2)**(1/2)
        routes[start.name] = Route(previous,distance = 0,time = 0,score = enddistance) 
        var Continue = true
        while (Continue){
            for (let connection of current.connections){
                if (edgenames.includes(`${current.name}-${connection}`) || edgenames.includes(`${connection}-${current.name}`)){
                    var position = vertexdict[connection]
                    starttoend = GetDistance([position.point, end.point])
                    enddistance = ((starttoend[0])**2+(starttoend[1])**2)**(1/2)
                    var previous = current
                    var olddistance = routes[previous.name].distance
                    var oldtime = routes[previous.name].time
                    for (let edge of edges){
                        if ((edge.start == connection && edge.end == current.name) || (edge.start == current.name && edge.end == connection)){
                            var edgechoice = edge
                        }
                    } 
                    var distance = edgechoice.distance
                    var time = edgechoice.time                      
                    var newdistance = olddistance + distance
                    var newtime = oldtime + time
                    var newscore = newdistance + enddistance
                    }
                    if (visited.includes(position.name)){
                        if (routes[position.name].score > newscore){
                            delete routes[position.name]
                            routes[position.name] = Route(previous,distance = newdistance,time = newtime,score = newscore)
                            if (searched.includes(position.name)){
                                searched.splice(position.name,1)
                            }
                        }
                    }
                    else {
                        routes[position.name] = Route(previous,distance = newdistance,time = newtime,score = newscore)
                        visited.push(position.name)
                    }
            }
            var choices = []
            var choicescores = []
            for (let choice of visited){
                if (!(searched.includes(choice))){
                    choices.push(choice)
                    choicescores.push(routes[choice].score)
                }
            }
            var tempchoicescores = choicescores.slice()
            tempchoicescores.sort(function(a, b){
                return a-b;
            });
            current = choicescores.indexOf(tempchoicescores[0])
            current = choices[current]
            current = vertexdict[current]
            if (current == undefined){
                var form = document.getElementById('Error');
                alert('Unfortunately, this route is not possible with the given constraint.')
                form.submit();
            }
            searched.push(current.name)
            if (current.name == end.name){
                Continue = false
            }  
        }
        var route = [end]
        current = end
        var currentprevious = routes[current.name].previous
        while (currentprevious != start){
            route.push(routes[current.name].previous)
            for (let vertex of vertexs){
                if (routes[current.name].previous.name == vertex.name){
                    current = vertex
                    break
                }
            }
            currentprevious = routes[current.name].previous
        }

        route.push(start)
        route = route.reverse().flat()
        fullroute.push(route)
        totaldistance += routes[end.name].distance
        totaltime += routes[end.name].time
        if (end.name == 'Bloods (Front)' || end.name == 'Bloods (Back)'){
            if (classroomend){
                totaldistance += endroom[0]
            }
        }
        if (start.name == 'Bloods (Front)' || start.name == 'Bloods (Back)'){
            if (classroomstart){
                totaldistance += startroom[0]
            }
        }
    }
    comparisons.push([destinations,totaldistance,totaltime,fullroute])
}
let distcomparison = []
for (let comparison of comparisons){
    distcomparison.push(comparison[1])
}

let disttemp = distcomparison.slice()
disttemp.sort(function(a, b){
    return a-b;
});
let firstdist = disttemp[0]
for (let comparison of comparisons){
    if (firstdist == comparison[1]){
        var destinations = comparison[0]
        var distance = comparison[1]
        var time = comparison[2]
        var route = comparison[3]
        break
    }
} 

totaltime = time
var totaldistance = Math.round(distance)
var paths = []
var descriptions = []
var totalelevation = 0
var upwards = 0
route = route.flat()
for (let x = 0; x < route.length-1; x++){
    if (x == 0 && (route[x].name == 'Bloods (Back)' || route[x].name == 'Bloods (Front)') && startroom != null){
        descriptions.push(startroom[1])
    }
    if (route[x].name == route[x+1].name){
        continue
    }
    for (let edgetemp of edges){
        if ((edgetemp.start == route[x].name && edgetemp.end == route[x+1].name) || (edgetemp.start == route[x+1].name && edgetemp.end == route[x].name)){
            var edge = edgetemp
        }
    }
    if (edge.start == route[x].name && edge.end == route[x+1].name){
        var description = edge.forwards
        var height = edge.elevation
    }
    else if (edge.start == route[x+1].name && edge.end == route[x].name){
        var description = edge.reverse
        var height = edge.elevation*-1
    }
    paths.push([`${edge.start}-${edge.end}`,edge.points, description])
    if (description != "Nothing" && description != descriptions[descriptions.length-1]){
        if (constraint == 'Wheelchair'){
            description = description.replace(/walk/g,'wheel')
            description = description.replace(/Walk/g,'Wheel')
            console.log(description)
            if (description != descriptions[descriptions.length-1]){
                descriptions.push(description)
            }
        }
        else{
            descriptions.push(description)
        }
    }
    if (x == route.length-2 && (route[x+1].name == 'Bloods (Back)' || route[x+1].name == 'Bloods (Front)') && endroom != null){
        descriptions.push(endroom[1])
    } 
    totalelevation += height
    if (height > 0){
        upwards += height
    }
}
totalelevation = Math.round(totalelevation)

totaltime = 0
totaltime += totaldistance*0.7
if (totalelevation > 0){
    totaltime += totalelevation*2
}
totaltime = Math.round(totaltime)

var minutes = Math.floor(totaltime/60)
var seconds = Math.round(totaltime % 60)
if (seconds < 10){
    seconds = `0${seconds}`
}
var estimatedtime = `${minutes}:${seconds}`

let points = []
let destinationsfinal = []
for (let place of destinations){
    if (route.includes(place)){
        destinationsfinal.push(place)
        points.push(place)
    }
}
for (let x=0; x < destinationsfinal.length-1; x++){
    if (destinationsfinal[x] == destinationsfinal[x+1]){
        destinationsfinal.splice(x+1,1)
    }
}
var prompt = ''
if (classroomstart != null && (destinationsfinal[0].name == 'Bloods (Back)' || destinationsfinal[0].name == 'Bloods (Front)')){
    prompt += `Your Route: ${classroomstart} `
    prompt += `to ${destinationsfinal[0].name} `
}
else {
    prompt = `Your Route: ${destinationsfinal[0].name} `
}
for (let i = 1; i <= destinationsfinal.length-1; i++){
    prompt += `to ${destinationsfinal[i].name} `
    if (i == destinationsfinal.length-1 && (destinationsfinal[i].name == 'Bloods (Back)' || destinationsfinal[i].name == 'Bloods (Front)') && classroomend != null){
        prompt += `to ${classroomend}`
    }
}

document.getElementById('prompt').innerHTML =  prompt
document.getElementById('distance').innerHTML = `Total Distance: ${Math.floor(totaldistance*0.95)}m`
document.getElementById('time').innerHTML = `Estimated Time: ${estimatedtime}mins`
document.getElementById('elevation').innerHTML = `Net Elevation Change: ${totalelevation}m`

for (let description of descriptions){
    var desc = document.createElement('h6');
    desc.innerHTML = description;
    document.getElementById('description').appendChild(desc);
}

function GetPosition(coordinates){
    var dimensions = [2000,1200]
    var pos = []
    var bottom = 51.444687
    var top = 51.452396
    var left = -1.142394
    var right = -1.121153
    pos.push(Math.round((coordinates[0]-left)/(right-left)*dimensions[0]))
    pos.push(Math.round((top-coordinates[1])/(top-bottom)*dimensions[1]))
    return pos
}

setTimeout(LoadImage,100)

// Lots of difficult maths to translate the coordinates on the full image to those of the zoomed in version (so the route is more visible)
function LoadImage () {
    var lines = []
    for (let i = 0; i < route.length - 1; i++){
        for (let edge of edges){
            if ((edge.start == route[i].name && edge.end == route[i+1].name) || (edge.start == route[i+1].name && edge.end == route[i].name)){
                lines.push(edge.points)
            }
        }
    }
    var x = []
    var y = []
    for (let line of lines){
        for (let i = 0; i < line.length - 1 ; i++){
            var pos1 = GetPosition(line[i])
            x.push(pos1[0])
            y.push(pos1[1])
            var pos2 = GetPosition(line[i+1])
            x.push(pos2[0])
            y.push(pos2[1])
        }
    }
    x.sort(function(a, b){
        return a-b;
    });
    y.sort(function(a, b){
        return a-b;
    });
    var xdiff = x[x.length-1] - x[0]
    var ydiff = y[y.length-1] - y[0]

    if (ydiff * 5/3 > xdiff){
        xdiff = ydiff * 5/3
    }
    else{
        ydiff = xdiff * 3/5
    }

    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("Map");
    var left = x[0]-60
    var top = y[0]-36
    var width = xdiff+120
    var height = ydiff+72

    if (top+height >= 1200 || left+width >= 2000){
        left = 0
        top = 0
        width = 2000
        height = 1200
    }
    var img = new Image(600, 300);
    img.id = 'Map'
    img.src = 'static/BradfieldGo.png';
    img.hidden = true
    var div = document.getElementById('mapDiv')
    div.appendChild(img)
    img.onload = () => {
        var img = document.getElementById('Map')
        var c = document.getElementById("Canvas");
        var ctx = c.getContext("2d");  
        ctx.drawImage(img,left,top,width,height,0,0,600,360);
        for (let line of lines){
            for (let i = 0; i < line.length - 1 ; i++){
                var pos1 = GetPosition(line[i])
                var pos2 = GetPosition(line[i+1])
                var c = document.getElementById("Canvas");
                var ctx = c.getContext("2d");
                ctx.strokeStyle = 'rgb(255,255,255)'
                ctx.moveTo((pos1[0]-left)/width*600, (pos1[1]-top)/height*360);
                ctx.lineTo((pos2[0]-left)/width*600, (pos2[1]-top)/height*360);
                ctx.stroke();
            }
        }
        for (let destination of destinationsfinal){
            var pos = GetPosition(destination.point)
            var c = document.getElementById("Canvas");
            var ctx = c.getContext("2d");
            ctx.strokeStyle = 'rgb(255,255,255)'
            ctx.fillStyle = 'rgb(100,255,100)'
            ctx.beginPath();
            ctx.arc((pos[0]-left)/width*600, (pos[1]-top)/height*360, 2, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }
}