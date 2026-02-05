// const{Builder,By,until,Key}=require("selenium-webdriver");
// const {Select} =require("selenium-webdriver/lib/select")
// async function fram(){
//    let driver = await new Builder().forBrowser("chrome").build();
//    await driver.get("https://testautomationpractice.blogspot.com/");


// await driver.findElement(By.id("start-date")).sendKeys("02/02/2003");

// let animal=await driver.findElement(By.id("animals"));
// let sort = new Select(animal);
// await sort.selectByValue("elephant");
// await driver.findElement(By.xpath("//label[text()='Monday']")).click()
// let contry=await driver.findElement(By.id("country"));
// let drop= new Select (contry);
// await drop.selectByValue("india")
// await driver.findElement(By.xpath("//a[text()='2']")).click()
// }fram()

// const { Builder, By, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");

// async function handleNyTimesConsent() {
//   let options = new chrome.Options();
//   options.addArguments();
  
//   let driver = await new Builder()
//     .forBrowser("chrome")
//     .setChromeOptions(options)
//     .build();
// await driver.get("https://www.amazon.co.uk/")
// await driver.sleep(2000);
// await driver.wait(until.elementLocated(By.xpath("//input[contains(@data-action-type,'DISMISS')]")),3000).click();

//  await driver.wait(until.elementLocated(By.id("sp-cc-rejectall-link")),3000).click();


// }

// handleNyTimesConsent();

const{Builder,By,Key,until}=require("selenium-webdriver");
const chrome=require("selenium-webdriver/chrome");
async function some(){
  let option = new chrome.Options();
  await option.addArguments('--start-maximized')
let driver= await new Builder().forBrowser('chrome').setChromeOptions(option).build();
await driver.manage().window().maximize()
await driver.get("https://testautomationpractice.blogspot.com/");
await driver.sleep(4000);
await driver.findElement(By.id("alertBtn")).click()
let alert=await driver.switchTo().alert();
await alert.accept();
await driver.findElement(By.id("promptBtn")).click();
let prompt=await driver.switchTo().alert();
await prompt.sendKeys("praveen 😭");
await driver.sleep(2000);
await prompt.accept();
await driver.findElement(By.id("PopUp")).click();
let handles =await driver.getAllWindowHandles();
await driver.switchTo().window(handles[0]);
await driver.sleep(2000);

await driver.executeScript("window.scrollTo(0,400)");
let drag=await driver.findElement(By.id("draggable"));
let drop=await driver.findElement(By.id("droppable"));
await driver.actions().dragAndDrop(drag,drop).perform();
let box=await driver.findElement(By.id("comboBox")).click();
let item=await driver.wait(until.elementLocated(By.xpath("//div[text()='Item 15']")));

await driver.executeScript("arguments[0].scrollIntoView(true)",item);
await item.click();

await driver.findElement(By.id("apple")).click();
await driver.sleep(2000);
await driver.navigate().back();



}
some()
