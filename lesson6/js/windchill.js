var t = parseFloat(document.getElementById('high').innerHTML);
var s = parseFloat(document.getElementById('speed').innerHTML);
var f;

if (t <= 50 && s > 3){
    f = 35.74 + 0.6215 * t - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
    console.log(f);
    f = Math.round(f);
}
else {
    f = 'N/A'
}

document.getElementById("wind").textContent = f;


