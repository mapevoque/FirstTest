module.exports = {
	city1: element(by.className('geolink__reg')),
	search1: element(by.className('input__control input__input')),
	london : element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom.popup_visibility_visible > div.popup__content > ul > li:nth-child(1)')),
	paris : element(by.css('body > div.popup.popup_animate_no.popup_theme_ffffff.popup_autoclosable_yes.popup_adaptive_yes.input__popup.input__popup_type_geo.input__popup_fade_yes.i-bem.popup_js_inited.popup_to_bottom > div > ul > li:nth-child(3)')),	
	more_button : element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher')),
	more_tabs : element.all(by.css(".home-tabs__more-item a")),
	more_tabs1 : element.all(by.css(".home-tabs__more-item a"))
};