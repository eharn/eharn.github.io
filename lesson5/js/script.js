const menunav = document.querySelector('.menu');
const mainnav = document.querySelector('.navbar')

menunav.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



var d = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
var monthname = ["January","February","March","April","May","June","July","August","September",
"October","November","December"];

var week = weekday[d.getDay()];
var day = d.getDate();
var month = monthname[d.getMonth()];
var year = d.getFullYear();

var date = week + ", " + day + " " + month + " " + year;

document.getElementById("currentdate").textContent = date;

if (5 == d.getDay()) {
    var fri = document.getElementById("fridaybanner");
    fri.style.display = "block";
}
