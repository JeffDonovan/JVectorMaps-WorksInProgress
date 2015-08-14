window.onload = init;

var selectedTile;

var previousYear = 1910;
var year = 1920;
var oElem;

var stopChangeBool = false;


function init() {

  // tiles is an array containing references to all the tiles
  var tiles = document.getElementsByTagName('td');

  // The for loop makes each tile clickable and assigns the class 'unclicked'
  for (var i = 0; i < tiles.length; i++) {

    tiles[i].onclick = showAnswer;
    console.log(i + " was made clickable");

    tiles[i].className = "unclicked";
    console.log(i + " was assigned the 'unclicked' class");

    selectedTile = document.getElementById('1910');
    selectedTile.className = "blue-background";
  }

  // Cycle through each
  changeColor();


}

// The previous for loop causes this function to execute whenever a tile is clicked
function showAnswer (e) {

  stopChangeBool = true;
  oElem.className = "";
  oElem.className = "unclicked";

  var tile = e.target;
  
  // Tile stays blue if it's already blue
  if (tile.className === "blue-background") {
    tile.className = "blue-background";
  } else {
    selectedTile.className = ""; // deletes all classes
    selectedTile.className = "unclicked";
    selectedTile = tile;
    selectedTile.className = "blue-background";
  }
}

// Made with help from:
// http://stackoverflow.com/questions/2155737/remove-css-class-from-element-with-javascript-no-jquery


function changeColor() {
  nIntervId = setInterval(flashText, 100);
}
 
function flashText() {
  if (stopChangeBool === false) {
    if (year > 2010) {
      year = 1910;
    }
    oElem = document.getElementById(previousYear);
    oElem.className = "";
    oElem.className = "unclicked";

    oElem = document.getElementById(year);
    oElem.className = "blue-background";

    if (year === 1910) {
      map.series.regions[0].setValues(chicago1910colors());
    }
    if (year === 1920) {
      map.series.regions[0].setValues(chicago1920colors());
    }
    if (year === 1930) {
      map.series.regions[0].setValues(chicago1930colors());
    }
    if (year === 1940) {
      map.series.regions[0].setValues(chicago1940colors());
    }
    if (year === 1950) {
      map.series.regions[0].setValues(chicago1950colors());
    }
    if (year === 1960) {
      map.series.regions[0].setValues(chicago1960colors());
    }
    if (year === 1970) {
      map.series.regions[0].setValues(chicago1970colors());
    }
    if (year === 1980) {
      map.series.regions[0].setValues(chicago1980colors());
    }
    if (year === 1990) {
      map.series.regions[0].setValues(chicago1990colors());
    }
    if (year === 2000) {
      map.series.regions[0].setValues(chicago2000colors());
    }


    previousYear = year;

    year = year + 10;
  }

}











