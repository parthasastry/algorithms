function confirmEnding(str, target){
   var x =  target.length;
   var ending = str.substr(str.length-x, x);
   if (target === ending){
       return true;
   }
   return false;
}

module.exports = confirmEnding;