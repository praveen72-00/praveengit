const {Builder,By,until,Key}=require ('selenium-webdriver');//to selenium aksing for the method to import

describe("03-02-2026 login",async function(){
    this.timeout(0);
    let driver;
   this.beforeEach(" test 3-02-2026 time: 7:35",async  function(){
    driver= await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
       } )

     this.afterEach("time: 7:35",async function (){
        await driver.quit();

     })

    it("3-02-2026 time: 12:35",async function(){
       await driver.get("https://www.w3schools.com/");
        console.log("the input is correct ");
        await driver.sleep(5000);
    })
    it("3-02-2026 time: 7:35",async function (){
        await driver.executeScript("window.open('https://www.amazon.in')");
        let tab=  await driver.getAllWindowHandles();
       await driver. switchTo().window(tab[1]);
      // await driver.manage().setTimeouts({implicati:10000});
        await driver.wait(until.elementLocated(By.id("twotabsearchtextbox"))).sendKeys("mobile",Key.RETURN);
        await driver.sleep(2000);

    })
})

//

//  === to run this--> npx mocha mocha.js

// const {By,Builder,Key,until}=require("selenium-webdriver");
// describe("this is a sample of random web site mocha test ",async function(){
//     this.timeout(0);
// let  driver;
// this.beforeEach("this code will work before each it block",async ()=>{
// driver=await new Builder().forBrowser('chrome').build();

// })
// this.afterEach('this will run after each block',async ()=>{
//     await driver.quit();
// })

// it("this is the test 1 for randome website ",async  ()=>{
//     await driver.get("https://www.zoho.com");
//     await driver.manage().window().fullscreen();
//       let zo=  await driver.wait(until.elementLocated(By.xpath("//button[@class='zgh-search-icon']")));
//       await zo.click();
//      let search = await driver.wait(
//         until.elementLocated(By.id("zgh-search-query"))
//     );
//     await driver.wait(until.elementIsVisible(search));//this check the search box is visible or not
//     await search.click();
// await search.sendKeys("work",Key.RETURN);
//     await driver.sleep(2000);
//    })

//  it("this is the amazon site",async ()=>{
//      await driver.get("https://www.amazon.in");

//     await driver.manage().window().fullscreen();
//         await driver.wait(until.elementLocated(By.id("twotabsearchtextbox"))).sendKeys("mobile",Key.RETURN);
//         await driver.sleep(2000);

// })
// })

// const {Builder,By,until,Key,}=require("selenium-webdriver");
// const assert=require("assert");
// const { log } = require("console");
// describe ("this for the assertion ",async ()=>{

//     it("some site test for assertion ",async ()=> {
//         let driver =await new Builder().forBrowser('chrome').build();
//         await driver.get("https://www.w3schools.com/");
//        const wt= await driver.getTitle()
//         assert.strictEqual(wt,'W3Schools Online Web Tutorials');
//         console.log("the assertion is correct");

//         await driver.quit();

//     })
// })

//================

// const { Builder, By, Key, until } = require("selenium-webdriver");
// const chrome=require('selenium-webdriver/chrome');
// describe("Testing The Automatio  Exercise Web Site ", function () {
//   /** @type {import('selenium-webdriver').WebDriver} */
//   let driver;
//   this.timeout(0);
//   beforeEach(
//     "this code run every time before the every it block ",
//     async function () {
//       let opt= new chrome.Options();
//        opt.addArguments('--start-maximized')
//       driver = await new Builder().forBrowser("chrome").setChromeOptions(opt).build();
//     }
//   );
  
//   it("this click the login&signup in the header  ", async function () {
//     await driver.get("https://automationexercise.com/");
//     await driver.findElement(By.partialLinkText("Signup / Login")).click();
//         await driver.findElement(By.name('name')).sendKeys("praveen",Key.TAB,'praveen1234@gmail.com');
//         await driver.findElement(By.xpath("//button[text()='Signup']")).click();
//       let pro= await driver.wait(until.elementLocated(By.partialLinkText("Products")));
//        await  driver.wait(until.elementIsVisible(pro))
//         await  pro.click();
//          let product=await driver.wait(until.elementLocated(By.xpath("(//a[contains(text(),'Add to cart')])[1]")),5000);
//          await driver.wait(until.elementIsVisible((product)));
//          await  product.click();




//   });

// });




