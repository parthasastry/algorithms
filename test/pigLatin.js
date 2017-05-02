var pigLatin = require("../pigLatin");

var chai = require("chai");
var expect = chai.expect;

describe ("pigLatin", function(){
    
    it("case 1", function(){
      expect(pigLatin("california")).to.equal("aliforniacay");
    });
    
    it("case 2", function(){
      expect(pigLatin("paragraphs")).to.equal("aragraphspay");
    });
    
    it("case 3", function(){
      expect(pigLatin("glove")).to.equal("oveglay");
    });
    
    it("case 4", function(){
      expect(pigLatin("algorithm")).to.equal("algorithmway");
    });
    
     it("case 5", function(){
      expect(pigLatin("eight")).to.equal("eightway");
    });
});














