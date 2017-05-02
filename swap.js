function swap(array, firstIndex, secondIndex){
    var temp = array[secondIndex];
    array[secondIndex] = array[firstIndex];
    array[firstIndex] = temp;
    console.log(array);
    return array;
}

module.exports = swap;