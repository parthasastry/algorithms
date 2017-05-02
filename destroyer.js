
function destroyer(arr){
    
    Array.prototype.slice.call(arguments);
    var filtered = arguments[0];
    var testArray = [];
    var p = 0;
    var q = 0;
    for (q = 1; q < arguments.length; q++){
        testArray[p] = arguments[q];
        p++;
    }
    
   for (var j = 0; j < testArray.length; j++){
        filtered = filtered.filter(function(x){
            return x !== testArray[j];
        });
    }
    
    console.log("filtered = ", filtered);

    return filtered;
} 


module.exports = destroyer;