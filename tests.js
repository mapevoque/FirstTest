var yandexHomepage = require('./page');
var geoPage = require('./page2');
var coreFunc = require('./coreFunc');
describe('Firsttest', function() {		
  it('eeeee', function() {  
    yandexHomepage.get();
	yandexHomepage.clickOnCity();
	geoPage.clearAndInputCity('Лондон');
	geoPage.waitLondon();
	geoPage.selectLondon();	
	yandexHomepage.waitMoreButton();
	yandexHomepage.clickOnMore();
	yandexHomepage.getAndPrintLondonText().then(function(kikk){
		console.log('HHHH ' + kikk);
	});
    yandexHomepage.clickOnCity();
	geoPage.clearAndInputCity('Париж ');
	geoPage.waitParis();
	geoPage.selectParis();
	yandexHomepage.waitMoreButton();
	yandexHomepage.clickOnMore();
	yandexHomepage.getAndPrintParisText();
	expect(yandexHomepage.londonText).toEqual(yandexHomepage.getParisText());	
  });
});