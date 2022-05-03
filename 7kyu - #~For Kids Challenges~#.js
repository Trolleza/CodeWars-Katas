// 7kyu - #~For Kids Challenges~#

// Here your task is to write a function that takes an encrypted date in format(ASCII CODE = AC) ACAC-AC-AC(String) and return it in an deciphered format (normal date in YYYY-mm-dd), to do this you will break the string of encrypted date, for each character of date(except '-') translate it to ASCII code subtract 50 of it and return the result translated according to ASCII table with the '-' between it.

// Example: "FC-3-G" ->(ASCII Translation)-> You will get 70 67 - 51 - 71 (for each of then -50)-> 20 17 - 1 - 21 -> "2017-01-21"

// Have fun!

function translateDate(dateStr) {
  const arr = dateStr
    .split("")
    .filter((char) => char !== "-")
    .map((char) => (char.charCodeAt() - 50).toString());

  const year =
    arr[1].length < 2 ? arr[0].padEnd(3, "0") + arr[1] : arr[0] + arr[1];
  const month = arr[2].padStart(2, "0");
  const day = arr[3].padStart(2, "0");

  return year + "-" + month + "-" + day;
}

//OU

function translateDate(DateStr) {
  let parts = DateStr.split("-");
  let arr = parts.map((a) => {
    return Array.prototype.map
      .call(a, (char) => {
        return char.charCodeAt() - 50 < 10
          ? "0" + (char.charCodeAt() - 50)
          : char.charCodeAt() - 50;
      })
      .join("");
  });
  return arr.join("-");
}

//OU

function translateDate(d) {
  var D = d.split("-");
  return `${(D[0].charCodeAt(0) - 50).toString().padStart(2, 0)}${(
    D[0].charCodeAt(1) - 50
  )
    .toString()
    .padStart(2, 0)}-${(D[1].charCodeAt() - 50).toString().padStart(2, 0)}-${(
    D[2].charCodeAt() - 50
  )
    .toString()
    .padStart(2, 0)}`;
}

//OU

function translateDate(dateStr) {
  dateStr = dateStr.replace(/[^-]/g, (match) => {
    let date = match.codePointAt() - 50;
    if (date < 10) return "0" + date;
    return date;
  });
  dateStr = dateStr.split("-");
  return `${dateStr[0]}` + "-" + `${dateStr[1]}` + "-" + `${dateStr[2]}`;
}

//OU

function translateDate(dateStr) {
  return dateStr.replace(/[^-]/g, (e) =>
    (e.charCodeAt() - 50 + "").padStart(2, "0")
  );
}

//OU

function translateDate(dateStr) {
  let res = "";

  for (let i = 0; i < dateStr.length; i++) {
    if (dateStr.charAt(i) != "-") {
      let el = dateStr.charCodeAt(i) - 50;
      if (el < 10) el = "0" + el;
      res += el;
    } else res += "-";
  }
  return res;
}
