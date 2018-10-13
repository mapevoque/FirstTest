var yandexHomepage = require('./page');
var coreFunc = require('./coreFunc');
describe('Firsttest', function() {
coreFunc.angularwait;		
  it('eeeee', function() {  
    yandexHomepage.get();
	yandexHomepage.clickOnCity();
    yandexHomepage.clearField().yandexHomepage.inputCity('Лондон');
	//yandexHomepage
	yandexHomepage.waitLondon();
	yandexHomepage.selectLondon();	
	yandexHomepage.waitMoreButton();
	yandexHomepage.clickOnMore();
	yandexHomepage.getAndPrintLondonText();
    yandexHomepage.clickOnCity();
    yandexHomepage.clearField();
	yandexHomepage.inputCity('Париж');
	yandexHomepage.waitParis();
	yandexHomepage.selectParis();
	yandexHomepage.waitMoreButton();
	yandexHomepage.clickOnMore();
	yandexHomepage.getAndPrintParisText();
	expect(yandexHomepage.getLondonText()).toEqual(yandexHomepage.getParisText());	
  });
});