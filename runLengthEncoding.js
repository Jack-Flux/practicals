module.exports = (pattern) => {
  let numberCount = 0,
    previousNumber = 0,
    totalZeros = 0,
    totalOnes = 0,
    newPat = [];

  pattern.forEach((number) => {
    number === 0 ? totalZeros += 1 : totalOnes +=1;
    numberCount += 1
    if(previousNumber !== number) {
      newPat.push(`${numberCount}x${previousNumber}`);
      previousNumber = number;
    }
  });
  newPat.push(`${numberCount}x${previousNumber}`);

  console.log(`Old length ${pattern.length}\nNew length ${newPat.length}`);
  console.log(`Total zeros ${totalZeros}\nTotal ones ${totalOnes}`);
  return newPat
}