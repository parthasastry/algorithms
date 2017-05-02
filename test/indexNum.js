var indexNum = require("../indexNum");

var chai = require("chai");
var expect = chai.expect;

describe ("indexNum", function(){
    
    it("case 1", function(){
      expect(indexNum([10, 20, 30, 40, 50], 35)).to.equal(3);
    });
    it("case 2", function(){
      expect(indexNum([10, 20, 30, 40, 50], 30)).to.equal(2);
    });
    it("case 3", function(){
      expect(indexNum([40, 60], 50)).to.equal(1);
    });
    it("case 4", function(){
      expect(indexNum([3, 10, 5], 3)).to.equal(0);
    });
    it("case 5", function(){
      expect(indexNum([5, 3, 20, 3], 5)).to.equal(2);
    });
    it("case 6", function(){
      expect(indexNum([2, 20, 10], 19)).to.equal(2);
    });
    it("case 7", function(){
      expect(indexNum([2, 5, 10], 15)).to.equal(3);
    });
});