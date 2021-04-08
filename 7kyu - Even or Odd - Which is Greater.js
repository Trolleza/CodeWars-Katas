// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// Test.assertEquals(evenOrOdd('12'), 'Even is greater than Odd');
// Test.assertEquals(evenOrOdd('123'), 'Odd is greater than Even');
// Test.assertEquals(evenOrOdd('112'), 'Even and Odd are the same');

function evenOrOdd(str) {
  
  let odd = str.split('').filter(oddIndex => oddIndex % 2 != 0).reduce((a, b) => (+a) + (+b)); //Obs: o + dentro () transforma em número.
  let even = str.split('').filter(evenIndex => evenIndex % 2 == 0).reduce((a, b) => (+a) + (+b)); //Obs: o + dentro () transforma em número.
  
  if (even > odd) {
    return 'Even is greater than Odd';
  } else if (even < odd) {
    return 'Odd is greater than Even';
  } else
    return 'Even and Odd are the same';
};