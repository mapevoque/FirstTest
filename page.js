var coreFunc = require('./coreFunc');
var YandexHomepage = function() {
  city = element(by.className('geolink__reg'));
  more_button = element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher'));
  more_tabs = element.all(by.css(".home-tabs__more-item a"));
  more_tabs1 = element.all(by.css(".home-tabs__more-item a"));
  var londonText = [];
  var parisText = [];
  
  this.get = function() {
    browser.get('https://yandex.by/');
  };
  
  this.clickOnCity = function() {
    city.click();
  };  

  this.waitMoreButton = function() {
	  coreFunc.wait(more_button);
  };
  
   this.clickOnMore = function() {
    more_button.click();
  };

  this.getAndPrintLondonText = function() {
   more_tabs.getText();
  };  
  
  this.getAndPrintParisText = function() {
    more_tabs1.getText();
	
  };

  this.getLondonText = function(){
	  return more_tabs.getText();
  };

  this.getParisText = function(){
	  return more_tabs1.getText();
  };  
};
module.exports = new YandexHomepage();