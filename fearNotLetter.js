function fearNotLetter(str){
   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   var lenStr = str.length;
   
   var firstChar = str.charAt(0);
   var lastChar = str.charAt(str.length-1);
   var firstCharPos = alphabet.indexOf(firstChar);
   var lastCharPos = alphabet.indexOf(lastChar);
   var x = 0;
   
   for (var i = firstCharPos; i <= lastCharPos; i++){
       if(str[x] === alphabet[i]){
           console.log("equal");
           x++;
       } else {
           console.log("not equal");
           return alphabet[i];
       }
   }
   
   return undefined;
} 


module.exports = fearNotLetter;