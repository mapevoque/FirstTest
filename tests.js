var yandexHomepage = require('./YandexHomePage');
var geoPage = require('./YandexGeoPage');
var coreFunc = require('./coreFunc');
describe('Firsttest', function() {		
  it('eeeee', function() {  
    yandexHomepage.get();
	yandexHomepage.clickOnCity();
	geoPage.clearAndInputCity('Лондон');
	geoPage.selectLondon();	
	yandexHomepage.clickOnMore();
	const a = yandexHomepage.getMoreItemsText();
    yandexHomepage.clickOnCity();
	geoPage.clearAndInputCity('Париж ');
	geoPage.selectParis();
	yandexHomepage.clickOnMore();
	const b = yandexHomepage.getMoreItemsText();
	a.then((result) =>{
    b.then((result1) => {
expect(result).toEqual(result1)   
})   
})	
	
  });
});