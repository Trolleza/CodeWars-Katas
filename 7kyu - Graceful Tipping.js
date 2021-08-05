// 7kyu - Graceful Tipping 

// Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

// The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

// What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:

// 10 - 99.99... ---> Round to number divisible by 5

// 100 - 999.99... ---> Round to number divisible by 50

// 1000 - 9999.99... ---> Round to number divisible by 500

// And so on...

// Good luck!

// Examples
//  1  -->    2
//  7  -->    9
// 12  -->   15
// 86  -->  100

function gracefulTipping ( $ ) {
  $ = Math.ceil( $ * 1.15 ) 
  if( $ > 10 && $ < 100 ){
    while ( $ % 5 !== 0 ){ $++ };
  }else if( $ > 100 && $ < 1000 ){
    while ( $ % 50 !== 0 ){ $++ };
  }else if( $ > 1000 && $ < 10000 ){
    while ( $ % 500 !== 0 ){ $++ };
  }else if( $ > 10000 && $ < 100000 ){
    while ( $ % 5000 !== 0 ){ $++ };
  }else if( $ > 100000 && $ < 1000000 ){
    while ( $ % 50000 !== 0 ){ $++ };
  }else if( $ > 1000000 && $ < 10000000 ){
    while ( $ % 500000 !== 0 ){ $++ };
  }
  return $
}

//OU

function gracefulTipping(bill) {
  let a = Math.ceil(bill + (bill * 0.15));
  if (a < 10) return a;
  if (a > 10 && a < 99.99) return Math.ceil(a / 5) * 5;
  if (a > 99.99 && a < 999.99) return  Math.ceil(a / 50) * 50;
  if (a > 999.99 && a < 9999.99) return Math.ceil(a / 500) * 500;
  if (a > 9999.99 && a < 99999.99) return Math.ceil(a / 5000) * 5000;
  if (a > 99999.99  && a < 999999.99) return Math.ceil(a / 50000) * 50000;
  if (a > 999999.99  && a < 9999999.99) return Math.ceil(a / 500000) * 500000;
}

//OU

function gracefulTipping(bill) {
  let tip = Math.ceil(bill * 115 / 100);
  if (tip > 10 && tip < 100) {
      tip = Math.ceil(tip / 5) * 5; 
  }
  if (tip > 100 && tip < 1000) {
      tip = Math.ceil(tip / 50) * 50; 
  }
  if (tip > 1000 && tip < 10000) {
      tip = Math.ceil(tip / 500) * 500; 
  }
  if (tip > 10000 && tip < 100000) {
      tip = Math.ceil(tip / 5000) * 5000; 
  }
  if (tip > 100000 && tip < 1000000) {
      tip = Math.ceil(tip / 50000) * 50000; 
  }
  if (tip > 1000000 && tip < 10000000) {
      tip = Math.ceil(tip / 500000) * 500000; 
  }
  return tip;
}

