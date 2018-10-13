var coreFunc = require('./coreFunc');
var YandexHomepage = function() {
  var nameInput = element(by.model('yourName'));
  var greeting = element(by.binding('yourName'));
  city = element(by.className('geolink__reg'));
  search = element(by.className('input__control input__input'));
  london = element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom.popup_visibility_visible > div.popup__content > ul > li:nth-child(1)'));
  paris = element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom > div > ul > li:nth-child(3)'));
  more_button = element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher'));
  more_tabs = element.all(by.css(".home-tabs__more-item a"));
  more_tabs1 = element.all(by.css(".home-tabs__more-item a"));

  this.get = function() {
    browser.get('https://yandex.by/');
  };
  
  this.clickOnCity = function() {
    city.click();
  };
  
  this.clearField = function(name) {
    search.clear();
  };
  
  this.inputCity = function(name) {
    search.sendKeys(name);
  };
  
  this.waitLondon = function() {
    browser.wait(ExpectedConditions.visibilityOf(london), 9000);
  };

  this.selectLondon = function() {
    london.click();
  };

  this.waitMoreButton = function() {
    browser.wait(ExpectedConditions.visibilityOf(more_button), 9000);
  };
  
   this.clickOnMore = function() {
    more_button.click();
  };

  this.getAndPrintLondonText = function() {
    return more_tabs.getText().then(function ress_london(ress){
		console.log("Результат по Лондону: " + ress);
	});;
  };
  
  this.waitParis = function() {
    browser.wait(ExpectedConditions.visibilityOf(paris), 9000);
  };
  this.selectParis = function() {
    paris.click();
  };
  
  this.getAndPrintParisText = function() {
    return more_tabs1.getText().then(function ress_paris(ress1){
	console.log("---------------------------------------------------");
	console.log("Результат по Парижу: " + ress1);});
  };

  this.getLondonText = function(){
	  return more_tabs.getText();
  };

  this.getParisText = function(){
	  return more_tabs1.getText();
  };  
};
module.exports = new YandexHomepage();