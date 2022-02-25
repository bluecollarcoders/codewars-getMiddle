/*
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

const getCount = (str) => {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (let i in str) {
    for (let j in vowels) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
};

// regex example with match method

const getTotal = (str) => {
  var vowelCollect = (str.match(/[aeiou]/gi) || []).length;
  return vowelCollect;
};
