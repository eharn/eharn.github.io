const menunav = document.querySelector('.menu');
const mainnav = document.querySelector('.navbar')

menunav.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  function adjustRating(rating) {
    document.getElementById("ratingnumber").innerHTML = rating;
  }
  
  const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns']; 
    for (let i = 0; i < towns.length; i++){
    
      if (i == 1 || i == 5 || i == 6){
    let areas = document.createElement('section');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let img = document.createElement('img');
    

    h3.textContent = towns[i].name;
    p.textContent = towns[i].motto;
    p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
    p3.textContent = 'Population: ' + towns[i].currentPopulation;
    p4.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
           
            if(i == 1){
              img.setAttribute('src', 'images/sunset.jpg');
              img.setAttribute('alt', 'sunset clouds');
            }

            if (i == 5) {
              img.setAttribute('src', 'images/twowayroad.jpg');
              img.setAttribute('alt', 'roadway');
            }

            if (i == 6) {
              img.setAttribute('src', "images/wheat.jpg");
              img.setAttribute('alt', 'wheat field');
            }

            
          
          
    
    areas.appendChild(h3);
    areas.appendChild(p);
    areas.appendChild(p2);
    areas.appendChild(p3);
    areas.appendChild(p4);
    areas.appendChild(img);
    areas.appendChild(img);
    areas.appendChild(img);
    document.querySelector('div.areas').appendChild(areas);
    }
  }
});

