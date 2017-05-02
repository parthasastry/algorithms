var merge = require("./merge");

function mergesort(array, p, r) {
    if(array.length === 0){
        return "Empty Array";
    }
    
    if (r > p) {
        console.log("input array = ", array);
        console.log("starting p = ", p, " ending r = ", r);
        var q = Math.floor((p+r)/2);
        console.log("midpoint q = ", q);
        mergesort(array, p, q);
        mergesort(array, q+1, r);
        merge(array, p, q, r);
    }
    return array;
}

module.exports = mergesort;