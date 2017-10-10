module.exports = factorial = (num, total = 1) => num !== 0 ? factorial(num-1, total*num) : total;
