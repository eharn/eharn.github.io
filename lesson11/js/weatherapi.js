
if (document.getElementById('preston')){
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Preston,5604473&units=imperial&appid=e5da55b917c0943f98ce55dedb68b5e8";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('humidity').textContent = jsObject.main.humidity + '%';
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp) + '°F';
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed) + 'mph';
    const desc = jsObject.weather[0].description; 
    document.getElementById('currently').textContent = desc;

    var t = Math.round(jsObject.main.temp);
    var s = Math.round(jsObject.wind.speed);
    var f;
    
    console.log(t);
    console.log(s);
    
    if ((t <= 50) && (s > 3)){
        f = 35.74 + 0.6215 * t - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
        console.log(f);
        f = Math.round(f);
        document.getElementById("wind").textContent = f + '°F';
    }
    else {
        f = 'N/A';
        document.getElementById("wind").textContent = f;
    
    }




  const forcast = "https://api.openweathermap.org/data/2.5/forecast?q=Preston,5604473&units=imperial&appid=8b6ec3fb6e417dc46bee5c8dcafdab72";
  fetch(forcast)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  
  
  var list = jsObject.list;
  var days = ['mon', 'tue', 'wed', 'thurs', 'fri'];
  var counter = 0;

  var iconday = ['m', 't', 'w', 'th', 'f'];
  var countericon = 0;
  var header = ['day1', 'day2', 'day3', 'day4', 'day5'];
 
       
  for (var i = 0 ; i < list.length; i++){
        if (list[i].dt_txt.includes("18:00:00")) {
            document.getElementById(days[counter]).textContent = Math.round(list[i].main.temp) + ' °F';
            var icon = "http://openweathermap.org/img/wn/" + list[i].weather[0].icon + "@2x.png";
            document.getElementById(iconday[countericon]).setAttribute('src', icon);


            var dt = jsObject.list[i].dt;
  
            function dayHeader(dt){
              let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
              var time = dt * 1000;
              let date = new Date(time);
              return days[date.getDay()];
            }

            document.getElementById(header[counter]).textContent = dayHeader(dt);

            console.log(days[counter]);
            counter++;
            countericon++;
        }
  }

 

});
});

}


if (document.getElementById('fishhaven')){
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0372&lon=111.3960&units=imperial&appid=8b6ec3fb6e417dc46bee5c8dcafdab72";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('humidity').textContent = jsObject.main.humidity + '%';
      document.getElementById('temp').textContent = Math.round(jsObject.main.temp) + '°F';
      document.getElementById('speed').textContent = Math.round(jsObject.wind.speed) + 'mph';
      const desc = jsObject.weather[0].description; 
      document.getElementById('currently').textContent = desc;
  
      var t = Math.round(jsObject.main.temp);
      var s = Math.round(jsObject.wind.speed);
      var f;
      
      console.log(t);
      console.log(s);
      
      if ((t <= 50) && (s > 3)){
          f = 35.74 + 0.6215 * t - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
          console.log(f);
          f = Math.round(f);
          document.getElementById("wind").textContent = f + '°F';
      }
      else {
          f = 'N/A';
          document.getElementById("wind").textContent = f;
      
      }
  
  
  
  
    const forcast = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=111.3960&units=imperial&appid=8b6ec3fb6e417dc46bee5c8dcafdab72";
    fetch(forcast)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    
    
    var list = jsObject.list;
    var days = ['mon', 'tue', 'wed', 'thurs', 'fri'];
    var counter = 0;
  
    var iconday = ['m', 't', 'w', 'th', 'f'];
    var countericon = 0;
    var header = ['day1', 'day2', 'day3', 'day4', 'day5'];
   
         
    for (var i = 0 ; i < list.length; i++){
          if (list[i].dt_txt.includes("18:00:00")) {
              document.getElementById(days[counter]).textContent = Math.round(list[i].main.temp) + ' °F';
              var icon = "http://openweathermap.org/img/wn/" + list[i].weather[0].icon + "@2x.png";
              document.getElementById(iconday[countericon]).setAttribute('src', icon);
  
  
              var dt = jsObject.list[i].dt;
    
              function dayHeader(dt){
                let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
                var time = dt * 1000;
                let date = new Date(time);
                return days[date.getDay()];
              }
  
              document.getElementById(header[counter]).textContent = dayHeader(dt);
  
              console.log(days[counter]);
              counter++;
              countericon++;
          }
    }
  
   
  
  });
  });
  
  }
  


  if (document.getElementById('sodasprings')){
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.6544&lon=111.6047&units=imperial&appid=8b6ec3fb6e417dc46bee5c8dcafdab72";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('humidity').textContent = jsObject.main.humidity + '%';
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp) + '°F';
        document.getElementById('speed').textContent = Math.round(jsObject.wind.speed) + 'mph';
        const desc = jsObject.weather[0].description; 
        document.getElementById('currently').textContent = desc;
    
        var t = Math.round(jsObject.main.temp);
        var s = Math.round(jsObject.wind.speed);
        var f;
        
        console.log(t);
        console.log(s);
        
        if ((t <= 50) && (s > 3)){
            f = 35.74 + 0.6215 * t - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
            console.log(f);
            f = Math.round(f);
            document.getElementById("wind").textContent = f + '°F';
        }
        else {
            f = 'N/A';
            document.getElementById("wind").textContent = f;
        
        }
    
    
    
    
      const forcast = "https://api.openweathermap.org/data/2.5/forecast?lat=42.6544&lon=111.6047&units=imperial&appid=8b6ec3fb6e417dc46bee5c8dcafdab72";
      fetch(forcast)
      .then((response) => response.json())
      .then((jsObject) => {
      console.log(jsObject);
      
      
      var list = jsObject.list;
      var days = ['mon', 'tue', 'wed', 'thurs', 'fri'];
      var counter = 0;
    
      var iconday = ['m', 't', 'w', 'th', 'f'];
      var countericon = 0;
      var header = ['day1', 'day2', 'day3', 'day4', 'day5'];
     
           
      for (var i = 0 ; i < list.length; i++){
            if (list[i].dt_txt.includes("18:00:00")) {
                document.getElementById(days[counter]).textContent = Math.round(list[i].main.temp) + ' °F';
                var icon = "http://openweathermap.org/img/wn/" + list[i].weather[0].icon + "@2x.png";
                document.getElementById(iconday[countericon]).setAttribute('src', icon);
    
    
                var dt = jsObject.list[i].dt;
      
                function dayHeader(dt){
                  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
                  var time = dt * 1000;
                  let date = new Date(time);
                  return days[date.getDay()];
                }
    
                document.getElementById(header[counter]).textContent = dayHeader(dt);
    
                console.log(days[counter]);
                counter++;
                countericon++;
            }
      }
    
     
    
    });
    });
    
    }
    