// 7kyu - List of Presents

// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write the following function to help Leo out:

// function howManyGifts(maxBudget, gifts)
// The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

// Sample Tests:
// describe("Foo", function(){

//   it("should return 4", function(){
//       Test.assertEquals(howManyGifts(20, [13, 2, 4, 6, 1]), 4);
//   });

//   it("should return 0", function(){
//       Test.assertEquals(howManyGifts(0, [1]), 0);
//   });

// });

function howManyGifts(maxBudget, gifts) {
  let montant = 0;
  gifts.sort((a, b) => a - b);
  while (maxBudget >= 0 && gifts[montant] <= maxBudget) {
    maxBudget -= gifts[montant++];
  }
  return montant;
}

//OU

function howManyGifts(maxBudget, gifts) {
  const sorted = [...gifts].sort((a, b) => a - b);
  const giftsICanBuy = sorted.filter((item) => {
    return (maxBudget -= item) >= 0;
  });
  return giftsICanBuy.length;
}

//OU

const howManyGifts = (maxBudget, gifts) =>
  gifts.sort((a, b) => a - b).filter((price) => (maxBudget -= price) >= 0)
    .length;

//OU

function howManyGifts(maxBudget, gifts) {
  gifts = gifts.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i] <= maxBudget) {
      maxBudget -= gifts[i];
      max++;
    }
  }
  return max;
}
