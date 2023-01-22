const EMPTY_TILE_ID = 100000;
function fisherYatesInner(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function fisherYatesOuter(arrays) {
  for (let i = arrays.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrays[i], arrays[j]] = [arrays[j], arrays[i]];
    fisherYatesInner(arrays[i]);
  }
}

function generateArray(number, arrayPNGS) {
  let originalArray = [];
  let margin = 0;
  for (let i = 0; i < number; i++) {
    originalArray[i] = [];
    for (let j = 0; j < number; j++) {
      let temp = 3 * i + 11 * j;
      originalArray[i][j] = { id: temp, src: arrayPNGS[margin].src };
      // ,imgSRC:"https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg?fit=fill&w=480&h=270"
      margin++;
    }
  }
  //console.log(originalArray)
  originalArray[0][0].id = EMPTY_TILE_ID;
  originalArray[0][0].src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcthNOUKYy-64Ks-gDlFdcVksSPg--MijApkBdeU&s";

  return originalArray;
}
function shuffleArray(number, arrayPNGS) {
  //console.log("shuffle array");
  let originalArray = generateArray(number, arrayPNGS);
  let newArray = []; //=originalArray
  for (let i = 0; i < number; i++) {
    newArray[i] = [];
    for (let j = 0; j < number; j++) {
      newArray[i][j] = originalArray[i][j];
    }
  }
  let flatArr = newArray.flat();
  // shuffle elements of 1D array
  for (let i = flatArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [flatArr[i], flatArr[j]] = [flatArr[j], flatArr[i]];
  }
  // map 1D array back to 2D array
  let shuffledArr = [];
  for (let i = 0; i < flatArr.length; i += 3) {
    shuffledArr.push(flatArr.slice(i, i + 3));
  }
  localStorage.setItem("new array", JSON.stringify(shuffledArr));
  localStorage.setItem("original array", JSON.stringify(originalArray));
  let item = localStorage.getItem("original array");
  item = JSON.parse(item);
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

function display() {
  let newArray = localStorage.getItem("new array");
  JSON.parse(newArray);
  deleteChild();
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
}

function swapTile(first, second, array) {
  console.log("swap");
  const temp = array[first.row][first.col].id;

  array[first.row][first.col].id = array[second.row][second.col].id;
  array[second.row][second.col].id = temp;
  display(array);
}

function moveTile(row, col) {
  console.log(row + " " + col + " ");
  let newArray = localStorage.getItem("new array");
  newArray = JSON.parse(newArray);
  console.log(newArray);

  let WhiteSpaceRow;
  let WhiteSpaceCol;
  //console.log("tile "+row,col)
  if (row < newArray.length - 1 && isWhiteSpace(row + 1, col, newArray)) {
    WhiteSpaceRow = row + 1;
    swapTile({ row, col }, { WhiteSpaceRow, col }, newArray);
  } else if (row > 0 && isWhiteSpace(row - 1, col, newArray)) {
    WhiteSpaceRow = row - 1;
    swapTile({ row, col }, { WhiteSpaceRow, col }, newArray);
  } else if (
    isWhiteSpace(row, col + 1, newArray) &&
    col < newArray.length - 1
  ) {
    WhiteSpaceCol = col + 1;
    swapTile({ row, col }, { row, WhiteSpaceCol }, newArray);
  } else if (col > 0 && isWhiteSpace(row, col - 1, newArray)) {
    WhiteSpaceCol = col - 1;
    swapTile({ row, col }, { row, WhiteSpaceCol }, newArray);
  } else {
    console.log("no");
  }
  localStorage.setItem("new array", JSON.stringify(newArray));
}

function isWhiteSpace(row, col, array) {
   console.log("verification "+ row,col)
  return array[row][col].id === EMPTY_TILE_ID;
}

function checkWin() {
  let newArray = localStorage.getItem("new array");
  let oldArray = localStorage.getItem("original array");
  if (newArray == oldArray) {
    alert("you won, thanks for playing");
  }
}
