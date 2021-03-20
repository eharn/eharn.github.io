
const menunav = document.querySelector(".menu");
const mainnav = document.querySelector(".navbar");

menunav.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);