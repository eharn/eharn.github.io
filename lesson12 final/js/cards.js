const requestURL = "http://127.0.0.1:5500/lesson12%20final/json/directory.html";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const company = jsonObject['directory']; 
    for (let i = 0; i < company.length; i++){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let img = document.createElement('img');
    

    h2.textContent = company[i].name;
    p.textContent = company[i].website;
    p2.textContent = company[i].phone;
    p3.textContent = company[i].address;
    p4.textContent = company[i].city;
    img.setAttribute('src', company[i].logo);
    img.setAttribute('alt', company[i].name + "logo")

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
    }

});


const grid = document.querySelector("#grid");
const cards = document.querySelector(".cards");

grid.addEventListener(
  "click",
  () => {
    cards.classList.toggle("responsive");
  },
  false
);

const list = document.querySelector("#list");

list.addEventListener(
  "click",
  () => {
    cards.classList.toggle("responsive");
  },
  false
);