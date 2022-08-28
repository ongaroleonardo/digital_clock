function showTime(){

    var format = document.getElementById("changerFormat").innerText

    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    if(format == "12h"){
        var session = "AM";
    
        if(h == 0){
            h = 12;
        }
    
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    if(format=="12h")
        var time = h + ":" + m + ":" + s + " " + session;
    else
    var time = h + ":" + m + ":" + s;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

function changeFormat(){
    var format = document.getElementById("changerFormat").innerText
    if(format == "24h"){
        document.getElementById("changerFormat").innerText = "12h";
    }
    else{
        document.getElementById("changerFormat").innerText = "24h";
    }

}
 
showTime();