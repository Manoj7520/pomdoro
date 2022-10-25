var minutes=prompt("enter minutes:");
 var seconds=prompt("enter seconds:");
 var interval;
function print(){
    var el= document.getElementById("class")
    if(minutes==0 && seconds==0){
        window.clearInterval(interval)
        document.getElementById("audio").play();
        el.innerHTML="00:00";
        window.alert("Time Over!")
    }
    else if(seconds>0){
    seconds--;
   el.innerHTML=minutes+":"+seconds;
    }
    else if(seconds<=0){
        minutes=minutes-1;
        seconds=59;
       el.innerHTML=minutes+":"+seconds;
    }
}
function start(){
   interval= setInterval(print,1000)
}
function stop(){
    window.clearInterval(interval)
}
