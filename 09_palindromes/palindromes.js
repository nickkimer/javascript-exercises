const palindromes = function (string) {
    // need to add /g so that it matches all global cases rather than just 1st
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g,"")
    return cleanString.split("").reverse().join("") == cleanString
};

// Do not edit below this line
module.exports = palindromes;
