// 7kyu -  Holiday V - SeaSick Snorkeling

// Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

// Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

// Remember, only the process of change from wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the array, return "Throw Up", if less, return "No Problem".

// Sample Tests:
// Test.assertEquals(seaSick("~"), "No Problem");
// Test.assertEquals(seaSick("_~~~~~~~_~__~______~~__~~_~~"), "Throw Up");
// Test.assertEquals(seaSick("______~___~_"), "Throw Up");

function seaSick(x) {
  let a = x.split("_~").length - 1;
  let b = x.split("~_").length - 1;
  return (a + b) / x.length > 0.2 ? "Throw Up" : "No Problem";
}

//OU

function seaSick(x) {
  var count = 0;

  x.split("").reduce((first, second) => {
    first !== second ? ++count : count;
    return second;
  });

  if ((count / x.length) * 100 > 20) {
    return "Throw Up";
  }

  return "No Problem";
}

//OU

function seaSick(s) {
  return s
    .split("")
    .filter(
      (e, i) =>
        (e === "~" && s[i + 1] === "_") || (e === "_" && s[i + 1] === "~")
    ).length >
    0.2 * s.length
    ? "Throw Up"
    : "No Problem";
}

//OU

function seaSick(x) {
  let count = 0;
  for (let i = 1; i < x.length; i++) {
    if (x[i] != x[i - 1]) count++;
  }
  let percent = (count / x.length) * 100;
  return percent > 20 ? "Throw Up" : "No Problem";
}

//OU

function seaSick(x) {
  let count = 0;
  for (let i = 1; i < x.length; i++) {
    if (x[i] != x[i - 1]) count++;
  }
  let percent = count / x.length;
  return percent > 0.2 ? "Throw Up" : "No Problem";
}
