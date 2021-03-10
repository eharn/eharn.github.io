const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Preston,5604473&units=imperial&appid=e5da55b917c0943f98ce55dedb68b5e8";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('temp_max').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed);
    const desc = jsObject.weather[0].description; 
    document.getElementById('currently').textContent = desc;
  });

  const forcast = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,5604473&units=imperial&appid=8b6ec3fb6e417dc46bee5c8dcafdab72";
  fetch(forcast)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  var list = jsObject.list;
  var days = ['mon', 'tue', 'wed', 'thurs', 'fri'];
  var counter = 0;
       
  for (var i = 0 ; i < list.length; i++){
        if (list[i].dt_txt.includes("18:00:00")) {
            document.getElementById(days[counter]).textContent = Math.round(list[i].main.temp) + ' °F';
            console.log(days[counter]);
            counter++;
        }
  }
});