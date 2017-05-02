var palindrome = require("../palindrome");

var chai = require("chai");
var expect = chai.expect;

describe ("palindrome", function(){
    // it("empty string", function(){
    //     expect(palindrome('')).to.equal("Empty String");
    // });
    
    it("positive", function(){
       expect(palindrome("a")).to.equal(true);
       expect(palindrome("0_0 (: /-\ :) 0-0")).to.equal(true);
        expect(palindrome("saas")).to.equal(true);
        expect(palindrome("malayalam")).to.equal(true);
        expect(palindrome("race car")).to.equal(true);
        
    });
    
    it("negative", function(){
        expect(palindrome("1 eye")).to.equal(false);
        expect(palindrome("almostomla")).to.equal(false);
        expect(palindrome("tesla")).to.equal(false);
        expect(palindrome("xexe")).to.equal(false);
        expect(palindrome("parthasarathy")).to.equal(false);
        expect(palindrome("not a palindrome")).to.equal(false);
        expect(palindrome("palindrome")).to.equal(false);
    });
    
    it("specialcase", function(){
        expect(palindrome("sa $as")).to.equal(true);
        
    });
});