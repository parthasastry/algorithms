function getCharCode(str){
    var sum = 0;
    var exp = str.length - 1;
    for (var i = 0; i < str.length; i++){
        sum += str[i] * Math.pow(2, exp);
        exp -= 1;
    }
    var res = String.fromCharCode(parseInt(sum));
    return res;
}

function binaryString(str){
    var alpha = "";
    var strArr = str.split(" ");
    var outputArr = [];
    for (var i = 0; i < strArr.length; i++){
        alpha += getCharCode(strArr[i]);
        if (alpha === " "){
            outputArr.push(alpha);
            alpha = "";
        }
    }
    outputArr.push(alpha);
    
    var output = outputArr.join(" ");
    console.log("output = ", output);
    return output;
}

module.exports = binaryString;