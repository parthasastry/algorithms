function isVowel(char){
    var vowel = false;
    switch(char) {
        case 'a': 
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowel = true; 
            break;
        default:
            vowel = false;
    }
    return vowel;
}

function pigLatin(str){
    var ay = "ay";
    var outputStr = "";
    
    for (var i = 0; i < str.length; i++){
        if(isVowel(str[i])){
            if ( i === 0) {
                ay = "way";
            }
            outputStr = str.substr(i, str.length - i) + str.substr(0, i) + ay;
            return outputStr;
        }
    }
    return str + ay;
} 


module.exports = pigLatin;