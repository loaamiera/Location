const locScript = document.getElementById("Location");

locScript.onclick = function checkLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleLocation);
  } 
  else {
    locScript.innerHTML = "Please make sure that your location services are on to use this website.";
  }
};

function checkLocation(position) {
  var { latitude, longitude } = position.coords;
  var idealLatitude = 48.729321;
  var idealLongitude = -122.485973;

  if (latitude != targetLat || longitude != idealLong) {
    locScript.innerHTML = "Looks like someones not at the Fairhaven dorm pond!";
    navigator.geolocation.watchPosition(checkLocation);
    return;
  }

  else {
    var startTime = Date.now();
    locScript.innerHTML = "Time to ponder! When done, click to continue.";
    locScript.onclick = function water() {
    var timeElapsed = Date.now() - startTime;
    if (timeElapsed < 120000) {
       locScript.innerHTML = "Someone's in a hurry! Look at the water as you breathe. When fully calm, click to continue "; }
    else {
      var section = document.getElementById("toSend");
      locScript.innerHTML = 

        var entryLabel = document.createElement("label");
        entryLabel.textContent = "So, how was it? Just to warn you I will be receiving your response.";
        section.appendChild(entryLabel);
        var input = document.createElement("input");
        input.type = "text";
        section.appendChild(input);
        var.onSubmit  () => {
          const emailData = {
            to: "amierasdocs@gmail.com",
            subject: "Pondering Response!",
            text: input.value
          };

          fetch("/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailData)
          })
          .then(response => response.json())
          .then(data => {
            locScript.innerHTML = "I hope this helped! That's all the java that I've written for this.";
          });
        };
      }
    };
  };
}
