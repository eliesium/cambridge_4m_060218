var countDownDate;

function timerStart(min, sec) {
  countDownDate = new Date().getTime() + (1 + (min * 60)+sec) * 1000;
  document.getElementById("timerStart").innerHTML = "Restart";
  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("pokerTimer").innerHTML = minutes + "m " + seconds + "s ";

      if (distance < 0) {
          clearInterval(x);
          document.getElementById("pokerTimer").innerHTML = "Timer stopped.";
      }
  }, 1000);
}

function timerStop() {
  countDownDate = new Date().getTime();
  document.getElementById("timerStart").innerHTML = "Start";
  document.getElementById("pokerTimer").innerHTML = "Timer stopped.";
}
