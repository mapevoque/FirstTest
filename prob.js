basesleep = require('./basefunc');
param = require('./params');
options = require('./option');
describe('Firsttest',  function() {
options.angularwait;

  it('eeeee', function() {  
    browser.get('https://yandex.by/');
	param.city1.click();
	param.search1.clear().sendKeys('Лондон');
	browser.wait(ExpectedConditions.visibilityOf(param.london), 9000).then(function(){param.london.click();});
	browser.wait(ExpectedConditions.visibilityOf(param.more_button), 9000).then(function(){param.more_button.click();});
	param.more_tabs.getText().then(function ress_london(ress){
		console.log("Результат по Лондону: " + ress);
	});
	param.city1.click();
	param.search1.clear().sendKeys('Париж ');
	browser.wait(ExpectedConditions.visibilityOf(param.paris), 9000).then(function(){param.paris.click();});
	browser.wait(ExpectedConditions.visibilityOf(param.more_button), 9000).then(function(){param.more_button.click(); basesleep.sleep(10000);});
	param.more_tabs1.getText().then(function ress_paris(ress1){
	console.log("---------------------------------------------------");
	console.log("Результат по Парижу: " + ress1);});
	expect(param.more_tabs.getText()).toEqual(param.more_tabs1.getText());
	
  });
});