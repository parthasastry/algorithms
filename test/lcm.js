var lcm = require("../lcm");

var chai = require("chai");
var expect = chai.expect;

describe ("lcm", function(){
    
    it("case 1", function(){
      expect(lcm([1, 5])).to.equal(60);
    });
    it("case 2", function(){
      expect(lcm([5, 1])).to.equal(60);
    });
    it("case 3", function(){
      expect(lcm([1, 13])).to.equal(360360);
    });
    it("case 4", function(){
      expect(lcm([23, 18])).to.equal(6056820);
    });
   
});
