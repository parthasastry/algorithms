function truncateStr(str, num){
   var newString = "";
   if(num >= str.length){
       newString = str;
   } else if (num > 3){
       newString = str.slice(0, num-3) + "...";   
   } else {
       newString = str.slice(0, num) + "..."; 
   }
    console.log("Original string = ", str);
    console.log("Truncated string = ", newString);
    return newString;
}


module.exports = truncateStr;