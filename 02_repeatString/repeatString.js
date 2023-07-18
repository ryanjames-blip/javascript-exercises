const repeatString = function(string, num) {
    const originalString = string;
    if (num == 0) {
        return '';
    }
    else if (num == 1) {
        return string;
    }
    else if (num > 1) {
        for (let i = 0; i < num - 1; i++) {
            string += originalString;
        }
        return string;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
