/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
ALGORITHMSSTRINGS

*/

const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};

console.log(reverseWords("happy gilmore baby"));
