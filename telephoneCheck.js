function countDigits(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (/\d/.test(str[i])){
            count++;
        }
    }
    console.log("str = ", str, " count of  digits = ", count);
    return count;
}

function checkParantheses(str){
    var start, end;
    start = str.indexOf("(");
    end = str.indexOf(")");
    console.log("start = ", start, " end = ", end);
    if(start === -1 && end === -1){
        return true;
    }
    
    if((start === 0 && end) === -1 || (start === -1 && end)){
        return false;
    } 
    
    if(start === 0 && end === str.length-1){
        return false;
    }
    
    return true;
}

function telephoneCheck(str){
    var validTel;
    var ctDigits = 0;
    
    if (/\d\d\d\-\d\d\d\-\d\d\d\d/.test(str)){
        console.log("case 1");
        validTel = true;
    } else if (/\d\s\d\d\d\-\d\d\d\-\d\d\d\d/.test(str)){
        console.log("case 2");
        validTel = true;
    } else if (/\d\s\(\d\d\d\)\s\d\d\d\-\d\d\d\d/.test(str)){
        console.log("case 3");
        validTel = true;
    } else if (/\d\d\d\d\d\d\d\d\d\d/.test(str)){
        console.log("case 4");
        validTel = true;
    } else if (/\(\d\d\d\)\d\d\d\-\d\d\d\d/.test(str)){
        console.log("case 5");
        validTel = true;
    } else if(/\d\(\d\d\d\)\d\d\d\-\d\d\d\d/.test(str)){
        console.log("case 6");
        validTel = true;
    } else if (/\d\s\d\d\d\s\d\d\d\s\d\d\d\d/.test(str)){
        console.log("case 7");
        validTel = true;
    } else {
        console.log("default case");
        console.log("Invalid telephone number ", str);
        validTel = false;
    }
    
    if (validTel){
        ctDigits = countDigits(str);
        
        if(ctDigits === 10 || ctDigits === 11){
            validTel = checkParantheses(str);
        }
        
        if (ctDigits !== 10 && ctDigits !== 11){
            validTel = false;
        }
        if (ctDigits === 11 && str[0] !== '1'){
            console.log("1 digit phone no, but not US number");
            validTel = false;
        } 
    }
    return validTel;
    
}

module.exports = telephoneCheck;