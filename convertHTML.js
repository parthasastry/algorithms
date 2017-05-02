function convertSpecial(char){
    var outputChar = "";
    switch(char){
        case "&": outputChar = "&amp;"; break;
        case "<": outputChar = "&lt;"; break;
        case ">": outputChar = "&gt;"; break;
        case '"': outputChar = "&quot;"; break;
        case "'": outputChar = "&apos;"; break;
        default: outputChar = char;
    }
    
    return outputChar;
}

function convertHTML(str){
   var outputStr = "";
   for (var i = 0; i < str.length; i++){
       outputStr += convertSpecial(str[i]);
   }
   console.log("input string = ", str);
   console.log("output str = ", outputStr);
   return outputStr;
   
   
} 


module.exports = convertHTML;