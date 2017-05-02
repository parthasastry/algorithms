function findCode(x){
    var y;
    var alphabets = ['A', 'B', 'C', 'D', 'E', 'F','G',
                    'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var j = 0; j < alphabets.length; j++){
        if (x === alphabets[j]){
            if (j <=12) {
                y = alphabets [j + 13];
            } else {
                y = alphabets [j - 13];
            }
             return y;
        } 
    }
    return x;
}

function caesarCipher(str){
   var newStr = [];
   
    for (var i = 0; i < str.length; i++){
        newStr[i] = findCode(str[i]);   
    }
    console.log("input str =  ", str);
    console.log("newStr = ", newStr.join(''));
    return newStr.join('');
} 


module.exports = caesarCipher;