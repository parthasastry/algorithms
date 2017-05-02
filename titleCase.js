function toTitleCase(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function titleCase(str){

    var splitSentence = str.split(" ");
    var outputStr = []
    
    for (var i = 0; i < splitSentence.length; i++){
            outputStr[i] = toTitleCase(splitSentence[i]);
    }
    
    str = outputStr.join(" ");
    console.log("str = ", str);
    return str;
    
}

module.exports = titleCase;