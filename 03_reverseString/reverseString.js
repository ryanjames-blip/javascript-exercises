const reverseString = function(string) {
    const stringArray = string.split('');
    const reversed = stringArray.reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
