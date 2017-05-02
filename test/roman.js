var roman = require("../roman");

var chai = require("chai");
var expect = chai.expect;

describe ("roman", function(){
    
    it("case 1", function(){
      expect(roman(2)).to.equal("II");
    });
    
    it("case 3", function(){
      expect(roman(3)).to.equal("III");
    });
    
    it("case 4", function(){
      expect(roman(4)).to.equal("IV");
    });
    
    it("case 5", function(){
      expect(roman(5)).to.equal("V");
    });
    
     it("case 6", function(){
      expect(roman(9)).to.equal("IX");
    });
    
    it("case 7", function(){
      expect(roman(12)).to.equal("XII");
    });
    
    it("case 8", function(){
      expect(roman(16)).to.equal("XVI");
    });
    
    it("case 9", function(){
      expect(roman(29)).to.equal("XXIX");
    });
    
    it("case 10", function(){
      expect(roman(44)).to.equal("XLIV");
    });
   
   it("case 11", function(){
      expect(roman(45)).to.equal("XLV");
    });
    
    it("case 12", function(){
      expect(roman(68)).to.equal("LXVIII");
    });
    
    it("case 13", function(){
      expect(roman(83)).to.equal("LXXXIII");
    });
    
    it("case 14", function(){
      expect(roman(97)).to.equal("XCVII");
    });
    
    it("case 15", function(){
      expect(roman(99)).to.equal("XCIX");
    });
    
    it("case 16", function(){
      expect(roman(500)).to.equal("D");
    });
    
    it("case 17", function(){
      expect(roman(501)).to.equal("DI");
    });
    
    it("case 18", function(){
      expect(roman(649)).to.equal("DCXLIX");
    });
    
    it("case 18", function(){
      expect(roman(798)).to.equal("DCCXCVIII");
    });
    
    it("case 19", function(){
      expect(roman(891)).to.equal("DCCCXCI");
    });
    
     it("case 20", function(){
      expect(roman(1000)).to.equal("M");
    });
    
    it("case 21", function(){
      expect(roman(1004)).to.equal("MIV");
    });
    
    it("case 22", function(){
      expect(roman(1006)).to.equal("MVI");
    });
    
    it("case 23", function(){
      expect(roman(1023)).to.equal("MXXIII");
    });
    
    it("case 24", function(){
      expect(roman(2014)).to.equal("MMXIV");
    });
    
    it("case 25", function(){
      expect(roman(3999)).to.equal("MMMCMXCIX");
    });
    
    
});














