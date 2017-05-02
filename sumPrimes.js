function sumPrimes(num){
   var sum = 0;
   var primeArr = [];
   primeArr.push(2);
   primeArr.push(3);
   var checkUpTo = Math.floor(Math.sqrt(num)) + 1;
   var composites = [];
   var j = 0;
   var compositeFlag = false;
   
   for (var x = 2; x <= checkUpTo; x++){
       composites[j] = x;
       j++;
   }
   
    for (var i = 4; i <= num; i++){
        compositeFlag = false;
        for (var k = 0; k < composites.length; k++) {
            if (i > composites[k] && i % composites[k] === 0) {
                compositeFlag = true;
                break;
            }
        }
        if (compositeFlag === false){
            primeArr.push(i);
        }
    }
    
    for (i = 0; i < primeArr.length; i++){
        sum += primeArr[i];
    }
    return sum;
  
}

module.exports = sumPrimes;
   