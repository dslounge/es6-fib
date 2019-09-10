import { giveChange, numberErrorMsg } from "./pair-exercise";

describe("giveChange", () => {
  // basic input validation
  it("returns an error if input is not  number", () => {
    try {
      const testVal = giveChange("monkeys");
    } catch (e) {
      expect(e.message).toEqual(numberErrorMsg);
    }
  });

  // computation tests

  it("returns 1 nickel when input is 5 cents", () => {
    const testVal = giveChange(5);
    const expectedValue = {
      quarters: 0,
      dimes: 0,
      nickels: 1,
      pennies: 0,
    };
    expect(testVal).toEqual(expectedValue);
  });

  it("returns 1 nickel, 1 penny for 6 cents", () => {
    const testVal = giveChange(6);
    const expectedValue = {
      quarters: 0,
      dimes: 0,
      nickels: 1,
      pennies: 1,
    };
    expect(testVal).toEqual(expectedValue);
  });

  it("returns 2 quarters, 1 dime, 1 nickel, 1 penny for 66 cents", () => {
    const testVal = giveChange(66);
    const expectedValue = {
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    };
    expect(testVal).toEqual(expectedValue);
  });
});
