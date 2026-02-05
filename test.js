const {Builder,By,until,Key}=require ('selenium-webdriver');//to selenium aksing for the method to import 


describe("login",async function(){
    this.timeout(0);
    
    let driver;       
   this.beforeEach("should open every time for a test ",async  function(){
    driver= await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
       } )

     this.afterEach("should close the every test after completed ",async function (){
        await driver.quit();

     })


    it("if user name  is succesfull ",async function(){
       await driver.get("https://www.w3schools.com/");
        console.log("the input is correct ");
        await driver.sleep(5000);
    })
    it("open the amazon in new page ",async function (){
        await driver.get("https://www.amazon.in.");
        await driver.findElement(By.name("q")).click();
        await driver.sleep(2000);

    })
})





// 

//  === to run this--> npx mocha test.js

