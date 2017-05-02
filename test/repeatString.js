var repeatString = require("../repeatString");

var chai = require("chai");
var expect = chai.expect;

describe ("repeatString", function(){
    
    it("positive", function(){
       expect(repeatString("abc", 3)).to.equal("abcabcabc");
       expect(repeatString("*", 3)).to.equal("***");
       expect(repeatString("*", 8)).to.equal("********");
    });
    
     it("negative", function(){
       expect(repeatString("abc", -3)).to.equal("");
       expect(repeatString("*", 0)).to.equal("");
    });
    
});