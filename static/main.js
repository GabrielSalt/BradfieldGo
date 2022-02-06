// Data that was extracted using the python program and has been transferred here
let places = ['A House', 'Art', 'Astro 1', 'Astro 2', 'Astro Tennis Courts', 'Big School', 'Bloods', 'C House', 'CCF Office', 'Chapel', 'Clay Tennis Courts', 'D House', 'Design Centre', 'E House', 'F House', "Faulkner's Dining Hall", "Faulkner's House", 'G House', 'Golf Course', 'Greeker', 'Grey School', 'H House', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'History', 'I House', 'Indoor Tennis Courts', 'J House', 'K House', 'Library', 'M House', 'MFL', 'Major', 'Maths', 'Max', 'Med Centre', 'Music Centre', 'New Ground', 'Old Sports Hall', 'Pit', 'Rectory 1', 'Rectory 2', 'Rectory 3', 'Rux', 'Science', 'Sports Centre', 'Stunt Pavilion']
let types = ['Academic', 'House', 'Sports', 'Other']
let modes = ['Default', 'Wheelchair']
let others = ['CCF Office', 'Chapel', "Faulkner's Dining Hall", 'Greeker', 'Med Centre', 'Old Sports Hall', 'Stunt Pavilion']
let houses = ['A House', 'C House', 'D House', 'E House', 'F House', "Faulkner's House", 'G House', 'H House', 'I House', 'J House', 'K House', 'M House']
let academics = ['Art','Big School', 'Bloods', 'Design Centre', 'Grey School', 'History', 'Library', 'MFL', 'Maths', 'Music Centre','Science']
let sports = ['Astro 1', 'Astro 2', 'Astro Tennis Courts', 'Clay Tennis Courts', 'Golf Course', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'Indoor Tennis Courts', 'Major', 'Max', 'New Ground', 'Pit', 'Rectory 1', 'Rectory 2', 'Rectory 3', 'Rux', 'Sports Centre']
let bloodsrooms = {'BD1':[[120,'From snake door, walk straight along the corridor and continue past the right turn to quad to the end of the corridor by the chapel. BD1 will be on your left up a small set of stairs.'],[10,'From the back entrance of bloods, BD1 will be straight ahead up a small set of stairs.']],'BD2':[[110,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD2 will be the last classroom on the left.'],[10, 'From the back entrance to bloods, BD2 will be the first room on the left in the main corridor.']],'BD3':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD3 will be the second last classroom on the left.'],[20, 'From the back entrance to bloods, BD3 will be the second room on the right in the main corridor.']],'BD4':[[90,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD4 will be the third classroom on the left.'],[30, 'From the back entrance to bloods, BD4 will be the third room on the right in the main corridor.']],'BD5':[[90,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD5 will be the second classroom on the left.'],[30,'From the back entrance to bloods, BD5 will be the second last room on the right in the main corridor.']],'BD6':[[80,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD6 will be the first classroom on the left.'],[40,'From the back entrance to bloods, BD6 will be the last room on the right in the main corridor.']],'BD7':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD7.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD7.']],'BD8':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD8.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD8.']],'BD9':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD9.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD9.']],'BD10':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD10.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD10.']],'BD11':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, Continue to the end until you reach a set of stairs, walk up the stairs to BD11.'],[50,'From the back entrance to bloods, Walk up the stairs on the right to BD11.']],'BD12':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, Continue to the end until you reach a set of stairs, walk up the stairs to BD12.'],[50,'From the back entrance to bloods, Walk up the stairs on the right to BD12.']],'Q1':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q1.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q1.']],'Q2':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q2.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q2.']],'Q3':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q3.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q3.']],'Q4':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q4.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q4.']],'Q5':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q5.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q5.']],'Q6':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q6.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q6.']],'Q7':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q7.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q7.']],'EF1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to EF1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to EF1.']],'EF1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to PO1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to PO1.']],'CL1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to CL1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to CL1.']],'CL2':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to CL2'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to CL2.']]}
let choices = ['start','midpoint1','midpoint2','midpoint3','end']

var zoom = 1
const ZOOM_SPEED = 0.05;
var selected = 'start'

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
        if(e.deltaY > 0 && zoom < 4 && posX < 600 && posY < 360 && posX > 0 && posY > 0){
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

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");  
var img = document.getElementById("Map")
ctx.drawImage(img,0,0,2000,1200,0,0,600,360);
setTimeout(function(){
    var img = document.getElementById("Map")
    ctx.drawImage(img,0,0,2000,1200,0,0,600,360);
}, 200)
setTimeout(function(){
    var img = document.getElementById("Map")
    ctx.drawImage(img,0,0,2000,1200,0,0,600,360);
}, 200)
setTimeout(function(){
    var img = document.getElementById("Map")
    ctx.drawImage(img,0,0,2000,1200,0,0,600,360);
}, 200)
setTimeout(function(){
    var img = document.getElementById("Map")
    ctx.drawImage(img,0,0,2000,1200,0,0,600,360);
}, 200)
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
    var elem = document.getElementById('Canvas')
    var elemLeft = elem.offsetLeft + elem.clientLeft
    var elemTop = elem.offsetTop + elem.clientTop
    var posX = event.pageX - elemLeft
    var posY = event.pageY - elemTop
    var dimensions = [600,360]
    var ogbottom = 51.444687
    var ogtop = 51.452396
    var ogleft = -1.142394
    var ogright = -1.121153
    var left = ogleft+(ogright-ogleft)*(0.5-0.5/zoom)
    var top = ogtop-(ogtop - ogbottom)*(0.5-0.5/zoom)
    var right = left + (ogright-ogleft)*(1/zoom)
    var bottom = top - (ogtop-ogbottom)*(1/zoom)
    var positions = []
    for (let vertex of vertexs){
        if (places.includes(vertex.place)){
            coordinates = vertex.point
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
    selected = choices[choices.indexOf(selected)+1]
}

// This function filters down the list of places based on a category that the user selects
function FilterSelection(element){
    var x = element.value;
    var newSelectName = element.name.replace('category','')
    var newSelect = document.getElementById(newSelectName);
    newSelect.innerHTML = '';

    if (newSelectName[0] == 'm'){
        var none = document.createElement('option');
        none.value = 'none';
        none.innerHTML = 'None';
        newSelect.appendChild(none);
    }

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

function FilterBloods(element){
    selected = choices[choices.indexOf(element.id)+1]
    let classroomSelector = document.getElementById(`classroom${element.id}`)
    if (element.value == 'Bloods'){
        classroomSelector.hidden = false
        var newRoom = document.createElement('option');
            newRoom.value = 'none';
            newRoom.innerHTML ='None';
        classroomSelector.appendChild(newRoom);
        for (let room of Object.keys(bloodsrooms)){
            var newRoom = document.createElement('option');
            newRoom.value = room;
            newRoom.innerHTML = room;
            classroomSelector.appendChild(newRoom);
        }
    }
    else {
        classroomSelector.value = 'None'
        classroomSelector.hidden = true
    }
}


Home()