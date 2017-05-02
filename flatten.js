function isAnArray(arr, output){
    console.log("input array to isAnArray = ", arr);
    if(Array.isArray(arr)){
        for (var i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                isAnArray(arr[i], output);
            } else {
                output.push(arr[i]);
            }
        }
    } 
    console.log("output from isAnArray func = ", output);
    return output;
}

function flatten(arr){
    var output = [];
    isAnArray(arr, output);
    console.log("output = ", output);
    return output;
}

module.exports = flatten;