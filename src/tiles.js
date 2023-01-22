const preview = document.getElementById("preview");
const gridContainer = document.getElementById("grid-container");

function previewImage(event) {
    var preview = document.getElementById("preview");
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
    preview.src = reader.result;
    }

    if (file) {
    reader.readAsDataURL(file);
    } else {
    preview.src = "";
    }
}

function deleteImage(event) {
    var image_x = document.getElementById('preview');
    image_x.parentNode.removeChild(image_x);
}
function handleClick(e) {
    e.preventDefault(); //to prevent the form from submitting
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src =  preview.src;

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const tileWidth = img.width / 3;
        const tileHeight = img.height / 3;
    }
}

function handleClick(e) {
    e.preventDefault(); //to prevent the form from submitting
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src =  preview.src;

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const tileWidth = img.width / 3;
        const tileHeight = img.height / 3;
        const tiles = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const tileCanvas = document.createElement('canvas');
                tileCanvas.width = tileWidth;
                tileCanvas.height = tileHeight;
                const tileCtx = tileCanvas.getContext('2d');
                tileCtx.drawImage(canvas, j * tileWidth, i * tileHeight, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
                const tileImg = new Image();
                tileImg.src = tileCanvas.toDataURL();
                tiles.push(tileImg);
                console.log(tileImg);
            }
        }
        console.log(tiles);
        const grid = document.getElementById('grid-container');
        let margin = 0;
        const br = document.createElement('br');
        for(let i = 0; i < 3; i++)
        {
            const newRow = document.createElement("div");
            newRow.classList.add("grid-row");
            for(let j = 0; j< 3; j++){
                let img = document.createElement("img");
                img.src = tiles[margin].src;
                console.log(margin)
                const newTile = document.createElement("span");
                newTile.classList.add("tileImage");
                newTile.appendChild(img);
                newRow.appendChild(newTile);
                margin++;
            }
            grid.appendChild(newRow);
        }
    };
    deleteImage(e);
};

//let gridItems = document.querySelectorAll(".grid-item");

function shuffleArray(array) {
    // Code to shuffle the array of image pieces
    // ...
}

window.onload = function(){
    const sub = document.getElementById("sub");
    sub.addEventListener("click", handleClick);
}

