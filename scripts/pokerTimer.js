var countDownDate;
var timerConfig = 1;

function timerStart() {
  countDownDate = new Date().getTime()+(1+(timerConfig*60))*1000;
  document.getElementById("timerStart").innerHTML = "Restart";
  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("pokerTimer").innerHTML = minutes + "m " + seconds + "s ";
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("pokerTimer").innerHTML = "Stopped.";
      }
  }, 1000);
}

function timerStop() {
  document.getElementById("timerStart").innerHTML = "Start";
  document.getElementById("pokerTimer").innerHTML = "Stopped.";
  countDownDate = new Date().getTime();
}

function timerSettings() {
    var timerPrompt = prompt("Please enter number of minutes for the timer", "1");
    if (timerPrompt != null && timerPrompt != "") {
      timerConfig = timerPrompt;
    }
    if (document.getElementById("timerStart").innerHTML == "Restart") {
      alert("Changes will take effect on next timer start / restart.");
    }
}
