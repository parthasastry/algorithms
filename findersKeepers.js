function findersKeepers(arr, func){
  
  var num = arr.filter(func);
  console.log("num = ", num);
  return num[0];
}

module.exports = findersKeepers;