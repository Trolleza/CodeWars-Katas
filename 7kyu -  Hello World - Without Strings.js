// 7kyu -  Hello World - Without Strings

// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// Good luck and try to be as creative as possible!

const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);

//OU   

const helloWorld = () => {
  var d = String.fromCharCode(100);
  var l = String.fromCharCode(108);
  var e = String.fromCharCode(101);
  var r = String.fromCharCode(114);
  var H = String.fromCharCode(72);
  var W = String.fromCharCode(87);
  var o = String.fromCharCode(111);
  var comma = String.fromCharCode(44);
  var blank = String.fromCharCode(32);
  var exclamation = String.fromCharCode(33);
  return H + e + l + l + o + comma + blank + W + o + r + l + d + exclamation;
};
