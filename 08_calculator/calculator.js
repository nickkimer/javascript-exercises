const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
  let partialSum = 0;
  for (let i=0; i<a.length; i++) {
    partialSum += a[i];
  }
  return partialSum;    
};

const multiply = function(a) {
  let partialProduct = 1;
  for (let i=0; i<a.length; i++) {
    partialProduct *= a[i];
  }
  return partialProduct;    
};

const power = function(a,b) {
	return a**b
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
