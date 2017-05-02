function pair(char){
    var outputChar = "";
    
    switch(char){
        case 'A':
            outputChar = 'T';
            break;
        case 'T':
            outputChar = 'A';
            break;
        case 'C':
            outputChar = 'G';
            break;
        case 'G':
            outputChar = 'C';
            break;
        default:
            outputChar = "";
    }
    return outputChar;
}

function DNA(str){
   var outputCode = [];
   var twos = [];
   var pairedChar = "";
   
   for (var i = 0; i < str.length; i++){
       pairedChar = pair(str[i]);
       twos.push(str[i], pairedChar);
       outputCode.push(twos);
       twos = [];
   }

   return outputCode;
} 


module.exports = DNA;