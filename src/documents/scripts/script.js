var url = "http://backbonejs.org/";
var array = []

$("[id]").each(function() {
  var obj = {};
  var id = ($(this).attr("id"));
  var code = $(this).find("code").text();
  console.log(id);
  console.log(code);
  obj.link = url + "#" + id;
  obj.language = "js";
  obj.lib = "backbone";
  obj.func = code;
  array.push(obj)
});

console.log(JSON.stringify(array));