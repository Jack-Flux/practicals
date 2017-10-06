module.exports = (words) => {
  let dictionary = {};
  words.split('\n').forEach((line) => {
    line.split(' ').forEach((word) => {
      !dictionary[word] ? dictionary[word] = 1 : dictionary[word] += 1;
    });
  });
  return dictionary
}
