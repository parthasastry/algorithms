
function replaceWord(str, before, after){
  var sentence = str.split(' ');
  var word;
  var outStr;
  
  for (var i = 0; i < sentence.length; i++){
      if (sentence[i] === before){
          var character = sentence[i].charAt(0);
          if (character == character.toUpperCase()) {
             word = after.charAt(0).toUpperCase() + after.slice(1);
             sentence[i] = word;
          } else {
              sentence[i] = after;
          }
      }
  }
  
  outStr = sentence.join(' ');
  return outStr;
  
} 


module.exports = replaceWord;