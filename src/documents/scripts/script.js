var libLoad = function(toget) {
  
  //Add sequential number to ref units and add them to lunr idx
  var bagNtag = function(db) {
    for (i = 0; i < db.length; i++) {
      var ref_unit = db[i];
      ref_unit.id = i;
      idx.add(db[i])
    }
  }

  var deferredArr = $.map(toget, function(el, i) {
    return $.getJSON(el, function(json) {
      db.push.apply(db, json);
    });

  });

  $.when.apply(this, deferredArr).then(function() {
      bagNtag(db);
  });
}



//Live Search
//Reacts to keyup in the input and waits for a certain amount of time before
//calling searc func
var typewatch = function(callback, ms){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    }
}();



var searchRenderer = function(inputfield, resultslist){

  //Get results for query
  //Get array of corresponding documents
  //Render template with document array
  var render = function(results) {
    var results_arr = [];
    i = 0;

    while (i < results.length) {
      var ref = results[i].ref;
      results_arr.push(db[ref])
      i++
    }
    var templ_fn = doT.template(document.getElementById('result_tmpl').text)
    document.getElementById('results-list').innerHTML = templ_fn(results_arr);
  }

  //On keyup in inputfield, call typewatch with callback
  //If the input is too short, kill the results.
  //If it is of a sufficient length, render the list with the lunr results.
  inputfield.on('keyup', function () {
    var that = this;
    typewatch(function(){
      var value = that.value;
      if (value.length > 1) {
        render(idx.search(value))
      } else {
        resultslist.html('');
      }
    }, 200)
  })
}




var idx = lunr(function () {
  this.field('func', { boost: 10 })
})

var db = [];

$(document).ready(function () {
  libLoad(["data/backbone.json", "data/underscore.json"]);
  searchRenderer($('#search'), $('#results-list'));

});


//BACKBONE DOC SCRAPER
// var url = "http://backbonejs.org/";
// var array = []

// $("[id]").each(function() {
//   var obj = {};
//   var id = ($(this).attr("id"));
//   var code = $(this).find("code").text();
//   console.log(id);
//   console.log(code);
//   obj.link = url + "#" + id;
//   obj.language = "js";
//   obj.lib = "backbone";
//   obj.func = code;
//   array.push(obj)
// });

// console.log(JSON.stringify(array));


// UNDERSCORE DOC SCRAPER
// var url = "http://underscorejs.org/";
// var array = []

// $("[id]").each(function() {
//   var obj = {};
//   var id = ($(this).attr("id"));
//   var code = $(this).find("code").text();
//   console.log(id);
//   console.log(code);
//   obj.link = url + "#" + id;
//   obj.language = "js";
//   obj.lib = "underscore";
//   obj.func = code;
//   array.push(obj)
// });

// console.log(JSON.stringify(array));
