function insertelement(array, rightIndex, value) {
    if(array.length === 0) {
        return "Empty Array";
    }
    
    var x;
    for (x = rightIndex; x > -1 && array[x] >= value; x--) {
        array[x+1] = array[x];
    }
    array[x+1] = value;
    
    return array;
}

module.exports = insertelement;