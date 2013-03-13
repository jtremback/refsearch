
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



var options = {
		valueNames: [ 'func' ]
};

var hackerList = new List('func-list', options);


// //API NOTATION

// var notation = [

// 	"object.on(event, callback, [context])",

// 	"object.stopListening([other], [event], [callback])",

// 	"Backbone.Model.extend(properties, [classProperties])",

// 	"new Model([attributes], [options])",

// 	"model.get(attribute)",

// 	"model.set(attributes, [options])",

// 	"d model.id",

// 	"model.idAttribute",

// 	"model(lol)"

// ]

// //Takes an array of strings to parse, and an object of environments containing the regexes
// //corresponding to the things that need to be parsed in the environments
// var parsely = function( notation_array, environments ) {

// 	//Detach one string from the array
// 	var string = notation_array.pop();

// 	var parser = function( string, environments, env ) {

// 		//While regexes exist in env, attempt each on string
// 		while (environments[env]) {
// 			attempt = environments.env.pop();
// 		}



// 		parser();


// 	};

// };

// var parser = function( string, environments, env ) {

// 	//While regexes exist in env, attempt each on string
// 	while (environments[env]) {
// 		regex = environments.env.shift();
// 		if (regex.test(string)) {

// 		}
// 	}

// 	parser();

// };

// parser( "object.stopListening([other], [event], [callback])", environments, root );

var environments = {
	root: [
		{ regex: /^\s*([A-Za-z0-9]+)(\..*)$/, type: "object_base", next_env: "root" }, //Object Base
		{ regex: /^\s*([A-Za-z0-9]+)(\(.*)$/, type: "func_call", next_env: "root" }, //Function Call
		{ regex: /^\s*(\.[A-Za-z0-9]+)(\..*)$/, type: "property", next_env: "root"}, //Property
		{ regex: /^\s*(\.[A-Za-z0-9]+\()(.*)$/, type: "method", next_env: "args"}
	],
	args: [
		{ regex: /^\s*(\[[A-Za-z0-9]+\],?)(.*)$/, type: "opt_arg", next_env: "args" }, //Optional Argument
		{ regex: /^\s*([A-Za-z0-9]+,?)(.*)$/, type: "req_arg", next_env: "args" }, //Required Argument
		{ regex: /^(\))(.*)$/, type: "close_paren", next_env: "out" }
	]
};

var regex = /^\s*([A-Za-z0-9]+)(\..*)$/;

var string = "dusty.stoops.object.stopListening([other], [event], [callback])";

var tokens = [];

// if (regex.test(string)) {
// 	var matches = regex.exec(string)
// 	console.log(matches);

// 	var token = matches[1];
// 	var remainder = matches[2];
// 	console.log(token);
// 	console.log(remainder);

// }

//Try first regex in env on string, if it fails, move to the next.
//If it succeeds, and is a token, extract the result into an object alongside its type.
//Add object to results array.
//Run func on remainder, using env var from matching regex.
//If it succeeds, and is a scope, run func on result, using env var.

results_arr = [];

var outside;
var colorize = function( string, env ) {

	//Test the damn thing

	//Get current env into it's own var.
	var env_data = environments[env],

	//Info for the loop
	env_length = env_data.length,
	i = 0;

	while (i < env_length) {

		var test_obj = env_data[i];

		//If the regex even works
		if (test_obj.regex.test(string)) {

			//Get the result
			var result = test_obj.regex.exec(string);

			//Get the next env
			var next_env = test_obj.next_env;

			//Package the result
			results_arr.push({"text": result[1], "type": test_obj.type, "env": test_obj.env });

			//Notice if the env changes
			//If so, save the previous env in var outside
			//If environment changes to out, load the saved env
			//Make outside falsy
			if ( env !== next_env ) {
				if ( next_env !== "out" ) {
					outside = next_env;
				}

				if ( next_env === "out" )	{
					next_env = outside;
				}
			}

			//Inception!
			colorize( result[2], next_env );

			//Job is done.
			break;
		}

		//If not, try the next
		i++

	}

}


colorize( string, "root" );

console.log(results_arr)