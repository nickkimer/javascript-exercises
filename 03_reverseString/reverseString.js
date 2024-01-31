const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseStringArray = stringArray.reverse();
    return reverseStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
