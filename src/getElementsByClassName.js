// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  var doc = document.body;
  for (var x = 0; x < doc.length; x++) {
    var element = doc[x];
    if (element.classList.contains(className)) {
      result.push(element);
    }

    if (element.childNodes) {

    }
  }
  return result;
};
