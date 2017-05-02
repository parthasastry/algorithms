function reverse(str) {
    if(str === ""){
        return "Empty String";
    }
    
    var strInArray = [];
    var strOutArray = [];
    var k = -1;
    strInArray = str.split('');
    var i = strInArray.length - 1;
    console.log("length = ", strInArray.length);
   while (i >= 0){
       k++;
       strOutArray[k] = strInArray[i];
       i--;
   }
    console.log("strOutArray = ", strOutArray);
    str = strOutArray.join('');
    console.log("Reversed String = ", str);
  return str;
}

module.exports = reverse;