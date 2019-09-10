import {
  getNaiveFibonacci,
  getFibonacci,
  getFibonacciAndPairSum,
  getFibonacciEvenSumForLimit,
} from "./fib";

xdescribe("fibonacci", () => {
  describe("naiveFib", () => {
    it("returns 0 for n=0", () => {
      expect(getNaiveFibonacci(0)).toBe(0);
    });

    it("returns 1 for n=1", () => {
      expect(getNaiveFibonacci(1)).toBe(1);
    });

    it("returns 1 for n=2", () => {
      expect(getNaiveFibonacci(2)).toBe(1);
    });

    it("returns 21 for n=8", () => {
      expect(getNaiveFibonacci(8)).toBe(21);
    });
  });

  describe("getFibonacci", () => {
    it("returns 21 for n=8", () => {
      expect(getFibonacci(8)).toBe(21);
    });
  });

  describe("getFibonacciAndPairSum", () => {
    it("returns 2 for n=3", () => {
      expect(getFibonacciAndPairSum(3).sum).toBe(2);
    });

    it("returns 10 for n=6", () => {
      expect(getFibonacciAndPairSum(6).sum).toBe(10);
    });

    it("returns 44 for n=9", () => {
      expect(getFibonacciAndPairSum(9).sum).toBe(44);
    });

    it("returns 44 for n=9", () => {
      expect(getFibonacciAndPairSum(9).sum).toBe(44);
    });
  });

  describe("getFibonacciEvenSumForLimit", () => {
    it("returns 0 for limit 0", () => {
      expect(getFibonacciEvenSumForLimit(0)).toBe(0);
    });
    it("returns 0 for limit 1", () => {
      expect(getFibonacciEvenSumForLimit(1)).toBe(0);
    });
    it("returns 44 for limit 40", () => {
      expect(getFibonacciEvenSumForLimit(40)).toBe(44);
    });
    it("returns 44 for limit 34 (edge case)", () => {
      expect(getFibonacciEvenSumForLimit(34)).toBe(44);
    });

    it("returns 44 for limit 143 (edge case)", () => {
      expect(getFibonacciEvenSumForLimit(143)).toBe(44);
    });

    it("returns 798 for limit 611", () => {
      expect(getFibonacciEvenSumForLimit(611)).toBe(798);
    });

    it("returns 4613732 for 4,000,000", () => {
      expect(getFibonacciEvenSumForLimit(4 * 1000 * 1000)).toBe(4613732);
    });
  });
});
