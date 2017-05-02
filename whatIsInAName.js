
function whatIsInAName(collection, source){
   var sourceKeys = Object.keys(source);
   var outputArr = [];
   var flag = false;
   
   
   for (var i = 0; i < collection.length; i++){
       for (var j = 0; j < sourceKeys.length; j++){
           var hasKeys = collection[i].hasOwnProperty(sourceKeys[j]);
           if(hasKeys){
               var newKey = sourceKeys[j];
              if(collection[i][newKey] === source[newKey]){
                  flag = true;
              } else {
                  flag = false;
              }
           } else {
               flag = false;
           }
       }
       if (flag === true){
            outputArr.push(collection[i]);
            flag = false;
       }
   }

   return outputArr;
} 


module.exports = whatIsInAName;