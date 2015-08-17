// $(function(){
//   $('#map').vectorMap({map: 'us-il-chicago_mill_en'});
// });

// $(function(){
//   $('#rightMap').vectorMap({map: 'us-il-chicago_mill_en'});
// });

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

  leftMap;

  var leftMap = new jvm.WorldMap({
    map: 'us-il-chicago_mill_en',
    container: $('#leftMap'),
    series: {
      regions: [{
        attribute: 'fill'
      }]
    }
  });

  var rightMap = new jvm.WorldMap({
    map: 'us-il-chicago_mill_en',
    container: $('#rightMap'),
    series: {
      regions: [{
        attribute: 'fill'
      }]
    }
  });



  leftMap.series.regions[0].setValues(chicago1910colors());



});

