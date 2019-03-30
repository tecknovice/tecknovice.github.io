let time = new Date();
let utcHour = time.getUTCHours();
let utcMin = time.getUTCMinutes();
let utcSecond = time.getUTCSeconds();

function Clock(hour, min, second, hourHand, minHand, sencondHand){
    this.hour = hour;
    this.min = min;
    this.second = second;
    this.hourHand = hourHand;
    this.minHand = minHand;
    this.sencondHand = sencondHand;
};
Clock.prototype.run = function(){
    let clock = this;
    setInterval(update,1000,clock);
};
function update(clock){
    clock.second +=1;
    if(clock.second==60){
        clock.second=0;
        clock.min +=1;
        if(clock.min==60){
            min=0;
            clock.hour+=1;
            if(clock.hour==24){
                clock.hour=0;
            }
        }
    }
    let hour12 = clock.hour%12;
    let secondPer =clock.second/60;
    let minPer = (clock.min+secondPer)/60;
    let hourPer = ((hour12+minPer)/12);
    clock.sencondHand.style.transform = "rotate("+secondPer*360+"deg)";
    clock.minHand.style.transform = "rotate("+minPer*360+"deg)";
    clock.hourHand.style.transform = "rotate("+hourPer*360+"deg)";
};

let localClock = new Clock(time.getHours(),time.getMinutes(),time.getSeconds(), current_hour,current_min,current_second);
let newyorkClock = new Clock(utcHour-5,utcMin,utcSecond, newyork_hour,newyork_min,newyork_second);
let londonClock = new Clock(utcHour,utcMin,utcSecond,london_hour,london_min,london_second);
let tokyoClock = new Clock(utcHour+9,utcMin,utcSecond,tokyo_hour,tokyo_min,tokyo_second);

window.onload = function(){
    localClock.run();
    newyorkClock.run();
    londonClock.run();
    tokyoClock.run();
};