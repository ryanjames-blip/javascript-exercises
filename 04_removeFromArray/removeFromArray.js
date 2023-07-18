const removeFromArray = function(array, ...elementToRemove) {
    //iterate through the given array
    for (let i = 0; i < array.length; i++) {
        //iterate through the element(s)toRemove
        for (let j = 0; j < elementToRemove.length; j++) {
            if (array[i] === elementToRemove[j]) {
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
