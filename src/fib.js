export const naiveFib = n => {
  // There's a more concise way to write this like
  // return n < 2 ? n : naiveFib(n - 1) + naiveFib(n - 2)
  // but other devs will have an easier time if we're more explicit
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return naiveFib(n - 1) + naiveFib(n - 2);
};

/*
 * We might want a more efficient fibonacci function that runs faster
 */

const fibMemo = {};
export const memoFib = n => {
  if (fibMemo[n] !== undefined) {
    return fibMemo[n];
  }
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return memoFib(n - 1) + memoFib(n - 2);
};
