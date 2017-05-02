
function dropit(arr, func){
  
  var result = false;
  var output = [];
  var i = 0;
  while (i < arr.length && !result){
    result = func(arr[i]);
    if (result === false){
      output = arr.shift();
      console.log("arr = ", arr);
    } 
  }
  
  return arr;
}

module.exports = dropit;