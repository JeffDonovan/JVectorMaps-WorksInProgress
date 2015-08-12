

// x = 10;

function myFunction() {
  document.getElementById("year").innerHTML = "1910";
}


var nIntervId;
var ano = 1910;
 
function changeColor() {
  nIntervId = setInterval(flashText, 1000);
  
}
 
function flashText() {
//  var oElem = document.getElementById("my_box");
//  oElem.style.color = oElem.style.color == "red" ? "blue" : "red";


  if (ano === 1910) {
    document.getElementById("year").innerHTML = "1910";
    map.series.regions[0].setValues(chicago1910colors());
  }
  if (ano === 1920) {
    document.getElementById("year").innerHTML = "1920";
    map.series.regions[0].setValues(chicago1920colors());
  }
  if (ano === 1930) {
    document.getElementById("year").innerHTML = "1930";
    map.series.regions[0].setValues(chicago1930colors());
  }
  if (ano === 1940) {
    document.getElementById("year").innerHTML = "1940";
    map.series.regions[0].setValues(chicago1940colors());
  }
  if (ano === 1950) {
    document.getElementById("year").innerHTML = "1950";
    map.series.regions[0].setValues(chicago1950colors());
  }
  if (ano === 1960) {
    document.getElementById("year").innerHTML = "1960";
    map.series.regions[0].setValues(chicago1960colors());
  }
  if (ano === 1970) {
    document.getElementById("year").innerHTML = "1970";
    map.series.regions[0].setValues(chicago1970colors());
  }
  if (ano === 1980) {
    document.getElementById("year").innerHTML = "1980";
    map.series.regions[0].setValues(chicago1980colors());
  }
  if (ano === 1990) {
    document.getElementById("year").innerHTML = "1990";
    map.series.regions[0].setValues(chicago1990colors());
  }
  if (ano === 2000) {
    document.getElementById("year").innerHTML = "2000";
    map.series.regions[0].setValues(chicago2000colors());
  }

  ano = ano + 10;
  if (ano === 2010) {
    ano = 1910;
  }






}
 
function stopTextColor() {
  clearInterval(nIntervId);
}


function year1910() {
  document.getElementById("year").innerHTML = "1910";
}
function year1920() {
  document.getElementById("year").innerHTML = "1920";
}
function year1930() {
  document.getElementById("year").innerHTML = "1930";
}
function year1940() {
  document.getElementById("year").innerHTML = "1940";
}
function year1950() {
  document.getElementById("year").innerHTML = "1950";
}
function year1960() {
  document.getElementById("year").innerHTML = "1960";
}
function year1970() {
  document.getElementById("year").innerHTML = "1970";
}
function year1980() {
  document.getElementById("year").innerHTML = "1980";
}
function year1990() {
  document.getElementById("year").innerHTML = "1990";
}
function year2000() {
  document.getElementById("year").innerHTML = "2000";
}

// http://stackoverflow.com/questions/27350267/how-to-autostart-a-javascript-countdown-timer
// window.onload = timedText;
// function timedText() {
//   var txt = document.getElementById('txt'),
//     counter = 15;
//   var timer = setInterval(function () {
//     if(counter === 0) return clearInterval(timer);
//     txt.value = counter + " seconds";
//     counter--;
//   }, 1000);
// }

