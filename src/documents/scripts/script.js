
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


//UNDERSCORE DOC SCRAPER
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

var people = [{person: { id: 1, name: 'Jiren', age:26, country: 'India', country_id: 1,
        states : [{ state : 'MH', state_id : 3 }, {state : 'HN', state_id : 4}] } },
{person: {id: 2, name: 'Joe', age: 25, country: 'USA', country_id: 2,
        states : [{ state : 'MH', state_id : 3 }, {state : 'HN', state_id : 4}] } }
        ];
var view = function(person){
    detail = '<p>'+person.name+' '+person.age+' ('+person.country+')</p>';
    return this.link('/demo/' + person.id, { 'title': person.name }, detail);
};

var settings = {
  search: {input: "#searchbox"}
};
var fJS = FilterJS(people, '#people_list', view, settings);