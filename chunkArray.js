function chunkArray(arr, size){
  var outputArr = [];
  var twoDimension = [];
  
  var i = 0;
  while (i < arr.length){
      for (var j = 0; j < size; j++){
          if (i < arr.length){
              outputArr.push(arr[i]);
              i++;
          }
      }
      twoDimension.push(outputArr);
      outputArr = [];
  }
  
  return twoDimension;
}


module.exports = chunkArray;