function prime(array,n ){
   if(array.length === 0) {
       return "Empty Array";
   } else {
       var min, max, guess;
       min = 0; 
       max = array.length - 1;
       
       if(max < min  ){
           return -1;
       }
       
       while (min < max) {
           guess = parseInt((min + max)/2);
        //   console.log("min = ", min , " ", "max = ", max, "guess = ", guess);
           if (array[guess] === n ) {
               return guess;
           } else if (array[guess] < n ){
               min = guess + 1;
           }  else {
               max = guess - 1;
           }
       }
       
       return -1;
       
   }
}

module.exports = prime;