var caesarCipher = require("../caesarCipher");

var chai = require("chai");
var expect = chai.expect;

describe ("caesarCipher", function(){
    
    it("case 1", function(){
      expect(caesarCipher("SERR PBQR PNZC")).to.equal("FREE CODE CAMP");
    });
    it("case 2", function(){
      expect(caesarCipher("SERR CVMMN!")).to.equal("FREE PIZZA!");
    });
    it("case 3", function(){
      expect(caesarCipher("SERR YBIR?")).to.equal("FREE LOVE?");
    });
    it("case 4", function(){
      expect(caesarCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).to.equal("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
    });
});