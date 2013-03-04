var url = "http://backbonejs.org/";


$("[id]").each(function() {
  var id = ($(this).attr("id"));
  var code = $(this).find("code").text();
  console.log(id);
  console.log(code);
  obj.link = url + "#" + id;
  obj.language = "js";
  obj.lib = "backbone";
  obj.func = code;


});