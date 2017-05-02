function camelCase(str){
    var word = str[0];
    var outputStrArr = [];
    for (var i = 1; i < str.length; i++){
        if (str[i].toUpperCase() === str[i] && str[i-1] !== " "){
            outputStrArr.push(word);
            word = " ";
        }
        word += str[i].toLowerCase();
    }
    outputStrArr.push(word);
    
    console.log("after converting camelcase ", outputStrArr);
    return outputStrArr;
}

function spinalCase(str){
   var outputStrArr = [];
   var outputStr = "";
    
   var hasSpace = /\s/.test(str); 
   var hasUnderscore = /_/.test(str)
   
   var hasCamelCase = function(){
      var regExp = /\S/;
      for (var i = 1; i < str.length; i++ ){
          if(str[i] === " " || str[i] === "_"){
              console.log(str[i]);
          } else {
              if(str[i].toUpperCase() === str[i]) {
                  if(regExp.test(str[i-1]) && str[i-1] !== " " && str[i-1] !== "_"){
                      return true;
                  }
              }
          }
      }
       return false;
   };
   
   console.log("hasSpace", hasSpace);
   console.log("hasUnderscore ", hasUnderscore);
   console.log("hasCamelCase ", hasCamelCase());
   
   if(hasSpace) {
       outputStrArr = str.split(" ");
   }
   if(hasUnderscore){
       outputStrArr = str.split("_");
   }
   if(hasCamelCase()){
       outputStrArr = camelCase(str);  
   }
   
    for (var i = 0; i < outputStrArr.length; i++){
          outputStrArr[i] = outputStrArr[i].toLowerCase();
    }
    console.log("output after lowercase = ", outputStrArr);
    outputStr = outputStrArr.join('-');
    outputStr = outputStr.replace(/\s/g, '');
    outputStr = outputStr.replace(/--/g, '-');

   console.log("output after dash = ", outputStr);
   
   return outputStr;
   
} 


module.exports = spinalCase;