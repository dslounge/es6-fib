// Construct a program that will make change for a given dollar amount in cents using the fewest number of coins.
//
//

// const returnValShape = {
// pennies: 2,
// nickels: 2,
// dimes: 3,
// quarters: 5,
// }
//

// COINS is out of order
const COINS = [
  {
    name: "dimes",
    value: 10,
  },
  {
    name: "quarters",
    value: 25,
  },
  {
    name: "pennies",
    value: 1,
  },
  {
    name: "nickels",
    value: 5,
  },
];
export const numberErrorMsg = "input is not a number";
export const changeUnavailableMsg = "change isn't available";

export const giveChange = (cents, availableCoins = COINS) => {
  if (isNaN(cents)) {
    throw Error(numberErrorMsg);
  }

  // sort the coins from biggest to smallest
  const sortedCoins = availableCoins.sort((a, b) => {
    return a.value < b.value;
  });

  let remainder = cents;
  const returnObj = {};
  const coins = availableCoins.forEach(coin => {
    const numCoins = Math.floor(remainder / coin.value);
    remainder = remainder % coin.value;
    returnObj[coin.name] = numCoins;
  });

  if (remainder > 0) {
    throw Error(changeUnavailableMsg);
  }

  return returnObj;
};
