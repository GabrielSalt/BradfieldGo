// Data that was extracted using the python program and has been transferred here
let places = ['A House', 'Art', 'Astro 1', 'Astro 2', 'Astro Tennis Courts', 'Big School', 'Bloods', 'C House', 'CCF Office', 'Chapel', 'Clay Tennis Courts', 'D House', 'Design Centre', 'E House', 'F House', "Faulkner's Dining Hall", "Faulkner's House", 'G House', 'Golf Course', 'Greeker', 'Grey School', 'H House', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'History', 'I House', 'Indoor Tennis Courts', 'J House', 'K House', 'Library', 'M House', 'MFL', 'Major', 'Maths', 'Max', 'Med Centre', 'Music Centre', 'New Ground', 'Old Sports Hall', 'Pit', 'Rectory 1', 'Rectory 2', 'Rectory 3', 'Rux', 'Science', 'Sports Centre', 'Stunt Pavilion']
let types = ['Academic', 'House', 'Sports', 'Other']
let modes = ['Default', 'Wheelchair']
let others = ['CCF Office', 'Chapel', "Faulkner's Dining Hall", 'Greeker', 'Med Centre', 'Old Sports Hall', 'Stunt Pavilion']
let houses = ['A House', 'C House', 'D House', 'E House', 'F House', "Faulkner's House", 'G House', 'H House', 'I House', 'J House', 'K House', 'M House']
let academics = ['Art','Big School', 'Bloods', 'Design Centre', 'Grey School', 'History', 'Library', 'MFL', 'Maths', 'Music Centre','Science']
let sports = ['Astro 1', 'Astro 2', 'Astro Tennis Courts', 'Clay Tennis Courts', 'Golf Course', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'Indoor Tennis Courts', 'Major', 'Max', 'New Ground', 'Pit', 'Rectory 1', 'Rectory 2', 'Rectory 3', 'Rux', 'Sports Centre']
let bloodsrooms = {'BD1':[[120,'From snake door, walk straight along the corridor and continue past the right turn to quad to the end of the corridor by the Chapel. BD1 will be on your left up a small set of stairs.'],[10,'From the back entrance of bloods, BD1 will be straight ahead up a small set of stairs.']],'BD2':[[110,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD2 will be the last classroom on the left.'],[10, 'From the back entrance to bloods, BD2 will be the first room on the left in the main corridor.']],'BD3':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD3 will be the second last classroom on the left.'],[20, 'From the back entrance to bloods, BD3 will be the second room on the right in the main corridor.']],'BD4':[[90,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD4 will be the third classroom on the left.'],[30, 'From the back entrance to bloods, BD4 will be the third room on the right in the main corridor.']],'BD5':[[90,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD5 will be the second classroom on the left.'],[30,'From the back entrance to bloods, BD5 will be the second last room on the right in the main corridor.']],'BD6':[[80,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, BD6 will be the first classroom on the left.'],[40,'From the back entrance to bloods, BD6 will be the last room on the right in the main corridor.']],'BD7':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD7.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD7.']],'BD8':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD8.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD8.']],'BD9':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD9.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD9.']],'BD10':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, walk up the set of stairs on the left to BD10.'],[50,'From the back entrance to bloods, walk down the main corridor in bloods until you reach a staircase on the right, continue up the stairs to BD10.']],'BD11':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, Continue to the end until you reach a set of stairs, walk up the stairs to BD11.'],[50,'From the back entrance to bloods, Walk up the stairs on the right to BD11.']],'BD12':[[100,'From snake door, walk straight along the corridor and continue past the right turn to quad until you reach bloods corridor, Continue to the end until you reach a set of stairs, walk up the stairs to BD12.'],[50,'From the back entrance to bloods, Walk up the stairs on the right to BD12.']],'Q1':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q1.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q1.']],'Q2':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q2.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q2.']],'Q3':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q3.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q3.']],'Q4':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q4.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q4.']],'Q5':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q5.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q5.']],'Q6':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q6.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q6.']],'Q7':[[50,'From snake door, walk straight along the corridor and continue straight up the set of stairs to Quad, Continue to the end until you reach Q7.'],[70,'From the back entrance to bloods, Walk down the main corridor, turn left and then right and up the stairs to Quad on the right, continue up to Q7.']],'EF1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to EF1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to EF1.']],'EF1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to PO1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to PO1.']],'CL1':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to CL1'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to CL1.']],'CL2':[[40,'From snake door, walk straight along the corridor and take the first left, take the stairs up on the right to CL2'],[110,'From the back entrance to bloods, Walk down the main corridor, turn left at the first turning and continue along the path until your approaching snake door, turn right towards the dining hall and take the stairs on the right, take the stairs up to CL2.']]}
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
    if (window.innerWidth < 908){
        totalw = (window.innerWidth*0.9)
        totalh = (window.innerWidth*0.9)*360/600
    }
    else {
        totalw = 600
        totalh = 360
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
    var vertexs = [{'name': 'hill2b', 'point': [-1.132275154673008, 51.44713154688047, 75.88397453178179], 'category': 'turn', 'connections': ['sciencecross', 'hill2', 'hill2c'], 'place': 'hill2b'}, {'name': 'hill2', 'point': [-1.131929522486307, 51.44713291208392, 78.73744939672919], 'category': 'turn', 'connections': ['sciencecross', 'hill2b', 'topofhill2', 'Hill 2 Pitch', 'hill2d'], 'place': 'hill2'}, {'name': 'Science (Back)', 'point': [-1.131995976414797, 51.44743110850763, 77.10476477064458], 'category': 'academic', 'connections': ['sciencecross'], 'place': 'Science'}, {'name': 'Science (Front)', 'point': [-1.131649883375699, 51.44776925776888, 76.4069078959644], 'category': 'academic', 'connections': ['sciencestairs', 'scienceroad'], 'place': 'Science'}, {'name': 'sciencecross', 'point': [-1.132088369320483, 51.447335754797, 77.07605401141551], 'category': 'turn', 'connections': ['hill2b', 'hill2', 'Science (Back)'], 'place': 'sciencecross'}, {'name': 'MFL (Back)', 'point': [-1.132575518944713, 51.4472370913063, 73.80740036256361], 'category': 'academic', 'connections': ['hill2c'], 'place': 'MFL'}, {'name': 'hill2c', 'point': [-1.132587960842445, 51.44718079395938, 73.63070580716081], 'category': 'turn', 'connections': ['MFL (Back)', 'hill2b', 'MFL (Front)'], 'place': 'hill2c'}, {'name': 'MFL (Front)', 'point': [-1.132574905182901, 51.44745746882037, 73.86955022142122], 'category': 'academic', 'connections': ['hill2c', 'History'], 'place': 'MFL'}, {'name': 'topofhill2', 'point': [-1.126998493474015, 51.44820971249831, 90.40740205968582], 'category': 'turn', 'connections': ['hill2', 'G House', 'D House', 'hill2split', 'Hill 2 Cricket Nets', 'Hill 2 Pitch', 'hill2d'], 'place': 'topofhill2'}, {'name': 'G House', 'point': [-1.126780981590091, 51.44827559693298, 90.7620411047358], 'category': 'house', 'connections': ['topofhill2', "Faulkner's House", "Faulkner's Dining Hall", 'designturn'], 'place': 'G House'}, {'name': 'D House', 'point': [-1.126526740522462, 51.448040364981, 91.29787341082708], 'category': 'house', 'connections': ['topofhill2'], 'place': 'D House'}, {'name': 'D House (Back)', 'point': [-1.125985456591595, 51.44812595500498, 90.06071313165201], 'category': 'house', 'connections': ['faulknerhallturn', 'Astro Tennis Courts'], 'place': 'D House'}, {'name': "Faulkner's House", 'point': [-1.126967112134958, 51.44859451864669, 90.14773873522418], 'category': 'house', 'connections': ['G House', "Faulkner's Dining Hall", 'hill2split', 'designturn'], 'place': "Faulkner's House"}, {'name': "Faulkner's Dining Hall", 'point': [-1.126370121637711, 51.44884118365758, 90.78814769856696], 'category': 'other', 'connections': ["Faulkner's House", 'G House', 'designturn'], 'place': "Faulkner's Dining Hall"}, {'name': 'H House', 'point': [-1.125824683408079, 51.44890681575254, 90.91351611687318], 'category': 'house', 'connections': ['faulknerhallturn', 'faulknerback', 'astroturn'], 'place': 'H House'}, {'name': 'Astro 1', 'point': [-1.124927476111861, 51.44954463435482, 88.19951058289278], 'category': 'sports', 'connections': ['astroturn', 'Astro 2', 'astrochoice'], 'place': 'Astro 1'}, {'name': 'Astro 1 (Back)', 'point': [-1.125519292474277, 51.4491643253018, 88.91611888874472], 'category': 'sports', 'connections': ['astroturn', 'astrochoice', 'Astro Tennis Courts'], 'place': 'Astro 1'}, {'name': 'Astro 2', 'point': [-1.124359961572599, 51.44975297455213, 87.06979780264757], 'category': 'sports', 'connections': ['Astro 1', 'astrochoice'], 'place': 'Astro 2'}, {'name': 'faulknerhallturn', 'point': [-1.126016093942012, 51.4488072324048, 90.38535784774444], 'category': 'turn', 'connections': ['D House (Back)', 'faulknerback', 'H House', 'astroturn', 'designturn'], 'place': 'faulknerhallturn'}, {'name': 'faulknerback', 'point': [-1.126038727179925, 51.44889886352993, 90.74750374653044], 'category': 'turn', 'connections': ['faulknerhallturn', 'H House'], 'place': 'faulknerback'}, {'name': 'astroturn', 'point': [-1.125905894689968, 51.44900107031733, 90.9135365431716], 'category': 'turn', 'connections': ['faulknerhallturn', 'H House', 'Astro 1 (Back)', 'Astro 1', 'midhill2turn'], 'place': 'astroturn'}, {'name': 'hill2split', 'point': [-1.127796145342701, 51.44836516433054, 89.9685314392099], 'category': 'turn', 'connections': ["Faulkner's House", 'topofhill2', 'I House', 'bryn'], 'place': 'hill2split'}, {'name': 'Bloods (Back)', 'point': [-1.132179022183879, 51.448292485206, 67.20712417275841], 'category': 'academic', 'connections': ['bloodsturn'], 'place': 'Bloods'}, {'name': 'History', 'point': [-1.13241557543038, 51.44770685251119, 73.66791083614382], 'category': 'academic', 'connections': ['MFL (Front)', 'Library'], 'place': 'History'}, {'name': 'Library', 'point': [-1.132083470900404, 51.44807260775699, 72.17404393884931], 'category': 'academic', 'connections': ['History', 'sciencestairs', 'Chapel', 'Stunt Pavilion', 'golfcoursesplit'], 'place': 'Library'}, {'name': 'sciencestairs', 'point': [-1.131894732253822, 51.44817277541026, 71.57634324837763], 'category': 'turn', 'connections': ['Library', 'Science (Front)', 'scienceroad'], 'place': 'sciencestairs'}, {'name': 'scienceroad', 'point': [-1.131554448594252, 51.44843911812137, 70.3823033241979], 'category': 'turn', 'connections': ['sciencestairs', 'Science (Front)', 'crosswaysheadside'], 'place': 'scienceroad'}, {'name': 'Bloods (Front)', 'point': [-1.132091579678023, 51.44895924775361, 64.74607271659], 'category': 'academic', 'connections': ['Big School', 'Grey School (Right)', 'thai1', 'thai2'], 'place': 'Bloods'}, {'name': 'Grey School (Right)', 'point': [-1.132568902076829, 51.44889354559275, 64.2235901358737], 'category': 'academic', 'connections': ['Grey School (Left)', 'Bloods (Front)'], 'place': 'Grey School'}, {'name': 'Grey School (Left)', 'point': [-1.132689993589706, 51.44881145925722, 64.34698319672242], 'category': 'academic', 'connections': ['riversplit', 'Grey School (Right)'], 'place': 'Grey School'}, {'name': 'Maths', 'point': [-1.132367901975156, 51.44944347149149, 60.58203502400358], 'category': 'academic', 'connections': ['thai4', 'thai3'], 'place': 'Maths'}, {'name': 'CCF Office', 'point': [-1.132563042379532, 51.44971632189834, 58.97920548305345], 'category': 'other', 'connections': ['thai3', 'Art'], 'place': 'CCF Office'}, {'name': 'C House', 'point': [-1.131303348677123, 51.4492657462147, 64.28849117481131], 'category': 'house', 'connections': ['thai2', 'crosswayscside'], 'place': 'C House'}, {'name': 'E House', 'point': [-1.129590134240916, 51.44945455629743, 70.1602849086238], 'category': 'house', 'connections': ['ehousesplit', 'road'], 'place': 'E House'}, {'name': 'Greeker', 'point': [-1.130008649265543, 51.45021408260092, 60.04758059587335], 'category': 'other', 'connections': ['backroutesplit', 'greekersplit', 'Music Centre'], 'place': 'Greeker'}, {'name': 'F House', 'point': [-1.130967372627941, 51.4496604793077, 63.74057825193974], 'category': 'house', 'connections': ['Rux', 'backroutesplit', 'fhousesplit'], 'place': 'F House'}, {'name': 'M House', 'point': [-1.128818886089673, 51.44908686373778, 78.97547057153997], 'category': 'house', 'connections': ['mhousesplit'], 'place': 'M House'}, {'name': 'I House', 'point': [-1.12812045489993, 51.44864119845806, 86.68958485636365], 'category': 'house', 'connections': ['hill2split', 'midhill2turn'], 'place': 'I House'}, {'name': 'J House', 'point': [-1.127464747268968, 51.44931292317477, 83.28773534894327], 'category': 'house', 'connections': ['jhousesplit'], 'place': 'J House'}, {'name': 'K House', 'point': [-1.127620478378356, 51.45000801345326, 77.0718795546764], 'category': 'house', 'connections': ['khousesplit2', 'road'], 'place': 'K House'}, {'name': 'A House', 'point': [-1.128717498935091, 51.45042218984492, 67.14090003000645], 'category': 'house', 'connections': ['ahousesplit', 'Clay Tennis Courts'], 'place': 'A House'}, {'name': 'Rux', 'point': [-1.130905088643661, 51.45005599921515, 60.18355838797606], 'category': 'sports', 'connections': ['F House'], 'place': 'Rux'}, {'name': 'Old Sports Hall', 'point': [-1.130188963115554, 51.45081898035296, 59.46085665516124], 'category': 'other', 'connections': ['Old Sports Hall (Back)', 'Sports Centre', 'indoortennissplit'], 'place': 'Old Sports Hall'}, {'name': 'Sports Centre', 'point': [-1.130593557872311, 51.45091155113662, 57.72622303532626], 'category': 'sports', 'connections': ['Old Sports Hall (Back)', 'Old Sports Hall'], 'place': 'Sports Centre'}, {'name': 'Indoor Tennis Courts', 'point': [-1.129163262758425, 51.45124093176051, 61.91278596551523], 'category': 'sports', 'connections': ['indoortennissplit', 'Clay Tennis Courts'], 'place': 'Indoor Tennis Courts'}, {'name': 'Clay Tennis Courts', 'point': [-1.128951689485763, 51.4517737677393, 55.75594305739611], 'category': 'sports', 'connections': ['Indoor Tennis Courts', 'A House'], 'place': 'Clay Tennis Courts'}, {'name': 'Astro Tennis Courts', 'point': [-1.125207473458519, 51.44835812828173, 87.9296170025682], 'category': 'sports', 'connections': ['Astro 1 (Back)', 'D House (Back)'], 'place': 'Astro Tennis Courts'}, {'name': 'Med Centre', 'point': [-1.133302731747089, 51.45065956117039, 54.18159198264868], 'category': 'other', 'connections': ['medcentresplit'], 'place': 'Med Centre'}, {'name': 'Design Centre', 'point': [-1.126034573329942, 51.44866519179493, 90.55683931239935], 'category': 'academic', 'connections': ['designturn'], 'place': 'Design Centre'}, {'name': 'designturn', 'point': [-1.126216238630264, 51.44870457096154, 90.11510060056553], 'category': 'turn', 'connections': ["Faulkner's House", "Faulkner's Dining Hall", 'G House', 'Design Centre', 'faulknerhallturn'], 'place': 'designturn'}, {'name': 'midhill2turn', 'point': [-1.12729897153183, 51.44897505866382, 87.30623586214625], 'category': 'turn', 'connections': ['I House', 'jhousesplit', 'astroturn', 'astrochoice'], 'place': 'midhill2turn'}, {'name': 'jhousesplit', 'point': [-1.127578172565373, 51.44913249103768, 84.03036443636306], 'category': 'turn', 'connections': ['midhill2turn', 'khousesplit', 'J House'], 'place': 'jhousesplit'}, {'name': 'astrochoice', 'point': [-1.125719469502721, 51.44937001789961, 88.6717198964744], 'category': 'turn', 'connections': ['midhill2turn', 'Astro 1 (Back)', 'Astro 1', 'Astro 2'], 'place': 'astrochoice'}, {'name': 'khousesplit', 'point': [-1.127844154697702, 51.44925305615712, 82.2825019933697], 'category': 'turn', 'connections': ['jhousesplit', 'khousesplit2', 'mhousesplit'], 'place': 'khousesplit'}, {'name': 'khousesplit2', 'point': [-1.128192057552897, 51.4498493349185, 74.97514025418081], 'category': 'turn', 'connections': ['K House', 'khousesplit', 'road'], 'place': 'khousesplit2'}, {'name': 'mhousesplit', 'point': [-1.128925622736404, 51.44924817387327, 76.46064066965266], 'category': 'turn', 'connections': ['khousesplit', 'M House', 'topofbryn'], 'place': 'mhousesplit'}, {'name': 'bryn', 'point': [-1.129906114253402, 51.44883750703265, 73.38888131733198], 'category': 'turn', 'connections': ['topofbryn', 'hill2split', 'crosswayshillside'], 'place': 'bryn'}, {'name': 'topofbryn', 'point': [-1.129530207222889, 51.4489912745645, 75.33567512232725], 'category': 'turn', 'connections': ['mhousesplit', 'bryn', 'crosswayshillside'], 'place': 'topofbryn'}, {'name': 'crosswayshillside', 'point': [-1.130600697141567, 51.44917940436362, 66.2724682002498], 'category': 'turn', 'connections': ['bryn', 'topofbryn', 'ehousesplit', 'crosswaysheadside'], 'place': 'crosswayshillside'}, {'name': 'crosswaysheadside', 'point': [-1.130791291594917, 51.44912990814731, 65.90854907414675], 'category': 'turn', 'connections': ['scienceroad', 'crosswayshillside', 'crosswayscside'], 'place': 'crosswaysheadside'}, {'name': 'crosswayscside', 'point': [-1.131043729597428, 51.44908890050042, 65.05105843967266], 'category': 'turn', 'connections': ['C House', 'crosswaysheadside', 'fhousesplit'], 'place': 'crosswayscside'}, {'name': 'ehousesplit', 'point': [-1.129670740707918, 51.44950599994042, 68.29818912886711], 'category': 'turn', 'connections': ['crosswayshillside', 'E House', 'road'], 'place': 'ehousesplit'}, {'name': 'road', 'point': [-1.128913912126522, 51.4498759882382, 69.23541697812509], 'category': 'turn', 'connections': ['ehousesplit', 'E House', 'khousesplit2', 'ahousesplit', 'K House'], 'place': 'road'}, {'name': 'ahousesplit', 'point': [-1.129114727550702, 51.45013013696818, 67.89509441876257], 'category': 'turn', 'connections': ['road', 'A House', 'greekersplit'], 'place': 'ahousesplit'}, {'name': 'greekersplit', 'point': [-1.12938781234435, 51.45044131416995, 64.9966817624387], 'category': 'turn', 'connections': ['ahousesplit', 'Greeker', 'indoortennissplit', 'Music Centre'], 'place': 'greekersplit'}, {'name': 'backroutesplit', 'point': [-1.130239248206185, 51.45012615970089, 60.34649590008048], 'category': 'turn', 'connections': ['F House', 'Greeker', 'Old Sports Hall (Back)'], 'place': 'backroutesplit'}, {'name': 'Old Sports Hall (Back)', 'point': [-1.130543994286296, 51.45076045157112, 58.80450665475731], 'category': 'other', 'connections': ['backroutesplit', 'Sports Centre', 'Old Sports Hall'], 'place': 'Old Sports Hall'}, {'name': 'indoortennissplit', 'point': [-1.129888643951646, 51.45094501008936, 59.19940773402178], 'category': 'turn', 'connections': ['Old Sports Hall', 'greekersplit', 'Indoor Tennis Courts'], 'place': 'indoortennissplit'}, {'name': 'New Ground', 'point': [-1.138725040048091, 51.44980075257063, 53.40295461818711], 'category': 'sports', 'connections': ['medcentresplit', 'Iron Bridge'], 'place': 'New Ground'}, {'name': 'Iron Bridge', 'point': [-1.134689120606963, 51.44874924685295, 56.46289121255426], 'category': 'turn', 'connections': ['New Ground', 'riversplit'], 'place': 'Iron Bridge'}, {'name': 'Max', 'point': [-1.134738704596627, 51.44817248094013, 56.85927834574539], 'category': 'sports', 'connections': ['riversplit'], 'place': 'Max'}, {'name': 'Major', 'point': [-1.133726580123545, 51.44785864033888, 62.15805284533085], 'category': 'sports', 'connections': ['riversplit'], 'place': 'Major'}, {'name': 'Pit', 'point': [-1.135651520624822, 51.44718703397179, 57.09868549086063], 'category': 'sports', 'connections': ['riversplit', 'Rectory 1', 'Rectory 2', 'Rectory 3'], 'place': 'Pit'}, {'name': 'Rectory 1', 'point': [-1.136500146395667, 51.44595733118856, 60.74279900404301], 'category': 'sports', 'connections': ['Pit'], 'place': 'Rectory 1'}, {'name': 'Rectory 2', 'point': [-1.137851165415464, 51.44576593827934, 60.1540135692932], 'category': 'sports', 'connections': ['Pit'], 'place': 'Rectory 2'}, {'name': 'Rectory 3', 'point': [-1.139494718324544, 51.44569159919995, 57.8480108423413], 'category': 'sports', 'connections': ['Pit'], 'place': 'Rectory 3'}, {'name': 'Hill 2 Pitch', 'point': [-1.1283544839111, 51.44756390073426, 90.13591912980066], 'category': 'sports', 'connections': ['hill2', 'topofhill2'], 'place': 'Hill 2 Pitch'}, {'name': 'Hill 2 Cricket Nets', 'point': [-1.127658291844404, 51.44792155738116, 90.22362708758772], 'category': 'sports', 'connections': ['topofhill2'], 'place': 'Hill 2 Cricket Nets'}, {'name': 'Chapel', 'point': [-1.132660657317595, 51.44807703767772, 68.03947478674893], 'category': 'other', 'connections': ['Library', 'Stunt Pavilion', 'bloodsturn', 'golfcoursesplit'], 'place': 'Chapel'}, {'name': 'Stunt Pavilion', 'point': [-1.133496547815693, 51.44697856017626, 68.92302896305075], 'category': 'other', 'connections': ['Chapel', 'Library'], 'place': 'Stunt Pavilion'}, {'name': 'bloodsturn', 'point': [-1.132585165251127, 51.4483104555847, 64.91651721980485], 'category': 'turn', 'connections': ['Chapel', 'Bloods (Back)', 'riversplit'], 'place': 'bloodsturn'}, {'name': 'Big School', 'point': [-1.13260738745973, 51.44873309187895, 65.01789974385078], 'category': 'academic', 'connections': ['riversplit', 'Bloods (Front)'], 'place': 'Big School'}, {'name': 'riversplit', 'point': [-1.132978159076189, 51.44861510928532, 63.06393363143381], 'category': 'turn', 'connections': ['bloodsturn', 'Grey School (Left)', 'Big School', 'Major', 'Max', 'Iron Bridge', 'Pit'], 'place': 'riversplit'}, {'name': 'thai1', 'point': [-1.132222719037624, 51.44903714017389, 63.03097128894647], 'category': 'turn', 'connections': ['Bloods (Front)', 'thai3', 'thai4'], 'place': 'thai1'}, {'name': 'thai2', 'point': [-1.131695088003021, 51.44931691535066, 63.50258672167438], 'category': 'turn', 'connections': ['thai3', 'thai4', 'Bloods (Front)', 'C House'], 'place': 'thai2'}, {'name': 'thai3', 'point': [-1.132097154826186, 51.44956709905227, 60.88717032656253], 'category': 'turn', 'connections': ['thai1', 'Maths', 'thai2', 'CCF Office'], 'place': 'thai3'}, {'name': 'thai4', 'point': [-1.132586919597854, 51.44929463537954, 60.39339498007655], 'category': 'turn', 'connections': ['thai1', 'Maths', 'thai2'], 'place': 'thai4'}, {'name': 'fhousesplit', 'point': [-1.131575763966169, 51.44966600389308, 61.01336016587787], 'category': 'turn', 'connections': ['crosswayscside', 'F House', 'medcentresplit', 'Art'], 'place': 'fhousesplit'}, {'name': 'medcentresplit', 'point': [-1.133429908026307, 51.450614780089, 53.52672035736742], 'category': 'turn', 'connections': ['fhousesplit', 'Med Centre', 'New Ground', 'Art'], 'place': 'medcentresplit'}, {'name': 'Music Centre', 'point': [-1.129696169464518, 51.4504389661521, 63.71543797370213], 'category': 'academic', 'connections': ['Greeker', 'greekersplit'], 'place': 'Music Centre'}, {'name': 'Art', 'point': [-1.133125633708505, 51.449878208176, 54.38808676548164], 'category': 'academic', 'connections': ['CCF Office', 'fhousesplit', 'medcentresplit'], 'place': 'Art'}, {'name': 'Golf Course', 'point': [-1.140104809499684, 51.44484114369703, 61.98108029796266], 'category': 'sports', 'connections': ['hill2d', 'golfcoursesplit'], 'place': 'Golf Course'}, {'name': 'hill2d', 'point': [-1.131303146991894, 51.44711837750884, 85.91438033649254], 'category': 'turn', 'connections': ['Golf Course', 'hill2', 'topofhill2'], 'place': 'hill2d'}, {'name': 'golfcoursesplit', 'point': [-1.133176111872174, 51.44706536552155, 70.03112921694704], 'category': 'turn', 'connections': ['Golf Course', 'Library', 'Chapel'], 'place': 'golfcoursesplit'}]
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
    FilterBloods(document.getElementById(`${selected}`))
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

function FilterBloods(element){
    selected = element.id
    selected = choices[choices.indexOf(selected)+1]
    let classroomSelector = document.getElementById(`classroom${element.id}`)
    console.log(document.getElementById(`classroom${element.id}`))
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
        if (classroomSelector){
            classroomSelector.value = 'None'
            classroomSelector.hidden = true
        }
    }
}

Home()
