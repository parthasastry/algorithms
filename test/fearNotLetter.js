var fearNotLetter = require("../fearNotLetter");

var chai = require("chai");
var expect = chai.expect;

describe ("fearNotLetter", function(){
    
    it("case 1", function(){
      expect(fearNotLetter("abce")).to.equal("d");
    });
    
    it("case 2", function(){
      expect(fearNotLetter("abcdefghjklmno")).to.equal("i");
    });
    
    it("case 3", function(){
      expect(fearNotLetter("bcd")).to.equal(undefined);
    });
    
    it("case 4", function(){
      expect(fearNotLetter("yz")).to.equal(undefined);
    });
    
});














