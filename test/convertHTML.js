var convertHTML = require("../convertHTML");

var chai = require("chai");
var expect = chai.expect;

describe ("convertHTML", function(){
    
    it("case 1", function(){
      expect(convertHTML("Dolce & Gabbana")).to.equal("Dolce &amp; Gabbana");
    });
    
    it("case 2", function(){
      expect(convertHTML("Hamburgers < Pizza < Tacos")).to.equal("Hamburgers &lt; Pizza &lt; Tacos");
    });
    
    it("case 3", function(){
      expect(convertHTML("Sixty > twelve")).to.equal("Sixty &gt; twelve");
    });
    
    it("case 4", function(){
      expect(convertHTML('Stuff in "quotation marks"')).to.equal("Stuff in &quot;quotation marks&quot;");
    });
    
    it("case 5", function(){
      expect(convertHTML("Shindler's List")).to.equal("Shindler&apos;s List");
    });
    
    it("case 6", function(){
      expect(convertHTML("<>")).to.equal("&lt;&gt;");
    });
    
    it("case 7", function(){
      expect(convertHTML("abc")).to.equal("abc");
    });
    
});














