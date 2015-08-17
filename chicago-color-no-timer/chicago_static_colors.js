$(function(){

  /* Note: All values are also hard coded in chicago_lounge.css 
  If values are changed in this file they must also be changed in chicago_lounge.css */
  var over90white = '#6666cc',
    over70white = '#7788fe',
    // over60white = '#9999ff',
    over60white = '#cfceff',

    over90black = '#ca2233',
    over70black = '#ee6678',
    over60black = '#fe9999',

    over80latino = '#edee55',
    over60latino = '#efee92',

    over60asian = '#3ab24c',

    noMajority = '#bb44dd';
    chicago1910colors = function(){
      var colors = {},
          key;

      for (key in map.regions) {
        colors[key] = over90white;
      }
      colors[76] = 'gray';
      colors[33] = over60white;
      colors[34] = over60white;
      colors[35] = over60white;
      colors[37] = over60white;

      return colors;
    },


    chicago1920colors = function(){
      var colors = {},
          key;

      for (key in map.regions) {
        colors[key] = over90white;
      }
      colors[76] = 'gray';
      colors[28] = over60white;
      colors[33] = over60white;
      colors[34] = over60white;
      colors[35] = over60black;
      colors[36] = over60white;
      colors[37] = over60white;
      colors[38] = over60black;
      colors[40] = over60black;

      return colors;
    },

    chicago1930colors = function(){
      var colors = {},
          key;

      for (key in map.regions) {
        colors[key] = over90white;
      }
      colors[76] = 'gray';
      colors[28] = over70white;
      colors[33] = over70white;
      colors[34] = over70white;
      colors[35] = over70black;
      colors[36] = over70white;
      colors[37] = over70white;
      colors[38] = over90black;
      colors[40] = over90black;
      colors[42] = over70white;
      colors[75] = over70white;

      return colors;
    },

    chicago1940colors = function(){
      var colors = {},
          key;

      for (key in map.regions) {
        colors[key] = over90white;
      }
      colors[76] = 'gray';
      // colors[28] = over70white;
      colors[33] = over70white;
      colors[34] = over70white;
      colors[35] = over90black;
      colors[36] = over70white;
      // colors[37] = over70white;
      colors[38] = over90black;
      colors[40] = over90black;
      // colors[42] = over70white;
      colors[75] = over60white;

      return colors;
    },

    chicago1950colors = function(){
      var colors = {},
          key;

      for (key in map.regions) {
        colors[key] = over90white;
      }
      colors[76] = 'gray';
      colors[8]  = over70white;
      colors[27] = over70white;
      colors[28] = over60white;
      colors[29] = over70white;
      colors[33] = over60black;
      colors[34] = noMajority;
      colors[35] = over90black;
      colors[36] = over60black;
      colors[37] = over90black;
      colors[38] = over90black;
      colors[39] = over70white;
      colors[40] = over90black;
      colors[42] = over60white;
      colors[49] = over70white;
      colors[54] = over60black;
      colors[68] = over70white;
      colors[75] = over60white;

      return colors;
    },

    chicago1960colors = function(){
      var colors = {},
        key;

      for (key in map.regions) {
        colors[key] = over90white;
      }
      colors[76] = 'gray';
      colors[8]  = over60white;
      colors[26] = over70white;
      colors[27] = over60black;
      colors[28] = noMajority;
      colors[29] = over90black;
      colors[32] = over70white;
      colors[33] = over70black;
      colors[34] = noMajority;
      colors[35] = over90black;
      colors[36] = over90black;
      colors[37] = over90black;
      colors[38] = over90black;
      colors[39] = over70black;
      colors[40] = over90black;
      colors[41] = over70white;
      colors[42] = over70black;
      colors[43] = over70white;
      colors[44] = over60black;
      colors[49] = over70white;
      colors[54] = over90black;
      colors[67] = over70white;
      colors[68] = over60black;
      colors[69] = over70black;
      colors[73] = noMajority;
      colors[75] = over70white;

      return colors;
      },

      chicago1970colors = function(){
        var colors = {},
          key;

        for (key in map.regions) {
          colors[key] = over90white;
        }
        colors[76] = 'gray';
        // colors[8]  = over60white;
        colors[23] = over70white;
        colors[25] = over60white;
        colors[26] = over90black;
        colors[27] = over90black;
        colors[28] = over70black;
        colors[29] = over90black;
        colors[30] = over70white;
        colors[32] = over70white;
        colors[33] = over70black;
        colors[34] = noMajority;
        colors[35] = over70black;
        colors[36] = over90black;
        colors[37] = over90black;
        colors[38] = over90black;
        colors[39] = over70black;
        colors[40] = over90black;
        colors[41] = over60white;
        colors[42] = over90black;
        colors[43] = over60black;
        colors[44] = over90black;
        colors[45] = over70black;
        colors[46] = over70white;
        colors[48] = noMajority;
        colors[49] = noMajority;
        colors[50] = noMajority;
        colors[51] = over70white;
        colors[53] = over70white;
        colors[54] = over90black;
        colors[67] = noMajority;
        colors[68] = over90black;
        colors[69] = over90black;
        colors[71] = over60black;
        colors[73] = over70black;
        colors[75] = noMajority;

        return colors;
      },

      chicago1980colors = function(){
        var colors = {},
            key;

        for (key in map.regions) {
          colors[key] = over90white;
        }

        colors[1]  = over70white;
        colors[2]  = over70white;
        colors[3]  = over60white;
        colors[4]  = over70white;
        colors[5]  = over70white;
        colors[6]  = over70white;
        colors[7]  = over70white;
        colors[8]  = over60white;
        colors[13]  = over70white;
        colors[14]  = over70white;
        colors[20]  = over70white;
        colors[21]  = over70white;
        colors[22]  = over70white;
        colors[23] = noMajority;
        colors[24] = noMajority;
        colors[25] = over70black;
        colors[26] = over90black;
        colors[27] = over90black;
        colors[28] = over70black;
        colors[29] = over90black;
        colors[30] = over80latino;
        colors[31] = over80latino;
        colors[32] = over70white;
        colors[33] = over90black;
        colors[34] = noMajority;
        colors[35] = over70black;
        colors[36] = over90black;
        colors[37] = over90black;
        colors[38] = over90black;
        colors[39] = over70black;
        colors[40] = over90black;
        colors[41] = over60black;
        colors[42] = over90black;
        colors[43] = over90black;
        colors[44] = over90black;
        colors[45] = over90black;
        colors[46] = noMajority;
        colors[47] = over70black;
        colors[48] = over70black;
        colors[49] = over90black;
        colors[50] = over70black;
        colors[51] = over60white;
        colors[53] = over90black;
        colors[54] = over90black;
        colors[56] = over70white;
        colors[66] = over70white;
        colors[61] = over60white;
        colors[67] = over90black;
        colors[68] = over90black;
        colors[69] = over90black;
        colors[71] = over90black;
        colors[72] = over70white;
        colors[73] = over90black;
        colors[75] = over60black;
        colors[77] = over70white;

        return colors;
      },

      chicago1990colors = function(){
        var colors = {},
            key;

        for (key in map.regions) {
          colors[key] = over90white;
        }

        colors[1]  = noMajority;
        colors[2]  = over70white;
        colors[3]  = noMajority;
        colors[4]  = over70white;
        colors[5]  = over70white;
        colors[6]  = over70white;
        colors[7]  = over70white;
        colors[8]  = over70white;
        colors[13]  = over70white;
        colors[14]  = over60white;
        colors[16]  = over70white;
        colors[19]  = over70white;
        colors[20]  = over60latino;
        colors[21]  = over70white;
        colors[22]  = over80latino;
        colors[23] = noMajority;
        colors[24] = over60latino;
        colors[25] = over70black;
        colors[26] = over90black;
        colors[27] = over90black;
        colors[28] = over70black;
        colors[29] = over90black;
        colors[30] = over80latino;
        colors[31] = over80latino;
        colors[32] = over70white;
        colors[33] = over90black;
        colors[34] = over60asian;
        colors[35] = over90black;
        colors[36] = over90black;
        colors[37] = over90black;
        colors[38] = over90black;
        colors[39] = over70black;
        colors[40] = over90black;
        colors[41] = noMajority;
        colors[42] = over90black;
        colors[43] = over90black;
        colors[44] = over90black;
        colors[45] = over90black;
        colors[46] = over60black;
        colors[47] = over90black;
        colors[48] = over90black;
        colors[49] = over90black;
        colors[50] = over70black;
        colors[51] = over60black;
        colors[52] = over70white;
        colors[53] = over90black;
        colors[54] = over90black;
        colors[56] = over70white;
        colors[58] = over70white;
        colors[59] = over70white;
        colors[60] = over60white;
        colors[61] = noMajority;
        colors[63] = over70white;
        colors[66] = noMajority;
        colors[67] = over90black;
        colors[68] = over90black;
        colors[69] = over90black;
        colors[70] = over70white;
        colors[71] = over90black;
        colors[72] = over70white;
        colors[73] = over90black;
        colors[75] = over60black;
        colors[77] = over60white;

        return colors;
      },

      chicago2000colors = function(){
        var colors = {},
            key;

        for (key in map.regions) {
          colors[key] = over90white;
        }

        colors[1]  = noMajority;
        colors[2]  = noMajority;
        colors[3]  = over60white;
        colors[4]  = over60white;
        colors[5]  = over70white;
        colors[6]  = over70white;
        colors[7]  = over70white;
        colors[8]  = over70white;
        colors[11] = over70white;
        colors[12] = over70white;
        colors[13]  = over60white;
        colors[14]  = noMajority;
        colors[15] = over70white;
        colors[16]  = over60white;
        colors[17] = over70white;
        colors[18] = over70white;
        colors[19]  = over60latino;
        colors[20]  = over80latino;
        colors[21]  = over60latino;
        colors[22]  = over60latino;
        colors[23] = noMajority;
        colors[24] = noMajority;
        colors[25] = over90black;
        colors[26] = over90black;
        colors[27] = over90black;
        colors[28] = noMajority;
        colors[29] = over90black;
        colors[30] = over80latino;
        colors[31] = over80latino;
        colors[32] = over60white;
        colors[33] = over70black;
        colors[34] = over60asian;
        colors[35] = over70black;
        colors[36] = over90black;
        colors[37] = over90black;
        colors[38] = over90black;
        colors[39] = over70black;
        colors[40] = over90black;
        colors[41] = noMajority;
        colors[42] = over90black;
        colors[43] = over90black;
        colors[44] = over90black;
        colors[45] = over90black;
        colors[46] = over60black;
        colors[47] = over90black;
        colors[48] = over90black;
        colors[49] = over90black;
        colors[50] = over70black;
        colors[51] = over60black;
        colors[52] = over60latino;
        colors[53] = over90black;
        colors[54] = over90black;
        colors[56] = over70black;
        colors[57] = over70black;
        colors[58] = over80latino;
        colors[59] = over60latino;
        colors[60] = noMajority;
        colors[61] = noMajority;
        colors[62] = over60white;
        colors[63] = over80latino;
        colors[65] = over60white;
        colors[66] = noMajority;
        colors[67] = over90black;
        colors[68] = over90black;
        colors[69] = over90black;
        colors[70] = noMajority;
        colors[71] = over90black;
        colors[72] = over60white;
        colors[73] = over90black;
        colors[75] = over60black;
        colors[76] = over70white;
        colors[77] = noMajority;

        return colors;
      },

      map;

  map = new jvm.WorldMap({
    map: 'us-il-chicago_mill_en',
    container: $('#map'),
    series: {
      regions: [{
        attribute: 'fill'
      }]
    }
  });
  map.series.regions[0].setValues(chicago1910colors());
  $('#chicago-1910-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1910colors());
  });
  $('#chicago-1920-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1920colors());
  });
  $('#chicago-1930-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1930colors());
  });
  $('#chicago-1940-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1940colors());
  });
  $('#chicago-1950-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1950colors());
  });
  $('#chicago-1960-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1960colors());
  });
  $('#chicago-1970-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1970colors());
  });
  $('#chicago-1980-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1980colors());
  });
  $('#chicago-1990-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago1990colors());
  });
  $('#chicago-2000-colors').click(function(e){
    e.preventDefault();
    map.series.regions[0].setValues(chicago2000colors());
  });

  function year1910() {
    document.getElementById("demo").innerHTML = "1910";
  }
  function year1920() {
    document.getElementById("demo").innerHTML = "1920";
  }
  function year1930() {
    document.getElementById("demo").innerHTML = "1930";
  }
  function year1940() {
    document.getElementById("demo").innerHTML = "1940";
  }
  function year1950() {
    document.getElementById("demo").innerHTML = "1950";
  }
  function year1960() {
    document.getElementById("demo").innerHTML = "1960";
  }
  function year1970() {
    document.getElementById("demo").innerHTML = "1970";
  }
  function year1980() {
    document.getElementById("demo").innerHTML = "1980";
  }
  function year1990() {
    document.getElementById("demo").innerHTML = "1990";
  }
  function year2000() {
    document.getElementById("demo").innerHTML = "2000";
  }
  










});