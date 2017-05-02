function convertChar(pos, char){
    var units = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var thousands = 'M';
    var output = "";
    
    if (char === '0'){
        return "";
    } 
    switch (pos) {
        case 4: 
            if (char === '1') {
                return thousands;
            } else {
                for (var i = 0 ; i < char; i++){
                     output += thousands;
                }
                return output;
            }
        case 3: 
                return  hundreds[char - 1];
        case 2:
                return tens[char - 1];
        case 1:
                return units[char - 1];
        default:
               return "";
    }
}

function roman(num){
    var numStr = num.toString();
    var len =  numStr.length;
    var romanNum = "";
    var temp = "";
    
    for (var i = 0; i < numStr.length; i++){
         temp = convertChar(len, numStr[i]);
         console.log("temp = ", temp);
         romanNum += temp; 
         len--;
    }
    console.log("input num = ", num);
    console.log("romanNum = ", romanNum);
    return romanNum;
} 


module.exports = roman;