// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var doc = document.body;
  var nodes = doc.childNodes;

  if (doc.classList !== undefined && doc.classList.contains(className)) {
    result.push(doc);
  }


  var recurse = function(thing) {
    for (var x = 0; x < thing.length; x++) {
      var element = thing[x];
      var classes = element.classList;
      var children = element.childNodes;

      // console.log('current element:', element);


      if (classes !== undefined && classes.contains(className)) {
        result.push(element);
      }

      if (children) {
        recurse(children);
      }
    }
    console.log(result);
    return result;
  };
  recurse(nodes);
  return result;
};
