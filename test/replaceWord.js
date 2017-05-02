var replaceWord = require("../replaceWord");

var chai = require("chai");
var expect = chai.expect;

describe ("replaceWord", function(){
    
    it("case 1", function(){
      expect(replaceWord("Let us go to the store", "store", "mall")).to.eql("Let us go to the mall");
    });
    
    it("case 2", function(){
      expect(replaceWord("He is Sleeping on the couch", "Sleeping", "sitting")).to.eql("He is Sitting on the couch");
    });
    
    it("case 3", function(){
      expect(replaceWord("This has a spellngi error", "spellngi", "spelling")).to.eql("This has a spelling error");
    });
    
    it("case 4", function(){
      expect(replaceWord("His name is Tom", "Tom", "john")).to.eql("His name is John");
    });
    
    it("case 5", function(){
      expect(replaceWord("Let us get back to more Coding", "Coding", "algorithms")).to.eql("Let us get back to more Algorithms");
    });
   
});














