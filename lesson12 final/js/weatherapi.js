const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=41.1400&lon=-104.8202&units=imperial&appid=e5da55b917c0943f98ce55dedb68b5e8";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("currently").textContent =
      jsObject.current.weather[0].description;
    document.getElementById("temp").textContent =
      Math.round(jsObject.current.temp) + "°F";
    document.getElementById("humidity").textContent =
      jsObject.current.humidity + " %";

    var d = new Date();
    var d = d.getDay();

    var day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    for (var i = 0; i < 10; i++) {
        if (i == 7) { day[i] = day[0];}
        if (i == 8) { day[i] = day[1];}
        if (i == 9) { day[i] = day[2];}
        if (i == d + 1) {
          document.getElementById("day1").textContent = day[i];
          document.getElementById("forecast").textContent =
            Math.round(jsObject.daily[i].temp.day) + "°F";
          document.getElementById("description1").textContent =
            jsObject.daily[i].weather[0].description;
        } 
        else if (i == d + 2) {
          document.getElementById("day2").textContent = day[i];
          document.getElementById("forecast2").textContent =
            Math.round(jsObject.daily[i].temp.day) + "°F";
          document.getElementById("description2").textContent =
            jsObject.daily[i].weather[0].description;
        } 
        else if (i == d + 3) {
          document.getElementById("day3").textContent = day[i];
          document.getElementById("forecast3").textContent =
            Math.round(jsObject.daily[i].temp.day) + "°F";
          document.getElementById("description3").textContent =
            jsObject.daily[i].weather[0].description;
        }
    }
  });
