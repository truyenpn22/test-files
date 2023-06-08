// Counter up

const counterElement = document.getElementById("counter");
const counter2Element = document.getElementById("counter-2");

let count = 0;
let counterInterval;

function updateCounter() {
  if (count > 999) {
    clearInterval(counterInterval);
    return;
  }

  count++;
  counterElement.textContent = count.toString();
  counter2Element.textContent = `${count.toString()}m²`;
}

counterInterval = setInterval(updateCounter, 1);



// Light/Dark Theme

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");


toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
