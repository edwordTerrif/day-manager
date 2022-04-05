const body = document.querySelector("body");
const source = document.querySelector(".js-source");

const IMG_NUMBER = 19;

function printImg(imgNumber) {
  const img = new Image();
  img.src = `./backgraund/${imgNumber + 1}.jpg`;
  img.classList.add("bg-size");
  img.addEventListener("load", function (event) {
    body.appendChild(img);
  });
}

function getNumber() {
  const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  return randomNumber;
}

function returnEarly() {
  const number = getNumber();
  printImg(number);
}
returnEarly();
