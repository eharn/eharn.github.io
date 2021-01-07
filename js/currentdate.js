let daynames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let t = new Date();
let dayName = daynames[t.getDay()];
let monthName = months[t.getMonth()];
let yearly = t.getFullYear();

let fulldate = dayName + ", " + monthName + " " + t.getDate() +", " + yearly;


let d = new Date();

let year = d.getFullYear();


document.getElementById("currentdate").textContent = year;
document.getElementById("lastmodified").textContent = fulldate;