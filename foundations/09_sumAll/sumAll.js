const sumAll = function(firstInt, secondInt) {
    let firstStr = firstInt.toString();
    let secondStr = secondInt.toString();
    if (firstInt < 0 || secondInt < 0  || typeof firstInt == "string" || typeof secondInt == "string" || typeof firstInt  == "object" || typeof secondInt == "object" || firstStr.includes(".") || secondStr.includes(".")) {
     return `ERROR`;
    }
    let newFirstInt = 0;
    let newSecondInt = 0;
    if (firstInt > secondInt) {
        newFirstInt = secondInt;
        newSecondInt = firstInt;
        let total = 0;
        for (let i = newFirstInt; i <= newSecondInt; i++) {
        total = total + i;
        }
        return total;
    } 
 
    let total = 0;
    for (let i = firstInt; i <= secondInt; i++) {
        total = total + i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
