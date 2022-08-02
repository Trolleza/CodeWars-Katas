// 7kyu - Driving Licence

// Introduction

// In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicle on highways and some other roads to which the public have access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is required in the UK by any person driving a vehicle on any highway or other road defined in s.192 Road Traffic Act 1988[1] irrespective of ownership of the land over which the road passes, thus including many which allow the public to pass over private land; similar requirements apply in Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source Wikipedia)

// Task

// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

// Rules

// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"

// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"];

// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female

// You will need to output the full 16 digit driving license number.

// Good luck and enjoy!

function driver([first, mid, last, b, gender]) {
  let sur = `${`${last.slice(0, 5)}99999`.slice(0, 5)}`.toUpperCase();
  let dec = b[b.length - 2];
  let mon = `0${new Date(b).getMonth() + 1 + (gender === "F" ? 50 : 0)}`.slice(
    -2
  );
  let year = b[b.length - 1],
    date = b.slice(0, 2);
  let init = `${first[0] || ""}${mid[0] || ""}99`.slice(0, 2);
  let arb = "9",
    check = "AA";

  return `${sur}${dec}${mon}${date}${year}${init}${arb}${check}`;
}

//OU

function driver(data) {
  var birthDay = new Date(data[3]);

  return (
    (data[2].toUpperCase() + "99999").slice(0, 5) + //1-5
    data[3].slice(-2, -1) + //6
    ("0" + (birthDay.getMonth() + (data[4] == "M" ? 1 : 51))).slice(-2) + //7-8
    ("0" + birthDay.getDate()).slice(-2) + //9-10
    data[3].slice(-1) + //11
    data[0].slice(0, 1) +
    (data[1] + "9").slice(0, 1) + //12-13
    "9AA"
  ); //14-16
}

//OU

function driver([first, middle, surname, dob, sex]) {
  var s = "";
  s += (surname + "99999").substring(0, 5); // 1-5
  s += dob.substring(dob.length - 2, dob.length - 1); // 6
  var date = new Date(dob);
  var mob = date.getMonth() + 1 + (sex == "F" ? 50 : 0);
  s += mob < 10 ? `0${mob}` : `${mob}`; // 7-8
  s += dob.substring(0, 2); // 9-10
  s += dob.substring(dob.length - 1, dob.length); // 11
  s += first[0] + (middle + "9")[0]; // 12-13
  s += "9"; // 14
  s += "AA"; // 15-16

  return s.toUpperCase();
}

//OU

const driver = (data) =>
  data[2].slice(0, 5).toUpperCase().padEnd(5, 9) +
  data[3].slice(-2, -1) +
  `${new Date(data[3]).getMonth() + (data[4] === `F` ? 51 : 1)}`.padStart(
    2,
    0
  ) +
  `${new Date(data[3]).getDate()}`.padStart(2, 0) +
  data[3].slice(-1) +
  data[0][0] +
  (data[1][0] || 9) +
  `9AA`;
