var i=1;
var s=0;
var time = setTimeout("showImg()", 2000);
function showImg() {
    i=i+1;
    s=s+1;
    if(i == 6) {
        i = 1;
    }
    if(s==6){
        s=1;
    }
    let a='a'+i;
    let b='a'+s;
    document.getElementById("lb").src = "images/lb" + i + ".png";
    document.getElementById(b).style.backgroundColor="hsl(200, 55%, 50%)";
    document.getElementById(a).style.backgroundColor="hsl(150,40%,30%)";
    time = setTimeout("showImg()", 2000);
}