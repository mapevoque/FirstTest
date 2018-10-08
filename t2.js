
describe('TUTBY homepage todo list', function() {
browser.waitForAngularEnabled(false);
var search = element(by.id('reg_submit'));

beforeEach(function() {
browser.get('https://profile.tut.by/register.html');
});
  it('TimeFunc', function() {   
	browser.wait(function(search){
		browser.element(search);
}, 15000);
  });
});



