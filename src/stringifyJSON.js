// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var isNumber = function(value) {
    if(typeof value === 'number') {
      return true;
    }
  }

  var isString = function(value) {
    if(typeof value === 'string') {
      return true;
    }
  }

  var isBoolean = function(value) {
    if(typeof value === 'boolean') {
      return true;
    }
  }

  if(obj === null) {
    return obj + '';
  }

  var isPrimitive = function(value) {
    if (isNumber(value) || isBoolean(value) || isString(value)) {
      return true;
    }
  }

  if (isPrimitive(obj)) {
    if(isString(obj)) {
      return '"' + obj + '"';
    } else {
      return  obj + '';
    }
  }

  var isArray = function(value) {
    if(Array.isArray(obj)){
      return true;
    }
  }

  var isObject = function(value) {
    if(typeof obj === 'object' && !(Array.isArray(obj))) {
      return true;
    }
  }

  var isFunction = function(value){
    if(typeof value === 'function') {
      return true;
    }
  }

  var isUndefined = function(value){
    if(typeof value === 'undefined') {
      return true;
    }
  }

  if(isArray(obj)) {
    var result = '[';
    for (var x = 0; x < obj.length; x++) {
      if(x < obj.length-1) {
        result += stringifyJSON(obj[x]) + ',';
      }else{
        result += stringifyJSON(obj[x]);
      }
    }
    result += ']';
    return result;
  }

  if(isObject(obj)) {
    var keys = Object.keys(obj);
    var result = '{';
    for(var key in obj) {
      var value = obj[key];
      if(isUndefined(value) || isFunction(value)) {
        result += '';
      }else if(key !== keys[keys.length-1]){
        result += '"' + key + '"' + ':' + stringifyJSON(value) + ',';
      }else{
        result += '"' + key + '"' + ':' + stringifyJSON(value);
      }
    }
    result += '}';
    return result;
  }

};
