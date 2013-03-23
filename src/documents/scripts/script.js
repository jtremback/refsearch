
var toget = ["data/backbone.json", "data/underscore.json"];
var db = [];
var deferredArr = $.map(toget, function(el, i) {

	return $.getJSON(el, function(json) {
		db.push.apply(db, json);
	});

});

$.when.apply(this, deferredArr).then(function() {
		console.log("All Done Loading!" + db);
});


//Add sequential number to ref units and add them to lunr idx
var idx = lunr(function () {
	this.field('func', { boost: 10 })
})

function bagNtag(db) {
	for (i = 0; i < db.length; i++) {
		var ref_unit = db[i];
		ref_unit.id = i;
		idx.add(db[i])
	}
	console.log("bagntag: " + db);
}





function callbizzle() {
	console.log("callbizzle: " + db);
}



var idx = lunr(function () {
	this.field('func', { boost: 10 })
})



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
