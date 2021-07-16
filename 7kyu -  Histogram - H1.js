// 7kyu -  Histogram - H1

// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

// Example:

// 6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7
// Task
// You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

// Notes
// There are no trailing spaces on the lines
// All lines (including the last) end with a newline \n
// A count is displayed beside each bar except where the count is 0
// The number of rolls may vary but there are never more than 100

let histogram = (res) =>
  res
    .map((j, i) => `${i + 1}|${j == 0 ? "" : "#".repeat(j) + " " + j}` + "\n")
    .reverse()
    .join("");

//OU

function histogram(results) {
  var histogram = '';
  
  for (let i=5; i>=0; --i) {
    (histogram += (i+1) + '|' + '#'.repeat(results[i]) + (results[i] > 0 ? ' ' + results[i] : '') + "\n");
  }
  return histogram;
}

//OU

function histogram(results) {
  const options = [1, 2, 3, 4, 5, 6];
  let str = "";

  for (let i = results.length - 1; i >= 0; i--) {
    const temp = results[i] ? `${"#".repeat(results[i])} ${results[i]}` : "";
    str += `${options[i]}|${temp}\n`;
  }

  return str;
}