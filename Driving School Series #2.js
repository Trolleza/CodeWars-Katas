// 7kyu - Driving School Series #2

// Description:

// Fast & Furious Driving School's (F&F) charges for lessons are as below:

// Time 	Cost
// Up to 1st hour 	$30
// Every subsequent half hour** 	$10
// ** Subsequent charges are calculated by rounding up to nearest half hour.

// For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.

// Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

// For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.

function cost(mins) {
  console.log(mins);
  if (mins <= 65) return 30;
  else if (mins <= 95) return 40;
  else if (mins <= 125) return 50;
  else if (mins <= 155) return 60;
  else if (mins <= 185) return 70;
  else if (mins <= 215) return 80;
  else if (mins <= 245) return 90;
  else if (mins <= 275) return 100;
  else if (mins <= 305) return 110;
  else if (mins <= 335) return 120;
  else if (mins <= 365) return 130;
  else if (mins <= 395) return 140;
  else if (mins <= 425) return 150;
  else if (mins <= 455) return 160;
  else if (mins <= 485) return 170;
  else if (mins <= 515) return 180;
  else if (mins <= 545) return 190;
  else if (mins <= 575) return 200;
  else return 210;
}

//OU

function cost(mins) {
  return 30 + (mins > 65 ? Math.ceil((mins - 65) / 30) : 0) * 10;
}

//OU

function cost(mins) {
  let cost = 30;
  let acc = 10;
  for (let i = 65; i < mins; i += 30) {
    if (mins >= 65) {
      cost += acc;
    }
  }
  return cost;
}

//OU

const cost = (mins, first = true) => {
  let price = first ? 30 : 10;
  return mins <= 5 ? 0 : price + cost(mins - (first ? 60 : 30), false);
};

//OU

function cost(mins) {
  let price = 0;
  if (mins <= 65) {
    price = 30;
  } else if (mins <= 95) {
    price = 40;
  } else {
    price = Math.ceil((mins - 65) / 30) * 10 + 30;
  }
  return price;
}
