const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
]

const randimage = Math.floor(Math.random() * images.length);
const chosenImage = images[randimage];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "img";

document.body.append(bgImage);