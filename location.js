
document.addEventListener('DOMContentLoaded', () => {
var locScript = document.getElementById("Location");
locScript.onclick = function Check() {
  if (navigator.geolocation) {
  var userLoc = navigator.geolocation.getCurrentPosition(Location);
} 
else {
  locScript.textContent = ''
  locScript.textContent =
  "Please make sure that your location services are turned on.";
   var userLoc = navigator.geolocation.watchPosition(Check) ;
} ;
} ;

 start = function Location(position) {
    var Latitude = position.coords.latitude;
    var Longitude = position.coords.longitude;
   locScript.textContent = ''
    if(Latitude != 48.729321 OR Longitude != -122.485973) {
        locScript.innerhtml = "Someone's not at the Fairhaven pond! Please make you're already there before you click to continue." ;
        var userLoc = navigator.geolocation.watchPosition(Check) ;
    } 
    else {
        var pondScript = ' '
        var locScript = ' '
        pondScript.createElement('p') ;
        pondScript.p.innerhtml = "Time to ponder! When done, please click to continue" ;  
        pondScript.onclick = function water (){
          timeElapsed = performance.now() ;
            pondScript.p.innerhtml = 'Look at the water as you breathe. When calm, please click to continue.' ;
            pondscript.onclick = if (timeElapsed < 120000 ) {
            pondScript.p.innerhtml = '' ;
            pondScript.p.innerhtml = 'Someones in a hurry. Take a few minutes to think!' ;
            }
           else { nextPart = unction (dialogue) { 
                    section = document.getElementById('toSend') ;
                    section.createElement('input') ;
                    section.input.innerHtml = 'How did it go? As a warning, I will be receiving your response.'
                    .then(response => sendEmail()) ;
                      function sendEmail() {
                          const emailData = {
                                to: 'amierasdocs@gmail.com',
                                subject: 'Pondering Response!',
                                text: response.json ;
                          };
                      fetch('/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(emailData)
                        }).then(response => response.json())
                        .then(data => console.log(data));
                                                          } ;
            
            } ;

            } ;
        } ;
 } ;


} 
