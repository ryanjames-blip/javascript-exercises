const fibonacci = function(num) {
    let fib = [1,1];
    let temp = fib[0];

    if (typeof num != 'number') {
        num = parseInt(num);
    }

    if (num < 1) return 'OOPS';

    for (let i = 1; i < num - 1; i++) {
        temp = fib[i-1] + fib[i];
        fib.push(temp);
    }
    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
