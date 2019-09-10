import {
  giveChange,
  numberErrorMsg,
  changeUnavailableMsg,
} from "./pair-exercise";

describe("giveChange", () => {
  // basic input validation
  it("returns an error if input is not  number", () => {
    expect(() => {
      giveChange("monkeys");
    }).toThrow(numberErrorMsg);
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

  it("handles change given a custom set of coins", () => {
    const availableCoins = [
      {
        name: "60cent",
        value: 60,
      },
      {
        name: "3cent",
        value: 3,
      },
    ];

    const testVal = giveChange(66, availableCoins);
    const expectedValue = {
      "60cent": 1,
      "3cent": 2,
    };
    expect(testVal).toEqual(expectedValue);
  });

  it("throws an error when change can't be given", () => {
    const availableCoins = [
      {
        name: "60cent",
        value: 60,
      },
      {
        name: "3cent",
        value: 3,
      },
    ];

    expect(() => {
      giveChange(67, availableCoins);
    }).toThrow(changeUnavailableMsg);
  });
});
