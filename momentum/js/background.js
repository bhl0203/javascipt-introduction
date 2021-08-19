const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
]


const div = document.getElementById("bgImage");
div.className = "bgImage";

const randimage = Math.floor(Math.random() * images.length);
const chosenImage = images[randimage];


div.style.backgroundImage = `url("img/${chosenImage}")`;

console.dir(div);


/*
bgImage.src = `img/${chosenImage}`;
bgImage.id = "img";
*/
