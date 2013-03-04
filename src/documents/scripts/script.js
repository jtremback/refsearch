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

// var prizzint = function(obj, maxDepth, prefix) {
//   var key, result;
//   result = "";
//   for (key in obj) {
//     if (typeof obj[key] === "object") {
//       if (maxDepth !== undefined && maxDepth <= 1) {
//         result += key + " : object [max depth reached]\n";
//       } else {
//         result += this.prizzint(obj[key], (maxDepth ? maxDepth - 1 : maxDepth), key + ".");
//       }
//     } else {
//       result += key + " : " + obj[key] + "\n";
//     }
//   }
//   return result;
// }