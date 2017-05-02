var swap = require("./swap");
var minindex = require("./minindex");

function selectionsort(array) {
    if(array.length === 0) {
        return "Empty Array";
    }
    
    var min;
    
    for (var x = 0; x < array.length - 1; x++){
        min = minindex(array, x);
        swap(array, x, min);
        console.log(array);
    }
    
    return array;
}

module.exports = selectionsort;