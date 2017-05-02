var insertelement = require("./insertelement");

function insertionsort(array) {
    if(array.length === 0) {
        return "Empty Array";
    }

    for ( var x = 0; x < array.length; x++){
        array = insertelement(array, x-1, array[x]);
    }
    return array;
}

module.exports = insertionsort;