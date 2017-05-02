function fibsOdd(num){
  var fibs = [];
  var sum = 0;
  fibs[0] = 0;
  fibs[1] =  1;
  
  var i = 2;
  while (fibs[i - 1] < num) {
      fibs[i] = fibs[i-1] + fibs[i-2];
      i++;
  }
  
  console.log("fibs = ", fibs);
  
  i = 0;
  while (fibs[i] <=  num){
      if (fibs[i] % 2 === 1){
          sum += fibs[i];
      }
      i++;
  }
  
  return sum;
  
}
   
  


module.exports = fibsOdd;