const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i]; 
  }
  return result;
};

const multiply = function(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    result = result * nums[i];
  }
  return result;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(num) {
	let result = 1;
  if (num == 0) {
    return result;
  }

  for (let i = num; i > 0; i--) {
    result = i * result;
  }
  return result;
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
