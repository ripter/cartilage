/*global module */

// works like _.extend
function extend(dest) {
  var args = Array.prototype.slice.call(arguments, 1);
  var i, len, name;

  for (i=0, len = args.length; i < len; i++) {
    for (name in args[i]) {
      dest[name] = args[i][name];
    }
  }

  return dest;
}

module.exports = extend;