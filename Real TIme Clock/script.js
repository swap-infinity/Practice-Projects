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
start.addEventListener("click",function timer(){
    
        let stopwatchtimer = setInterval(function(){
            seconds++;
            if(seconds == 60)
            {
                seconds = 0;
                minutes++;
            }
            if(minutes == 60)
            {
                minutes = 0;
                hours++;
            }
            let displaySeconds = seconds<10?"0"+seconds:seconds;
            let displayMinutes = minutes<10?"0"+minutes:minutes;
            let displayHours = hours<10?"0"+hours:hours;
            document.getElementById("stopwatch-display").innerHTML = displayHours+":"+displayMinutes+":"+displaySeconds;
         },1000);
});
stop.addEventListener("click",function (){
        clearInterval(stopwatchtimer);
        document.getElementById("stopwatch-display").innerHTML=hours+":"+minutes+":"+seconds;
    });
reset.addEventListener("click",function(){
        clearInterval(stopwatchtimer);
        document.getElementById("stopwatch-display").innerHTML = "00:00:00";
    });