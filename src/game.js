
function setUpgame(number){
  let tiles=storeTiles(number);

}

function shuffleTiles(tiles[],number){
  let arrCol=[];
  let arrRow=[];
  for(let i=0;i<number;i++){
    arr[i] =i;
  }
  arrCol=shuffleArray(arrCol); 
  arrRow=shuffleArray(arrRow);  
  for(let i=0;i<tiles.length;i++){
    tiles[i].currentCoords={} 

  }

}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function storeTiles(numberOfTiles) {
  let tiles = [];

  for (let i = 0; i < numberOfTiles; i++) {
    for (let j = 0; i < numberOfTiles; j++) {
      tiles[i] = {
        correctCoords: { row: i, col: j },
        currentCoords: { row: i, col: j },
        imgSource:
          "https://pyxis.nymag.com/v1/imgs/b43/b2c/4c644da1f8f1d6ecfa62127c29a4622f66-trump-horse.rsquare.w700.jpg",
      };
    }
  }
  localStorage.setItem("tiles", JSON.stringify(tiles)); 
  return tiles
}

function 
function randomizeImageTiles() {}
function swapTile(a) {
  for (
    var j, x, i = a.length;
    i;
    j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
  );
  return a;
}
tiles[number][number]