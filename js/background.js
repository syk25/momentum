const images = ["image1.png", "image2.png", "image3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

