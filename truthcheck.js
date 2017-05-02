function truthcheck(collection, pre){
   var keys = [];
   var keypresent = false;
   for (var i = 0; i < collection.length; i++){
       keypresent = false;
       keys = Object.keys(collection[i]);
       for (var j = 0; j < keys.length; j++){
           if (keys[j] === pre && collection[i][keys[j]]){
               keypresent = true;
               break;
           }
       }
       if (keypresent){
           console.log(" Key is present for ", keys,  " object = ", collection[i]);
       } else {
           console.log("key is NOT present for ", keys, "object = ", collection[i]);
           keypresent = false;
           break;
       }
   }
   return keypresent;
}

module.exports = truthcheck;