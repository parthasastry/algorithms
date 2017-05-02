
function indexNum(arr, num){
    console.log("input array = ", arr);
    var newArr = arr.sort(function(a, b){ return a-b;});
    for (var i = 0; i <= newArr.length; i++){
        
        if (num <= newArr[i]){
            return i;
        }
    }
    return i-1;

} 


module.exports = indexNum;