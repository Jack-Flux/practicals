module.exports = palindrome = (name) => {
  let temp = name.split('');
  if (temp.length === 0) return true;
  return temp[0] === temp[temp.length-1] ? palindrome(temp.splice(0,1).splice((temp.length-1), 1).join('')) : false;
};