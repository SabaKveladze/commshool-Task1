function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;

    document.getElementById('hour').style.color = "rgb(" + (255 ) + ", 0, 0)";
    document.getElementById('minute').style.color = "rgb(0, " + (255 ) + ", 0)";
    document.getElementById('second').style.color = "rgb(0, 0, " + (255) + ")";
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  