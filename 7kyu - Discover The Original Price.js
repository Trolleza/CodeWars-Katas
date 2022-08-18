// 7kyu - Discover The Original Price

// Description:

// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
// For example:

// Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price

function discoverOriginalPrice(discountedPrice, salePercentage) {
  let division = +(1 - `0.${salePercentage}`);
  return discountedPrice / division;
}

//OU

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

//OU

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return Math.round((discountedPrice / (1 - salePercentage / 100)) * 100) / 100;
}

//OU

function discoverOriginalPrice(discountedPrice, salePercentage) {
  var p = salePercentage / 100;
  var originalPrice = discountedPrice / (1 - p);
  return Math.round(originalPrice * 100) / 100;
}

//OU

const discoverOriginalPrice = (discountedPrice, salePercentage) =>
  Math.round((discountedPrice / (100 - salePercentage)) * 1e4) / 1e2;

//OU

const discoverOriginalPrice = (d, s) => +(d / ((100 - s) / 100)).toFixed(2);
