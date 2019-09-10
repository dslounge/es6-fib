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

export const numberErrorMsg = "input is not a number";

export const giveChange = cents => {
  if (isNaN(cents)) {
    throw Error("input is not a number");
  }

  let remainder = cents;

  // mod by quarters
  const quarters = Math.floor(remainder / QUARTER);
  remainder = remainder % QUARTER;
  // mod by dimes
  const dimes = Math.floor(remainder / DIME);
  remainder = remainder % DIME;
  // mod by nickels
  const nickels = Math.floor(remainder / NICKEL);
  remainder = remainder % NICKEL;

  return {
    quarters,
    dimes,
    nickels,
    pennies: remainder,
  };
};
