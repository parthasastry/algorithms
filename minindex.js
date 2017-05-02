function minindex(array, startIndex) {
    if(array.length === 0) {
        return "Empty Array";
    }
    var min = startIndex;
    console.log("start index = ", startIndex);
    for (var x = startIndex; x < array.length - 1; x++){
        if(array[min] > array[x+1]) {
            min = x + 1;
        }
    }
    return min;
}

module.exports = minindex;