function mutation(arr){
    var firstArg = arr[0].toLowerCase();
   var secondArg = arr[1].toLowerCase().slice();
   
   for (var i = 0; i < secondArg.length; i++){
       if(firstArg.indexOf(secondArg[i])<0){
           return false;
       }
   }
   
   return true;
}


module.exports = mutation;