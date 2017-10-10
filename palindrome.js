module.exports = palindrome = (name) => {
  if (name.length === 0) return true;
  return name[0] === name[name.length-1] ? palindrome(name.slice(1, name.length-1)) : false;
};
