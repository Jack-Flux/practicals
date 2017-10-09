const fib = (n, prev = 0, current = 1) => !n ? prev + current : fib(--n, current, prev+current);

module.exports = (limit) => {
  let n = 0,
      i = 0,
      series = [];
  while(n <= limit) {
    series.push(n = fib(i));
    i++;
  }
  return series;
}