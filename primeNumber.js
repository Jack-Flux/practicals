module.exports = primeNumber = (num, x=2) => {
  if (num <= x) return true;
  return num % x === 0 ? false : primeNumber(num, x += 1);
};
