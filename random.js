// const{Builder,By,until,}=require("selenium-webdriver");

// async function test(){
//     let driver=new Builder().forBrowser('chrome').build();
//   //  await driver.manage().setTimeouts({implicit:10000})
// await driver.get("https://automationexercise.com/login");
// let first=await driver.getWindowHandle('first')
// await driver.switchTo().newWindow('tab')
// await driver.get("https://automationexercise.com/login");
// let second=await driver.getWindowHandle()
// await driver.switchTo().window(first);
// await driver.sleep(3000);
// await driver.switchTo().window(second)
// //await driver.close()
// await driver.getAllWindowHandles()

// }test()



const{Builder,By,until,}=require("selenium-webdriver");
const{Select}=require("selenium-webdriver/lib/select")
const chrome=require('selenium-webdriver/chrome')
async function test(){
    let option=new chrome.Options()
    option.addArguments("--start-maximized");
    let driver=new Builder().forBrowser('chrome').setChromeOptions(option).build();
await driver.get("https://automationexercise.com/products");
let title=await driver.getTitle();
console.log(title)

await driver.wait(until.titleContains(title));
let move=await driver.findElement(By.xpath("//*[@id='header']/div/div/div/div[2]/div/ul/li[3]/a"))
await driver.actions({async:true}).move({origin:move}).click().perform();


}test()