var params = new URLSearchParams(location.search)
var choice = params.get('choice')
if (choice == 'suggestion'){
    subject = params.get('subject')
    message = params.get('message')
    email = ''
}
else {
    subject = params.get('question')
    message = ''
    email = params.get('email')
}



// window.location.replace("gabrielsalt.github.io");