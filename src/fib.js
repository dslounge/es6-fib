/*
 * A naive recursive fibonacci function
 * n: the 0-indexed place for the fibonacci number
 * returns: the nth fibonacci number
 */
export const getNaiveFibonacci = n => {
  // There's a more concise way to write this like
  // return n < 2 ? n : naiveFib(n - 1) + naiveFib(n - 2)
  // but other devs will have an easier time if we're more explicit
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return getNaiveFibonacci(n - 1) + getNaiveFibonacci(n - 2);
};

/*
 * A memoized recursive fibonacci function
 * n: the 0-indexed place for the fibonacci number
 * returns: the nth fibonacci number
 */
const fibMemo = {};
export const getFibonacci = n => {
  if (fibMemo[n] !== undefined) {
    return fibMemo[n];
  }
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  const result = getFibonacci(n - 1) + getFibonacci(n - 2);
  fibMemo[n] = result;
  return result;
};

/*
 * A memoized recursive fibonacci function
 * n: the 0-indexed place for the fibonacci number
 * returns: {fib, pairSum}: the nth fibonacci number and the sum of the sequence of fibonacci pairs
 */
const fibPairsMemo = {};
export const getFibonacciAndPairSum = n => {
  if (fibPairsMemo[n] !== undefined) {
    return fibPairsMemo[n];
  }

  let result;
  if (n == 0) {
    result = { fib: 0, sum: 0 };
  } else if (n == 1) {
    result = { fib: 1, sum: 0 };
  } else {
    const prevFib = getFibonacciAndPairSum(n - 1);
    const prevPrevFib = getFibonacciAndPairSum(n - 2);

    const fib =
      getFibonacciAndPairSum(n - 1).fib + getFibonacciAndPairSum(n - 2).fib;
    const sum = fibPairsMemo[n - 1].sum + (fib % 2 == 0 ? fib : 0);
    result = { fib, sum };
  }
  fibPairsMemo[n] = result;
  return result;
};

/**
 * A function that searches for the sum of the even pairs in the fibonacci sequence whose values does not exceed limit
 * limit: the maximum value of a fibonacci number
 * returns: the sum of the even pairs
 */
export const getFibonacciEvenSumForLimit = limit => {
  let n = 0;
  let pair = { fib: 0, sum: 0 };
  do {
    let nextPair = getFibonacciAndPairSum(n++);
    if (nextPair.fib > limit) {
      break;
    }
    pair = nextPair;
  } while (1);

  return pair.sum;
};
