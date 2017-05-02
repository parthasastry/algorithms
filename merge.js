function merge(array,p,q,r) {
    if(array.length === 0) {
        return "Empty Array";
    }
    
    var firstHalf = [];
    var secondHalf = [];
    var i=0, j=0, k = p;
    
    for (i = 0; k <= q; i++, k++){
        firstHalf[i] = array[k];
    }
    
    for (j = 0; k <= r; j++,k++){
        secondHalf[j] = array[k];
    }
    
    console.log("First half = ", firstHalf);
    console.log("second half = ", secondHalf);
    
    k = p;
    i = 0;
    j = 0;
    
    while (i < firstHalf.length && j < secondHalf.length){
        if(firstHalf[i] < secondHalf[j]){
            array[k] = firstHalf[i];
            i++;
        } else {
            array[k] = secondHalf[j];
            j++;
        }
        k++;
    }
    
    while (i < firstHalf.length) {
        array[k] = firstHalf[i];
        i++;
        k++;
    }
    
    while(j < secondHalf.length) {
         array[k] = secondHalf[j];
         j++;
         k++;
    }
    
    console.log("merged array = ", array);
    return array;
}

module.exports = merge;