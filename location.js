
import java.awt ;

var locScript = document.getElementById("Location");

locScript.onclick = function Check() {
  if (navigator.geolocation) {
  var userLoc = navigator.geolocation.getCurrentPosition(Location);
} 
else {
  document.getElementById("Location").innerHTML =
  "Please make sure that geolocation is turned on.";
   var userLoc = navigator.geolocation.watchPosition(Check) ;
} ;
} ;

 start = function Location(position) {
    var Latitude = position.coords.latitude;
    var Longitude = position.coords.longitude;
    if(Latitude != 48.729321 OR Longitude != -122.485973) {
        locScript.innerhtml = "Someone's not at the Fairhaven pond! Please make your way there before you click." ;
        var userLoc = navigator.geolocation.watchPosition(Check) ;
    } 
    else {
        var pondScript = locScript.innerhtml ;
        pondScript = "Time to ponder! When done, please click to continue" ;  
        pondScript.onclick = function water (){
            pondScript = 'Look at the water as you breathe. When calm, please click to continue.' ;
            pondscript.onclick = function quote () {
                "blach blach "
                pondScript.setText(getText()) = function (dialogue) { 
                    section = document.getElementById('toSend') ;
                    section.innerHtml = 'How did it go? As a warning, I will be receiving your response.'
                    textScript = pondScript.createElement('textbox') ;
                    section.innerHtml.append(textScript) ;
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
}
            
            } ;

            } ;
        } ;


        } ;
