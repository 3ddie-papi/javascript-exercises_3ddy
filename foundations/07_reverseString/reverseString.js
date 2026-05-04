const reverseString = function(str) {
  let splittedStr = str.split("");
  let reversedStr = splittedStr.reverse();
  let joinedStr = reversedStr.join();
  return joinedStr.replace(/,/g, "");
};

// Do not edit below this line
module.exports = reverseString;
