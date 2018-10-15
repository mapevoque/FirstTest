module.exports = {
sleep : function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);},	
angularwait : browser.waitForAngularEnabled(false),
wait : function waitingElement(Element){
	return browser.wait(ExpectedConditions.visibilityOf(Element), 9000);
}		
};