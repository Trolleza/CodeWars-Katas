// 7kyu -  Hide Pass from jdbc Urls

// We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

// Preconditions:

// non empty valid url
// password always next to string section password=
// assume password will not contain ampersand sign for sake of simplicity
// to make it more real it has non ASCII characters
// "password=" and "user" will occur only once
// empty passwords are not validated but best solutions take empty passwords into account

// Example:

// input
// jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

// output
// jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

function hidePasswordFromConnection(urlString) {
  return urlString.replace(
    /password=([^&]*)/,
    (u, p) => `password=${"*".repeat(p.length)}`
  );
}

//OU

function hidePasswordFromConnection(urlString) {
  var arr = urlString.split("password=");
  var s = "";
  for (var i = 0; i < arr[1].length; ++i)
    if (arr[1][i] == "&") break;
    else s += "*";
  var st = "";
  for (; i < arr[1].length; ++i) st += arr[1][i];
  return arr[0] + "password=" + s + st;
}

//OU

function hidePasswordFromConnection(urlString) {
  var pass = urlString.split("password=");
  var password = "";
  var user = pass[1].split("&");
  for (var i = 0; i < user[0].length; i++) {
    password += "*";
  }
  var result = pass[0] + "password=" + password;
  if (user[1] != null) result += "&" + user[1];

  return result;
}

//OU

function hidePasswordFromConnection(urlString) {
  let arr = urlString.split("password=");
  let str = "";
  let endpoint;
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[1][i] == "&") {
      endpoint = i;
      break;
    }
    str = str + "*";
  }
  arr[1] = str + (endpoint ? arr[1].slice(endpoint) : "");
  return arr.join("password=");
}
