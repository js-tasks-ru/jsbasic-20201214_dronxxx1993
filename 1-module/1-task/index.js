/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let calculatingFactorial = 1;

  for (let i = 1; i <= n; i++) {
    calculatingFactorial *= i;
  }

  return calculatingFactorial;
}
