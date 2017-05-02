
function inArray(value, arr){
    for (var x = 0; x < arr.length; x++){
        if (value === arr[x]){
            return true;
        }
    }
    return false;
}

function diffArr(arr1, arr2){
    var tempArr1 = [];
    var tempArr2 = [];
    var outputArr = [];
    for (var i = 0; i < arr1.length; i++){
        var y = inArray(arr1[i], arr2);
        if (y) {
            console.log("element ", arr1[i], " is in ", arr2);
        } else {
            console.log("element ", arr1[i], " is NOT in ", arr2);
            tempArr1.push(arr1[i]);
        }
    } 
    
    for (var i = 0; i < arr2.length; i++){
        var y = inArray(arr2[i], arr1);
        if (y) {
            console.log("element ", arr2[i], " is in ", arr1);
        } else {
            console.log("element ", arr2[i], " is NOT in ", arr1);
            tempArr2.push(arr2[i]);
        }
    }
    
    outputArr = tempArr1.concat(tempArr2);
    console.log("Output Diff Array = ", outputArr);
    return outputArr;
 
} 


module.exports = diffArr;