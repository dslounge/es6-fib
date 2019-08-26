import { naiveFib } from "./fib";

describe("fibonacci", () => {
  describe("naiveFib", () => {
    it("returns 0 for n=0", () => {
      expect(naiveFib(0)).toBe(0);
    });

    it("returns 1 for n=1", () => {
      expect(naiveFib(1)).toBe(1);
    });

    it("returns 1 for n=2", () => {
      expect(naiveFib(2)).toBe(1);
    });

    it("returns 21 for n=8", () => {
      expect(naiveFib(8)).toBe(21);
    });
  });
});
