const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	if (numbers.length == 0) {
    return 0;
  }

  return numbers[0] + sum(numbers.slice(1));
};

const multiply = function(numbers) {
  if (numbers.length == 0) {
    return 1;
  }

  return numbers[0] * multiply(numbers.slice(1));
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	if (num == 0 || num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
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
