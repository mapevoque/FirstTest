module.exports = {
sleep : function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);},	
angularwait : browser.waitForAngularEnabled(false)		
};