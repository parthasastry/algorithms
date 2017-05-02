var destroyer = require("../destroyer");

var chai = require("chai");
var expect = chai.expect;

describe ("destroyer", function(){
    
    it("case 1", function(){
      expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).to.eql([1, 1]);
    });
    it("case 2", function(){
      expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).to.eql([1, 5, 1]);
    });
    it("case 3", function(){
      expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.eql([1]);
    });
    it("case 4", function(){
      expect(destroyer([2, 3, 2, 3], 2, 3)).to.eql([]);
    });
    it("case 5", function(){
      expect(destroyer(["tree", "hamburger", 53], "tree", 53)).to.eql(["hamburger"]);
    });
});