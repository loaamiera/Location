

var locScript = document.getElementById("Location");
locScript.onclick = function Check() {
  if (navigator.geolocation) {
  var userLoc = navigator.geolocation.getCurrentPosition(Location);
} 
else {
  locScript.innerhtml =
  "Please make sure that your location services are turned on.";
   var userLoc = navigator.geolocation.watchPosition(Check) ;
} 
} ;
 start = function Location(position) {
    var Latitude = position.coords.latitude;
    var Longitude = position.coords.longitude;
    if(Latitude != 48.729321) {
        locScript.innerhtml = "Someone's not at the Fairhaven pond! Please make you're already there before you click to continue." ;
        var userLoc = navigator.geolocation.watchPosition(Check) ;
    } 
   else{
     if (Longitude != -122.485973) {
        locScript.innerhtml = "Someone's not at the Fairhaven pond! Please make you're already there before you click to continue." ;
        var userLoc = navigator.geolocation.watchPosition(Check) ; }
      else {
        locScript.innerhtml = "Time to ponder! When done, please click to continue" ;  
        locScript.onclick = function water (){
          timeElapsed = performance.now() ;
            locScript.innerhtml = 'Look at the water as you breathe. When calm, please click to continue.' ;
            locScript.onclick = function pondTime() {
              if (timeElapsed < 120000 ) {
              locScript.innerhtml = '' ;
              locScript.innerhtml = 'Someones in a hurry. Take a few minutes to think!' ;
            }
           else { nextPart = function (dialogue) { 
                    section = document.getElementById('toSend') ;
                    section.createElement('input') ;
                    section.createElement('label') ;
                    section.label.textContent = 'How did it go? As a warning, I will be receiving your response.' ;
                       }.then((response) => { return response.json() ; } )
                         .then ((data) => {
                      function sendEmail() {
                          const emailData = {
                                to: 'amierasdocs@gmail.com',
                                subject: 'Pondering Response!',
                                text: data ;}
                          };)
                      fetch('/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(emailData)
                        }).then(response => response.json())
                        .then(data => console.log(data));
                                                          } ;
            

            } ;
        } ;


} } ; 
