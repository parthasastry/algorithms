var telephoneCheck = require("../telephoneCheck");

var chai = require("chai");
var expect = chai.expect;

describe ("telephoneCheck", function(){
    
    it("case 1", function(){
      expect(telephoneCheck("555-555-5555")).to.equal(true);
    });
    it("case 2", function(){
      expect(telephoneCheck("1 555-555-5555")).to.equal(true);
    });
    it("case 3", function(){
      expect(telephoneCheck("1 (555) 555-5555")).to.equal(true);
    });
    it("case 4", function(){
      expect(telephoneCheck("5555555555")).to.equal(true);
    });
    it("case 5", function(){
      expect(telephoneCheck("(555)555-5555")).to.equal(true);
    });
    it("case 6", function(){
      expect(telephoneCheck("1(555)555-5555")).to.equal(true);
    });
    it("case 7", function(){
      expect(telephoneCheck("555-5555")).to.equal(false);
    });
    it("case 8", function(){
      expect(telephoneCheck("5555555")).to.equal(false);
    });
    it("case 9", function(){
      expect(telephoneCheck("1 555)555-5555")).to.equal(false);
    });
    it("case 10", function(){
      expect(telephoneCheck("1 555 555 5555")).to.equal(true);
    });
    it("case 11", function(){
      expect(telephoneCheck("1 456 789 4444")).to.equal(true);
    });
    it("case 12", function(){
      expect(telephoneCheck("123**&!!asdf#")).to.equal(false);
    });
    it("case 13", function(){
      expect(telephoneCheck("55555555")).to.equal(false);
    });
    it("case 14", function(){
      expect(telephoneCheck("(6505552368)")).to.equal(false);
    });
    it("case 15", function(){
      expect(telephoneCheck("2 (757) 622-7382")).to.equal(false);
    });
    it("case 16", function(){
      expect(telephoneCheck("0 (757) 622-7382")).to.equal(false);
    });
    it("case 16", function(){
      expect(telephoneCheck("-1 (757) 622-7382")).to.equal(false);
    });
    it("case 17", function(){
      expect(telephoneCheck("2 757 622-7382")).to.equal(false);
    });
    it("case 18", function(){
      expect(telephoneCheck("10 (757) 622-7382")).to.equal(false);
    });
    it("case 19", function(){
      expect(telephoneCheck("27576227382")).to.equal(false);
    });
    it("case 20", function(){
      expect(telephoneCheck("(275)76227382")).to.equal(false);
    });
    it("case 21", function(){
      expect(telephoneCheck("2(757)6227382")).to.equal(false);
    });
    it("case 22", function(){
      expect(telephoneCheck("2(757)622-7382")).to.equal(false);
    });
    it("case 23", function(){
      expect(telephoneCheck("555)-555-5555")).to.equal(false);
    });
    it("case 24", function(){
      expect(telephoneCheck("(555-555-5555")).to.equal(false);
    });
    it("case 25", function(){
      expect(telephoneCheck("(555)5(55?)-5555")).to.equal(false);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});