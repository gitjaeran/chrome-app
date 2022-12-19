const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

//html에 img create
const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
