// 7kyu - Determine if the poker hand is flush

// Description:

// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// Examples

// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false

function isFlush(cards) {
  return cards.every((card) => card.slice(-1) === cards[0].slice(-1));
}

//OU

const isFlush = (cards) => new Set(cards.map((i) => i.slice(-1))).size === 1;

//OU

isFlush = ([a, ...b]) => b.every((i) => i.slice(-1) === a.slice(-1));

//OU

const isFlush = (cards) =>
  cards
    .map((card) => card.slice(-1))
    .reduce((x, y) => (x === y ? x : false)) !== false;

//OU

function isFlush(cards) {
  let suits = cards.map((card) => [...card].reverse()[0]);
  return suits.every((suit) => suit === suits[0]);
}

//OU

const isFlush = (cards) => {
  const flushedSuites = ["HHHHH", "SSSSS", "DDDDD", "CCCCC"];
  const cardSuites = cards.map((card) => card.slice(-1)).join("");

  return flushedSuites.includes(cardSuites);
};

//OU

function isFlush(cards) {
  const suits = cards.map((card) => card[card.length - 1]);
  let flush = true;
  for (let i = 0; i < suits.length - 1; i++) {
    if (suits[i] !== suits[i + 1]) {
      flush = false;
      break;
    }
  }
  return flush;
}

//OU

function isFlush(cards) {
  let suit = cards[0][cards[0].length - 1];
  cards = cards.map((item) => item.includes(suit));
  console.log(cards);
  return cards.includes(false) ? false : true;
}

//OU

function isFlush(cards) {
  const a = cards.every((card) => card[card.length - 1] === "H");
  const b = cards.every((card) => card[card.length - 1] === "S");
  const c = cards.every((card) => card[card.length - 1] === "D");
  const d = cards.every((card) => card[card.length - 1] === "C");
  const result = a || b || c || d;
  return result;
}

//OU

function isFlush(cards) {
  let suit = cards[0].match(/[HSCD]/);
  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].includes(suit)) {
      return false;
    }
  }
  return true;
}

//OU

function isFlush(cards) {
  let x = [];
  cards.forEach((i) => {
    x.push(i.slice(-1));
  });
  return [...new Set(x)].length == 1;
}
