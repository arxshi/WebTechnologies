var clock = document.getElementById('clock');

function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    clock.innerHTML = 
        hours + ":" +
         minutes + ":" + 
          seconds + " " + `<span class="highlighted-text h1"> ${amPm} </span>`;
    var t = setTimeout(realtimeClock, 500);
}