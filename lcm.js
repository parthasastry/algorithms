function gcd(x, y){
    var min, max;
    if (x > y){
        max = x;
        min = y;
    } else {
        max = y;
        min = x;
    }
    
    var diff = max - min;
    if (max === min){
        return max;
    } else  if( max - min === 1) {
        return 1;
    } else if(min > diff){
        return gcd(diff, min);
    } else {
        return gcd(min, diff);
    }
}

function scm(x, y){
    var result = (x*y)/gcd(x, y);
    console.log(" x = ", x, " y = ", y, "lcm = ", x);
    return result;
}

function lcm(arr){
    var min, max, result;
    if (arr[0] >= arr[1]){
        min = arr[1];
        max = arr[0];
    } else {
        min = arr[0];
        max = arr[1];
    }
    result = scm(min, min+1);
    
    for (var i = min + 2; i <= max; i++){
        result = scm(result, i);
    }
   
    console.log(" lcm for ", min, " and ", max , " = " , result);
    return result;
}

module.exports = lcm;
   