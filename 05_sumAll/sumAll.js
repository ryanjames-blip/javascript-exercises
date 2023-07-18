const sumAll = function(firstNum, secondNum) {
    if (firstNum > secondNum) {
        [firstNum, secondNum] = [secondNum, firstNum];
    }
    if (typeof firstNum != 'number' ||
        typeof secondNum != 'number' ||
        firstNum < 0 || secondNum < 0) {
            return 'ERROR';
        }

    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
