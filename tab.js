describe('Firsttest', function() {
browser.waitForAngularEnabled(false);
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}	
city1 = element(by.className('geolink__reg'));
search1 = element(by.className('input__control input__input'));
box = element(by.className('checkbox__control'));
london = element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom.popup_visibility_visible > div.popup__content > ul > li:nth-child(1)'));
paris = element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom > div > ul > li:nth-child(3)'));
	
more_button_classname = 'home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher';
more_button = element(by.className(more_button_classname));

more_tabs = element.all(by.css(".home-tabs__more-item a"));
more_tabs1 = element.all(by.css(".home-tabs__more-item a"));
	
  it('eeeee', function() {  
    browser.get('https://yandex.by/');
	city1.click();
	search1.clear().sendKeys('Лондон');
	browser.wait(ExpectedConditions.visibilityOf(london), 9000).then(function(){london.click();});
	browser.wait(ExpectedConditions.visibilityOf(more_button), 9000).then(function(){more_button.click();});
	more_tabs.getText().then(function ress_london(ress){
		console.log("Результат по Лондону: " + ress);
	});
	city1.click();
	search1.clear().sendKeys('Париж ');
	browser.wait(ExpectedConditions.visibilityOf(paris), 9000).then(function(){paris.click();});
	browser.wait(ExpectedConditions.visibilityOf(more_button), 9000).then(function(){more_button.click();});
	more_tabs1.getText().then(function ress_paris(ress1){
	console.log("---------------------------------------------------");
	console.log("Результат по Парижу: " + ress1);});
	expect(more_tabs.getText()).toEqual(more_tabs1.getText());	
  });
});