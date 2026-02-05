const {Builder,By,until,Key}=require ('selenium-webdriver');//to selenium aksing for the method to import

describe("03-02-2026 login",async function(){
    this.timeout(0);
    let driver;
   this.beforeEach(" test 4-02-2026 time: 7:35",async  function(){
    driver= await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
       } )

     this.afterEach("time: 7:35",async function (){
        await driver.quit();

     })

    it("4-02-2026 time: 12:35",async function(){
       await driver.get("https://www.w3schools.com/");
        console.log("the input is correct ");
        await driver.sleep(5000);
    })
    it("4-02-2026 time: 7:35",async function (){
        await driver.executeScript("window.open('https://www.amazon.in')");
        let tab=  await driver.getAllWindowHandles();
       await driver. switchTo().window(tab[1]);
      // await driver.manage().setTimeouts({implicati:10000});
        await driver.wait(until.elementLocated(By.id("twotabsearchtextbox"))).sendKeys("mobile",Key.RETURN);
        await driver.sleep(2000);

    })
})
