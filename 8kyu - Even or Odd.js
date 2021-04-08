// Even or Odd

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")

function even_or_odd(number) {
  if(number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
    even_or_odd(number);
};