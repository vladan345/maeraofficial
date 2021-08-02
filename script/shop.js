const shirts = document.getElementsByClassName("shirts");
const shirtButtons = document.getElementsByClassName("shirt-btn");

const hoodies = document.getElementsByClassName("hoodies");
const hoodiesButtons = document.getElementsByClassName("hoodie-btn");

shirtButtons[0].addEventListener("click", () => {
  for (i = 0; i < shirts.length; i++) {
    shirts[i].src = "img/shop-img/shirt" + (i + 1) + ".png";
  }
});
shirtButtons[1].addEventListener("click", () => {
  for (i = 0; i < shirts.length; i++) {
    shirts[i].src = "img/shop-img/shirt" + (i + 1) + "w.png";
  }
});

hoodiesButtons[0].addEventListener("click", () => {
  for (i = 0; i < hoodies.length; i++) {
    hoodies[i].src = "img/shop-img/hoodie" + (i + 1) + ".png";
  }
});
hoodiesButtons[1].addEventListener("click", () => {
  for (i = 0; i < hoodies.length; i++) {
    hoodies[i].src = "img/shop-img/hoodie" + (i + 1) + "w.png";
  }
});
