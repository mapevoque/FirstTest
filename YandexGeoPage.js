var coreFunc = require('./coreFunc');
var geoPage = function() {
  search = element(by.className('input__control input__input'));
  london = element(by.css('div.popup__content > ul > li:nth-child(1)'));
  paris = element(by.css('div > ul > li:nth-child(5)'));
  
  this.clearField = function(name) {
    search.clear();
  };
  
  this.clearAndInputCity = function(name) {
    search.clear().sendKeys(name);
  };

  this.selectLondon = function() {
	coreFunc.wait(london);  
    london.click();
  };
  
  this.selectParis = function() {
	coreFunc.wait(paris);  
    paris.click();
  };  
  
};
module.exports = new geoPage();