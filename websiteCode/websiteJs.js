let currentImage;
let previousImage;
let currentIndex = 0;
let originalIndex = 0;





let index =Math.floor(Math.random() * 3);

var place1 = 'https://lp-cms-production.imgix.net/2021-03/shutterstock_304631102.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1946';
var place2 = 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002532/img/basic/a0002532_main.jpg';
var place3 = "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQWXvWyGh1DR7LREnbg2Q0cn2T_QZ4ae85BFM7HPt59V0sY3PwmKcB5VAY5B77xDMm7";
const places = [];

places.push(place1);
places.push(place2);
places.push(place3);
// select random place and get the image address
function changeImage() {
    
    index = Math.floor(Math.random() * 3);
    document.getElementById("Img1").src = places[index];
}


function changePage() {
    location.href = 'placeDetail.html';
    
}

function goHome() {
    location.href = 'website.html';
}
//const {readFileSync, promises: fsPromises} = require('fs');
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  
    return arr;
}
var places2 = syncReadFile("./textFile.txt");
window.onload = changeImage();
