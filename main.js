let index = 0;
let images = [];
let imageLink = [];

images[0] = 'corp.png';
images[1] = 'software.png';
images[2] = 'marvelexample.png';

function changeImage() {
    document.image.src = images[index];

    if (index < images.length - 1) {
        document.image.style = "opacity: 0;"
        index++;
        document.image.style = "animation: fade 5s infinite";
    } else {
        index = 0;
    }

    setTimeout("changeImage()", 5000);
}


window.onload = changeImage;