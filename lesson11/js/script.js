const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

if (document.getElementById("events")) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject["towns"];
      for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" && document.getElementById("preston")) {
          let event = document.createElement("section");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          let p2 = document.createElement("p2");
          let p3 = document.createElement("p3");

          h3.textContent = towns[i].name + " Events: ";
          p.textContent = towns[i].events[0];
          p2.textContent = towns[i].events[1];
          p3.textContent = towns[i].events[2];

          event.appendChild(h3);
          event.appendChild(p);
          event.appendChild(p2);
          event.appendChild(p3);

          document.querySelector("div.events").appendChild(event);
        } else if (
          towns[i].name == "Soda Springs" &&
          document.getElementById("sodasprings")
        ) {
          let event = document.createElement("section");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          let p2 = document.createElement("p2");
          let p3 = document.createElement("p3");

          h3.textContent = towns[i].name + " Events: ";
          p.textContent = towns[i].events[0];
          p2.textContent = towns[i].events[1];
          p3.textContent = towns[i].events[2];

          event.appendChild(h3);
          event.appendChild(p);
          event.appendChild(p2);
          event.appendChild(p3);

          document.querySelector("div.events").appendChild(event);
        } else if (
          towns[i].name == "Fish Haven" &&
          document.getElementById("fishhaven")
        ) {
          let event = document.createElement("section");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          let p2 = document.createElement("p2");
          let p3 = document.createElement("p3");

          h3.textContent = towns[i].name + " Events: ";
          p.textContent = towns[i].events[0];
          p2.textContent = towns[i].events[1];
          p3.textContent = towns[i].events[2];

          event.appendChild(h3);
          event.appendChild(p);
          event.appendChild(p2);
          event.appendChild(p3);

          document.querySelector("div.events").appendChild(event);
        }
        startLazyLoad()
      }
    });
  }



  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject);  // temporary checking for valid response and data parsing
      const towns = jsonObject["towns"];
      for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
          let areas = document.createElement("section");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          let p2 = document.createElement("p2");
          let p3 = document.createElement("p3");
          let p4 = document.createElement("p4");
          let img = document.createElement("img");

          h3.textContent = towns[i].name;
          p.textContent = towns[i].motto;
          p2.textContent = "Year Founded: " + towns[i].yearFounded;
          p3.textContent = "Population: " + towns[i].currentPopulation;
          p4.textContent = "Average Rain Fall: " + towns[i].averageRainfall;

          if (towns[i].name === "Fish Haven") {
            img.setAttribute("src", "images/sunsetL.jpg");
            img.setAttribute("alt", "sunset clouds");
            img.setAttribute("data-src", "images/sunset.jpg");
          }

          if (towns[i].name === "Preston") {
            img.setAttribute("src", "images/twowayroadL.jpg");
            img.setAttribute("alt", "roadway");
            img.setAttribute("data-src", "images/twowayroad.jpg");
          }

          if (towns[i].name === "Soda Springs") {
            img.setAttribute("src", "images/wheatL.jpg");
            img.setAttribute("alt", "wheat field");
            img.setAttribute("data-src", "images/wheat.jpg");
          }

          areas.appendChild(h3);
          areas.appendChild(p);
          areas.appendChild(p2);
          areas.appendChild(p3);
          areas.appendChild(p4);
          areas.appendChild(img);
          areas.appendChild(img);
          areas.appendChild(img);
          document.querySelector("div.areas").appendChild(areas);
        }
        startLazyLoad()
      }
    });



const menunav = document.querySelector(".menu");
const mainnav = document.querySelector(".navbar");

menunav.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

function startLazyLoad() {
  let imagesToLoad = document.querySelectorAll("img[data-src]");
  const loadOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px",
  };

  const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
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
}

function adjustRating(rating) {
  document.getElementById("ratingnumber").innerHTML = rating;
}
