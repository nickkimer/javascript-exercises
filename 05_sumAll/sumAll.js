const sumAll = function(a,b) {
    let partialSum = 0;
    if (a < 0 || b < 0) return "ERROR";
    // else if (typeof(a) != 'number' || typeof(b) != 'number') return "ERROR";
    else if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    else {
        // swap a and b if a > b
        if (a > b){
            let temp = a
            a = b
            b = temp
        }
        for (let i=a; i<=b; i++) {
            partialSum += i;
        }
        return partialSum;    
    }
    
};

// Do not edit below this line
module.exports = sumAll;
