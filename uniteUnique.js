Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

function uniteUnique(arr){
   var outputArr = [];
   var args = Array.from(arguments);
   var flattened = args.reduce(function(a,b){
       return a.concat(b);
   });
   console.log("arr = ", args);
   console.log("flattened = ", flattened);
   
   for (var i = 0; i < flattened.length; i++){
       if(outputArr.contains(flattened[i])){
           console.log("object in ouput array");
       } else {
           outputArr.push(flattened[i]);
       }
   }
   console.log("output array = ", outputArr);
   return outputArr;
   
} 


module.exports = uniteUnique;