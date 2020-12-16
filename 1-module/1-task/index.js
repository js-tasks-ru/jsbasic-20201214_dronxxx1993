/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let computation = 1;
  for (let i = 1; i <= n; i++) {
    computation *= i;
  }
  return computation;
}
