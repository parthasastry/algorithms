function repeatString(str, num){
   var outputStr = "";
   if(num <= 0){
       return "";
   }
   
   for (var i = 0; i < num; i++){
       outputStr += str;
   }
   return outputStr;
}

module.exports = repeatString;