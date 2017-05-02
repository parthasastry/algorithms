var diffArr = require("../diffArr");

var chai = require("chai");
var expect = chai.expect;

describe ("diffArr", function(){
    
    it("case 1", function(){
      expect(diffArr(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).to.eql(["pink wool"]);
    });
    
    it("case 2", function(){
      expect(diffArr(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).to.eql(["pink wool", "diorite"]);
    });
  
    it("case 3", function(){
      expect(diffArr(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).to.eql([]);
    });
    
    it("case 4", function(){
      expect(diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.eql([4]);
    });
    
    it("case 5", function(){
      expect(diffArr([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).to.eql(["piglet", 4]);
    });
    
    it("case 6", function(){
      expect(diffArr([], ["snuffleupagus", "cookie monster", "elmo"])).to.eql(["snuffleupagus", "cookie monster", "elmo"]);
    });
    
     it("case 7", function(){
      expect(diffArr([1, "calf", 3, "piglet"], [7, "filly"])).to.eql([1, "calf", 3, "piglet", 7, "filly"]);
    });
    
});