const removeFromArray = function(myArray, ...args) {
    return myArray.filter(arg => !args.includes(arg));
};

// Do not edit below this line
module.exports = removeFromArray;