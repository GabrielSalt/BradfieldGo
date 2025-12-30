// Data that was extracted using the python program and has been transferred here
import {vertices} from "./vertices.js";

let places = ['A House', 'Art', 'Astro 1', 'Astro 2', 'Astro Tennis Courts', 'Big School', 'Bloods', 'C House', 'CCF Office', 'Chapel', 'Clay Tennis Courts', 'D House', 'Design Centre', 'E House', 'F House', "Faulkner's Dining Hall", "Faulkner's House", 'G House', 'Golf Course', 'Greeker', 'Grey School', 'H House', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'History', 'I House', 'Indoor Tennis Courts', 'J House', 'K House', 'Library', 'M House', 'MFL', 'Major', 'Maths', 'Max', 'Med Centre', 'Music Centre', 'New Ground', 'Old Sports Hall', 'Pit', 'Rectory 1', 'Rectory 2', 'Rectory 3', 'Rux', 'Science', 'Sports Centre', 'Stunt Pavilion']
let types = ['Academic', 'House', 'Sports', 'Other']
let modes = ['Default', 'Wheelchair']
let others = ['CCF Office', 'Chapel', "Faulkner's Dining Hall", 'Greeker', 'Med Centre', 'Old Sports Hall', 'Stunt Pavilion']
let houses = ['A House', 'C House', 'D House', 'E House', 'F House', "Faulkner's House", 'G House', 'H House', 'I House', 'J House', 'K House', 'M House']
let academics = ['Art','Big School', 'Bloods', 'Design Centre', 'Grey School', 'History', 'Library', 'MFL', 'Maths', 'Music Centre','Science']
let sports = ['Astro 1', 'Astro 2', 'Astro Tennis Courts', 'Clay Tennis Courts', 'Golf Course', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'Indoor Tennis Courts', 'Major', 'Max', 'New Ground', 'Pit', 'Rectory 1', 'Rectory 2', 'Rectory 3', 'Rux', 'Sports Centre']
let choices = ['start','midpoint1','midpoint2','midpoint3','end']

var zoom = 1
const ZOOM_SPEED = 0.05;
var selected = 'start'

var img = new Image(600, 300);
img.id = 'Map'
img.src = 'static/BradfieldGo.png';
img.hidden = true
var div = document.getElementById('constantSize')
div.appendChild(img)
img.onload = () => {
    var img = document.getElementById('Map')
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");  
    ctx.drawImage(img,0,0,2000,1200,0,0,600,360);
}
var img = document.getElementById("Map");

// This function is run when the page is first loaded, or when the home page is pressed
function Home(){
    // This part draws the bradfield map image to the canvas
    // The following 3 loops are used to iterate through the lists and create drop-down menus
    var categoryselects = [].slice.call(document.getElementsByClassName('category'))
    var placeselects = [].slice.call(document.getElementsByClassName('place'))
    var modeselect = document.getElementById('modes')

for (var x = 0; x <= categoryselects.length-1; x++){
    for (var i = 0; i<=types.length-1; i++){
        var opt = document.createElement('option');
        opt.value = types[i];
        opt.innerHTML = types[i];
        categoryselects[x].appendChild(opt);
    }
}
for (var x = 0; x <= placeselects.length-1; x++){
    for (var i = 0; i<=places.length-1; i++){
        var opt = document.createElement('option');
        opt.value = places[i];
        opt.innerHTML = places[i];
        placeselects[x].appendChild(opt);
    }
}
for (var i = 0; i<=modes.length-1; i++){
    var opt = document.createElement('option');
    opt.value = modes[i];
    opt.innerHTML = modes[i];
    modeselect.appendChild(opt);
}

//This function detects the type of device the user is on
const ua = navigator.userAgent;
if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    document.getElementById('InteractMessage').innerHTML = 'Slide to zoom and tap to select places, or use the drop-down menus.'
}
else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    document.getElementById('InteractMessage').innerHTML = 'Slide to zoom and tap to select places, or use the drop-down menus.'
}
else {
    document.getElementById('InteractMessage').innerHTML = 'Scroll to zoom and click to select places, or use the drop-down menus.'
    document.getElementById('myRange').hidden = 'true'
    //This function allows the user to zoom in and out on the map to select places - this is for desktop
    document.addEventListener("wheel", function(e) {
        var elem = document.getElementById('Canvas') 
        var ctx = elem.getContext("2d"); 
        var elemLeft = elem.offsetLeft + elem.clientLeft
        var elemTop = elem.offsetTop + elem.clientTop
        var posX = e.pageX - elemLeft
        var posY = e.pageY - elemTop
        if(e.deltaY > 0 && zoom < 4 && posX < window.innerWidth*0.9 && posY < window.innerWidth*0.9*360/600 && posX > 0 && posY > 0){
            ctx.clearRect(0, 0, elem.width, elem.height);  
            ctx.scale(1/zoom,1/zoom)
            zoom += ZOOM_SPEED
            ctx.scale(zoom,zoom)
            ctx.drawImage(img,1000-(1000/zoom),600-(600/zoom),2000,1200,0,0,600,360);
        }else if (zoom > 1 && posX<600 && posY<360 && posX > 0 && posY > 0){ 
            ctx.clearRect(0, 0, elem.width, elem.height);  
            ctx.scale(1/zoom,1/zoom) 
            zoom -= ZOOM_SPEED
            ctx.scale(zoom,zoom)
            ctx.drawImage(img,1000-(1000/zoom),600-(600/zoom),2000,1200,0,0,600,360);
        }
    })
};  

}

//This function allows the user to zoom in and out on the map to select places - this is for mobile
function Zoom(){
    var elem = document.getElementById('Canvas') 
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");  
    var img = document.getElementById("Map")
    ctx.clearRect(0, 0, elem.width, elem.height);  
    ctx.scale(1/zoom,1/zoom)
    zoom = document.getElementById('myRange').value / 100
    ctx.scale(zoom,zoom)
    ctx.drawImage(img,1000-(1000/zoom),600-(600/zoom),2000,1200,0,0,600,360);
}

// This function gets the position that the user clicks on the map and finds the nearest place
function Select(event){
    document.getElementById(`${selected}category`).value='Category'
    var newSelect = document.getElementById(`${selected}`)

    var none = document.createElement('option');
    none.value = 'none';
    none.innerHTML = 'None';
    newSelect.appendChild(none);

    var list = places
    for (var i = 0; i<=list.length-1; i++){
        var opt = document.createElement('option');
        opt.value = list[i];
        opt.innerHTML = list[i];
        newSelect.appendChild(opt);
    }

    if (window.innerWidth < 908){
        var totalw = (window.innerWidth*0.9)
        var totalh = (window.innerWidth*0.9)*360/600
    }
    else {
        var totalw = 600
        var totalh = 360
    }
    var elem = document.getElementById('Canvas')
    var elemLeft = elem.offsetLeft + elem.clientLeft
    var elemTop = elem.offsetTop + elem.clientTop
    var posX = event.pageX - elemLeft
    var posY = event.pageY - elemTop
    var dimensions = [totalw, totalh]
    var ogbottom = 51.444687
    var ogtop = 51.452396
    var ogleft = -1.142394
    var ogright = -1.121153
    var left = ogleft+(ogright-ogleft)*(0.5-0.5/zoom)
    var top = ogtop-(ogtop - ogbottom)*(0.5-0.5/zoom)
    var right = left + (ogright-ogleft)*(1/zoom)
    var bottom = top - (ogtop-ogbottom)*(1/zoom)
    var positions = []

    var verticesList = Object.values(JSON.parse(`{${Object.entries(vertices).map(([key, value]) => `"${key}": ${JSON.stringify(value)}`).join(",")}}`))

    for (let vertex of verticesList){
        if (places.includes(vertex.place)){
            var coordinates = vertex.point
            var pos = []
            pos.push(Math.round((coordinates[0]-left)/(right-left)*dimensions[0]))
            pos.push(Math.round((top-coordinates[1])/(top-bottom)*dimensions[1]))
            positions.push([vertex.place,pos])
        }
    }
    var newpositions = Object.values(positions)
    for (let x = 0; x < newpositions.length; x++){
        var newposX = Math.abs(newpositions[x][1][0] - posX)
        var newposY = Math.abs(newpositions[x][1][1] - posY)
        newpositions[x] = [newposX,newposY,newposX+newposY]
    }
    newpositions.sort(compareThirdColumn);
    function compareThirdColumn(a, b) {
        if (a[2] === b[2]) {
            return 0;
        }
        else {
            return (a[2] < b[2]) ? -1 : 1;
        }
    }
    
    for (let position of positions){
        if (Math.abs(position[1][0]-posX) == newpositions[0][0] && Math.abs(position[1][1]-posY) == newpositions[0][1]){
            var closest = position[0]
        }
    }
    document.getElementById(`${selected}`).value=closest
    var selectedElem = document.getElementById(`${selected}`)
    selected = selectedElem.id
    selected = choices[choices.indexOf(selected)+1]
}

// This function filters down the list of places based on a category that the user selects
function FilterSelection(element){
    var x = element.value;
    var newSelectName = element.name.replace('category','')
    var newSelect = document.getElementById(newSelectName);
    newSelect.innerHTML = '';

    var none = document.createElement('option');
    none.value = 'none';
    none.innerHTML = 'None';
    newSelect.appendChild(none);

    if (x == 'Category'){var list = places} 
    else if (x == 'House'){var list = houses}   
    else if (x == 'Academic'){var list = academics}
    else if (x == 'Sports'){var list = sports}
    else if (x == 'Other'){var list = others}

    for (var i = 0; i<=list.length-1; i++){
        var opt = document.createElement('option');
        opt.value = list[i];
        opt.innerHTML = list[i];
        newSelect.appendChild(opt);
    }
}

window.Select = Select;
window.Zoom = Zoom;
window.FilterSelection = FilterSelection;
window.Home = Home;

Home()