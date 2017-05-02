function slasher(arr, howMany){
    var removed = arr.splice(0, howMany);
    console.log("after removal = ", arr);
    return arr;
}


module.exports = slasher;