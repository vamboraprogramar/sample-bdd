module.exports = function () {
    this.Given(/^I access Google page$/, function(){
        return helpers.loadPage('http://www.google.com.br');
    });

    this.When(/^I search Google for "([^"]*)"$/, function (arg1, done) {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(by.name('q')).sendKeys('teste');
        driver.sleep(3000);
        driver.findElement(by.className('lsb')).click();
        done();
    });
    
    this.Then(/^I should see product detail with title "([^"]*)"$/, function (expectedTitle) {
        
        console.log(expectedTitle);
        return driver.getTitle().then(function(title){
            expect(title).to.equal(expectedTitle);
        });    
    });
};