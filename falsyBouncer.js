function isFalsy(value){
    value = Boolean(value);  
   switch(value) {
    case 0:
    case NaN:
    case false:
    case null:
    case "":
    case undefined:
        return false;
   }
   return true;
}

function falsyBouncer(arr){
   var outputArr = [];
   outputArr = arr.filter(isFalsy);
   console.log("input array = ", arr);
   console.log("output array = ", outputArr);
   return outputArr;
}


module.exports = falsyBouncer;