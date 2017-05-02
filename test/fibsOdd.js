var fibsOdd = require("../fibsOdd");

var chai = require("chai");
var expect = chai.expect;

describe ("fibsOdd", function(){
    
    it("case 1", function(){
      expect(fibsOdd(1000)).to.equal(1785);
    });
    it("case 2", function(){
      expect(fibsOdd(4000000)).to.equal(4613732);
    });
    it("case 3", function(){
      expect(fibsOdd(4)).to.equal(5);
    });
    it("case 4", function(){
      expect(fibsOdd(75024)).to.equal(60696);
    });
    it("case 5", function(){
      expect(fibsOdd(75025)).to.equal(135721);
    })
   
});














