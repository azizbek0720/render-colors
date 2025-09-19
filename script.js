"use strict";

const cards = document.querySelector(".cards");
const cardsCounter = document.querySelector(".count span");
const clickedIdx = document.querySelector(".clicked-idx span");
const moreBtn = document.querySelector(".more");
const reloadBtn = document.querySelector(".reload");

function getColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

let color = [];
function createCard() {
  for (let i = 0; i < 8; i++) {
    color.push(getColor());
    const card = document.createElement("div");
    for (let i = 0; i < color.length; i++) {
      card.style.backgroundColor = color[i];
    }
    card.setAttribute("class", "card");
    cards.appendChild(card);
  }

  [...cards.children].forEach((card, idx) => {
    card.textContent = idx + 1;
    card.addEventListener("click", function () {
      for (let i = 0; i < color.length; i++) {
        document.body.style.backgroundColor = color[idx];
      }
      clickedIdx.textContent = idx + 1;
    });
  });
}

createCard();

moreBtn.addEventListener("click", function () {
  createCard();
  cardsCounter.textContent = +cardsCounter.textContent + 8;
});

reloadBtn.addEventListener("click", function () {
  [...cards.children].forEach((card) => card.remove());

  setTimeout(() => {
    createCard();
  }, 100);

  cardsCounter.textContent = 8;
  clickedIdx.textContent = "";
  document.body.style.backgroundColor = "#fff";
  color = [];
});
