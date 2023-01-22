const preview = document.getElementById("preview");
const gridContainer = document.getElementById("grid-container");

function previewImage(event) {
  var preview = document.getElementById("preview");
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function deleteImage(event) {
  var image_x = document.getElementById("preview");
  image_x.parentNode.removeChild(image_x);
}

function test(e){
  e.preventDefault();
  console.log("Testing");
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

function handleClick(e) {
  e.preventDefault(); //to prevent the form from submitting
  if(gridContainer.children.length > 1){
    deleteChild();
}
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = preview.src;

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
        newTile.setAttribute('id', 'tile' + margin.toString());
        newTile.appendChild(img);
        newTile.addEventListener("click", function(){moveTile(i,j)});
        newRow.appendChild(newTile);
        margin++;
      }
      grid.appendChild(newRow);
    }
  };
  deleteImage(e);
}

//let gridItems = document.querySelectorAll(".grid-item");

window.onload = function () {
  const shuffle = document.getElementById("shuffle");
  shuffle.addEventListener("click", handleClick);

};
