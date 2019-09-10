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

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

const COINS = { quarter: QUARTER, dime: DIME, nickel: NICKEL, penny: PENNY };

export const numberErrorMsg = "input is not a number";

export const giveChange = cents => {
  if (isNaN(cents)) {
    throw Error("input is not a number");
  }

  let remainder = cents;
  const coins = Object.keys(COINS).map(coinKey => {
    const coin = COINS[coinKey];
    const numCoins = Math.floor(remainder / coin);
    remainder = remainder % coin;
    return numCoins;
  });

  return {
    ...coins,
    pennies: remainder,
  };
};
