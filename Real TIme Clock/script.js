const clock =document.querySelector(".clock");
function updateClock()
{
    let date = new Date().toLocaleTimeString();
    clock.innerHTML = date;
}
setInterval(updateClock, 1000);


start = document.getElementById("start");
stop = document.getElementById("stop");
reset = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatchtimer = null;

function updateStopwatchDisplay()
{
    let displaySeconds = seconds<10?"0"+seconds:seconds;
    let displayMinutes = minutes<10?"0"+minutes:minutes;
    let displayHours = hours<10?"0"+hours:hours;
    document.getElementById("stopwatch-display").innerHTML = displayHours+":"+displayMinutes+":"+displaySeconds;
}

start.addEventListener("click",function(){
    if(stopwatchtimer === null)
        return;
    stopwatchtimer = setInterval(function(){
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateStopwatchDisplay();
},1000)
})

stop.addEventListener("click",function(){
    clearInterval(stopwatchtimer);
    stopwatchtimer = null;
})

reset.addEventListener("click",function (){
    clearInterval(stopwatchtimer);
    stopwatchtimer = null;
    seconds = 0;
    minutes =0;
    hours = 0;
    updateStopwatchDisplay();
})

// start.addEventListener("click",function timer(){
//         stopwatchtimer = setInterval(timerr, 1000);
// });
// stop.addEventListener("click",function (){
//         clearInterval(stopwatchtimer);
//         document.getElementById("stopwatch-display").innerHTML=hours+":"+minutes+":"+seconds;
//     });
// reset.addEventListener("click",function(){
//         clearInterval(stopwatchtimer);
//         hours = 0;
//         minutes = 0;
//         seconds = 0;
//         stopwatchtimer = setInterval(timerr, 1000);
//     });