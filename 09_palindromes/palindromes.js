const palindromes = function (str) {
    let stringArray = str.split('');
    let compareArray = [...stringArray];
    compareArray.reverse();
    for (let i = 0; i < stringArray.length; i++) {
        if (compareArray[i] != stringArray[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
