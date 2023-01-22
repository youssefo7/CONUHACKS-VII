//const { gracefulify } = require("graceful-fs");

const preview = document.getElementById("preview");
const gridContainer = document.getElementById("grid-container");

function previewImage(event) {
  var image_x = document.getElementById("repreview");
  image_x.hidden = true;
  var preview = document.getElementById("preview");
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
    const shuffle = document.getElementById("shuffle");
    shuffle.removeEventListener("click", generatePicture)
    shuffle.addEventListener("click", handleClick);
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function deleteImage() {
  var image_x = document.getElementById("preview");
  image_x.remove()
  var image_y = document.getElementById("repreview");
  image_y.remove()
}

function deleteChild() {
  var e = document.getElementById("grid-container");
  //e.firstElementChild can be used.
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
function generatePicture(e) {
  e.preventDefault(); //to prevent the form from submitting
  const pictures = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png","10.png", "11.png", "12.png"];
  min = Math.ceil(0);
    max = Math.floor(pictures.length );
    const index=Math.floor(Math.random() * (pictures.length+1)) + min
  afficherJeux(pictures[index]);
}

function handleClick(e) {
  e.preventDefault(); //to prevent the form from submitting
  afficherJeux(preview.src);
}

function afficherJeux(src) {
  if (gridContainer.children.length > 1) {
    deleteChild();
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = src;

  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const tileWidth = img.width / 3;
    const tileHeight = img.height / 3;
    const tiles = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tileCanvas = document.createElement("canvas");
        tileCanvas.width = tileWidth;
        tileCanvas.height = tileHeight;
        const tileCtx = tileCanvas.getContext("2d");
        tileCtx.drawImage(
          canvas,
          j * tileWidth,
          i * tileHeight,
          tileWidth,
          tileHeight,
          0,
          0,
          tileWidth,
          tileHeight
        );
        const tileImg = new Image();
        tileImg.src = tileCanvas.toDataURL();
        tiles.push(tileImg);
      }
    }
    const referenceImage = document.createElement("img");
    referenceImage.id = "referenceImage";
    referenceImage.src = src;
    const parent = document.getElementById("parent");
    parent.appendChild(referenceImage);
    shuffleArray(3, tiles);
    let tileArray = localStorage.getItem("new array");
    tileArray = JSON.parse(tileArray);
    const grid = document.getElementById("grid-container");
    let margin = 0;
    const br = document.createElement("br");
    for (let i = 0; i < 3; i++) {
      const newRow = document.createElement("div");
      newRow.classList.add("grid-row");
      for (let j = 0; j < 3; j++) {
        let img = document.createElement("img");
        img.src = tileArray[i][j].src; //tiles[margin].src;
        const newTile = document.createElement("span");
        newTile.classList.add("tileImage");
        newTile.setAttribute("id", "tile" + margin.toString());
        newTile.appendChild(img);
        newTile.addEventListener("click", function () {
          moveTile(i, j);
        });
        newRow.appendChild(newTile);
        margin++;
      }
      grid.appendChild(newRow);
    }
   
  
    var rules = document.getElementById("rules");
    rules.hidden = !rules.hidden;

    var rulyes = document.getElementById("rulyes");
    rulyes.hidden = !rules.hidden;
    var shuffles = document.getElementById("buttons");
    shuffles.hidden = !shuffles.hidden;
    shuffles.remove();
    var form = document.getElementById("form");
    form.hidden = !form.hidden;
  };
  deleteImage();
}

//let gridItems = document.querySelectorAll(".grid-item");

window.onload = function () {
  const shuffle = document.getElementById("shuffle");  
  shuffle.addEventListener("click", generatePicture);
};
