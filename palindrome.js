
function isEqual(array){
    if(array.length === 0){
        return false;
    }
    
    if(array[0] === array[array.length-1]){
        return true;
    } else {
        return false;
    }
}

function stripString(array){
   if(array.length === 0){
        return "";
    }
    
    if(array.length == 1){
        return array;
    }
    
    var strInput = array.split('');
    var strOutput = strInput.slice(1,strInput.length-1);
    array = strOutput.join('');
    return array;
   
}

function palindrome(str) {
  // Good luck!
//   if(str === ""){
//         return "Empty String";
//     }
    str =str.replace(/[^0-9a-zA-Z]/g, '');
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    
    if(str.length === 1){
        return true;
    }
    
    if(isEqual(str)){
        if(str.length > 2){
            str = stripString(str);
            return palindrome(str);
        }
        return true;
    }
    console.log("Just before returning false, String = ", str);
    return false;
}

module.exports = palindrome;