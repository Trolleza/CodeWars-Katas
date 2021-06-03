// 7kyu - London CityHacker

// You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

// Sample Tests:

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
// Test.assertEquals(londonCityHacker(['Piccidilly', 56]), "£3.90");
// Test.assertEquals(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
// Test.assertEquals(londonCityHacker(['Piccidilly', 56, 93, 243]), "£5.40");
// Test.assertEquals(londonCityHacker([386, 56, 1, 876]), "£3.00");
// Test.assertEquals(londonCityHacker([]), "£0.00");
//   });
// });

function londonCityHacker(journey) {
  let result = 0;
  for (let i = 0; i < journey.length; i++) {
    if (isNaN(journey[i])) result += 2.4;
    else {
      result += 1.5;
      if (typeof journey[i + 1] === "number") i++;
    }
  }
  return "£" + result.toFixed(2);
}

//OU

function londonCityHacker(journey, cost = 0, out = 0) {
  for (let i of journey) {
    if (typeof i === "string") {
      out += 2.4;
      cost = 0;
    } else {
      if (cost > 0) {
        cost = 0;
      } else {
        out += 1.5;
        cost += 1;
      }
    }
  }
  return `£${out.toFixed(2)}`;
}

//OU

function londonCityHacker(journey) {
  console.log(journey);
  let busFare = 0;
  return `£${journey
    .map((v, i) =>
      isNaN(v) ? ((busFare = 0), 2.4) : (busFare = 1.5 - busFare)
    )
    .reduce((v, w) => v + w, 0)
    .toFixed(2)}`;
}

//OU

function londonCityHacker(journey) {
  let sum = 0;
  let bus = 0;

  for (i of journey) {
    if (typeof i === "string") {
      sum += 2.4;
      bus = 0;
    } else if (bus++ % 2 === 0) {
      sum += 1.5;
    }
  }
  return `£${sum.toFixed(2)}`;
}
