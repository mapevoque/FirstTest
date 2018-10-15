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
	const a = yandexHomepage.getAndPrintLondonText();
    yandexHomepage.clickOnCity();
	geoPage.clearAndInputCity('Париж ');
	geoPage.waitParis();
	geoPage.selectParis();
	yandexHomepage.waitMoreButton();
	yandexHomepage.clickOnMore();
	const b = yandexHomepage.getAndPrintParisText();
	//Promise.all([a,b]).then(([res1,res2]) => {
	//expect(res1).toEqual(res2);
	//})
	a.then((result) =>{
    b.then((result1) => {
expect(result).toEqual(result1)   
})   
})	
	
  });
});