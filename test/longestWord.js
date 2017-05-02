var longestWord = require("../longestWord");

var chai = require("chai");
var expect = chai.expect;

describe ("longestWord", function(){
    
    it("positive", function(){
       expect(longestWord("May the force be with you")).to.equal(5);
       expect(longestWord("The quick brown fox jumped over the lazy dog")).to.equal(6);
    });
    
});