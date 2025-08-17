## Counter without setInterval
 let i=0;
function timer(){
    if (i<5){
        console.log(i);
    i++;
    setTimeout(timer,1000);
    }
}
timer();
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)