//Get libraries from index (will be text input box)
//Add libraries to idx


$.getJSON("../data/00_INDEX.json", function(json) {
  var expected = json.length;
  console.log(expected);
  for (i = 0; i < expected; i++) {
    var url = "../data/" + json[i] + ".json";
    $.getJSON(url, function(json) {
      db.push.apply(db, json);
      console.log(db);
    });
  }
})

$.when.apply($, db).then(callbizzle, callbizzle)

function callbizzle() {
  console.log(db);
}


var db = []


var idx = lunr(function () {
  this.field('func', { boost: 10 })
})


// var db_length = db.length;
// i = 0;


// while (i < db_length) {
//   var ref_unit = db[i];

//   ref_unit.id = i;

//   i++
// }



//Live Search
//Reacts to keyup in the input and waits for a certain amount of time before
//calling searc func

var typewatch = function(){
		var timer = 0;
		return function(callback, ms){
				clearTimeout (timer);
				timer = setTimeout(callback, ms);
		}
}();

//Get results for query
//Get array of corresponding documents
//Render template with document array

var searchRender = function(results) {
  var results_length = results.length;
  var results_arr = [];
  i = 0;


  while (i < results_length) {
    var rel = results[i].score
    var ref = results[i].ref;
    results_arr.push(db[ref])
    i++
  }

  var result_fn = doT.template(document.getElementById('result_tmpl').text)
  document.getElementById('results-list').innerHTML = result_fn(results_arr);
}

$(document).ready(function () {
  document.getElementById('search').onkeyup = function () {
    typewatch(function(){
      var value = document.getElementById('search').value;
      if (value.length > 1) {
        $('#searchtainer').addClass('dirty');
        searchRender(idx.search(document.getElementById('search').value))
      } else {
        document.getElementById('results-list').innerHTML = '';
      }
    }, 200)
    }
});

$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }

    $( "#search" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
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