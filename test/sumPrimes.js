var sumPrimes = require("../sumPrimes");

var chai = require("chai");
var expect = chai.expect;

describe ("sumPrimes", function(){
    
    it("case 1", function(){
      expect(sumPrimes(10)).to.equal(17);
    });
    it("case 2", function(){
      expect(sumPrimes(30)).to.equal(129);
    });
    it("case 3", function(){
      expect(sumPrimes(71)).to.equal(639);
    });
    it("case 4", function(){
      expect(sumPrimes(50)).to.equal(328);
    });
    it("case 4", function(){
      expect(sumPrimes(72)).to.equal(639);
    });
    it("case 5", function(){
      expect(sumPrimes(977)).to.equal(73156);
    });
   
});
