function longestWord(str){
    var splitSentence = str.split(" ");
    var length = 0;
    console.log("number of words = ", splitSentence.length);
    for (var i = 0; i < splitSentence.length; i++){
        if(splitSentence[i].length > length){
            length = splitSentence[i].length;
        }
    }
    return length;
    
}

module.exports = longestWord;