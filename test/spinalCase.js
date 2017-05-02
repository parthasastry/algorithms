var spinalCase = require("../spinalCase");

var chai = require("chai");
var expect = chai.expect;

describe ("spinalCase", function(){
    
    it("case 1", function(){
      expect(spinalCase("This Is Spinal Tap")).to.equal("this-is-spinal-tap");
    });
    
    it("case 2", function(){
      expect(spinalCase("thisIsSpinalTap")).to.equal("this-is-spinal-tap");
    });
    
    it("case 3", function(){
      expect(spinalCase("The_Andy_Griffith_Show")).to.equal("the-andy-griffith-show");
    });
    
    it("case 4", function(){
      expect(spinalCase("Teletubbies say Eh-oh")).to.equal("teletubbies-say-eh-oh");
    });
    
    it("case 5", function(){
      expect(spinalCase("AllThe-small Things")).to.equal("all-the-small-things");
    })
    
});














