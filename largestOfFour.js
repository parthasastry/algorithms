function largeNumber(array){
    var x = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] >= x){
            x = array[i];
        }
    }
    return x;
}


function largestOfFour(array){
    var largeArray = [];
    
    for (var i = 0; i < array.length; i++) {
        largeArray[i] = largeNumber(array[i]);
    }
    console.log("Largest array = ", largeArray);
    return largeArray;
}

module.exports = largestOfFour;