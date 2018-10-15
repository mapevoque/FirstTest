var coreFunc = require('./coreFunc');
var YandexHomepage = function() {
  city = element(by.className('geolink__reg'));
  more_button = element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher'));
  more_tabs = element.all(by.css(".home-tabs__more-item a"));
  var call;
 
  this.get = function() {
    browser.get('https://yandex.by/');
  };
  
  this.clickOnCity = function() {
    city.click();
  };
  
   this.clickOnMore = function() {
	coreFunc.wait(more_button);
    more_button.click();
  }; 
  
  this.getMoreItemsText = function() {
    call = more_tabs.getText();
	return call;
  };
 
};
module.exports = new YandexHomepage();