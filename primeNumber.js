module.exports = primeNumber = (num, x=2) => {
  if (num <= x) return true;
  else if (x < num) {
    if(num % x === 0) return false;
    else return primeNumber(num, x += 1);
  }
};