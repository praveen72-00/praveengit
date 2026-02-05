// const { Builder, By, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");

// async function date() {
//   let driver = await new Builder()
//     .forBrowser("chrome")
//     .setChromeOptions(new chrome.Options().addArguments("--start-maximized"))
//     .build();

//   await driver.get("https://demoqa.com/automation-practice-form");
//   await driver.executeScript("window.scrollBy(0,300)");

//   // Open date picker
//   let dob = await driver.findElement(By.id("dateOfBirthInput"));
//   await dob.click();

//   // Select year
//   await driver.findElement(By.className("react-datepicker__year-select"))
//     .sendKeys("2004");

//   // Select month
//   await driver.findElement(By.css(".react-datepicker__month-select"))
//     .sendKeys("October");

//   // Select day
//   await driver.findElement(By.css(".react-datepicker__day--010")).click();

//   await driver.findElement(By.xpath("//label[text()='Male']")).click()
//   await driver.findElement(By.id("uploadPicture")).sendKeys("/Users/praveen/Downloads/praveen.jpeg")
// }


// date();


const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
async function date() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().addArguments("--start-maximized"))
    .build();
await driver.get("https://demoqa.com/menu");
await driver.executeScript('window.scrollBy(0,200)');
let hov1=await driver.wait(until.elementLocated(By.xpath("//a[text()='Main Item 2']")),2000);
await driver.actions({async:true}).move({origin:hov1}).perform();
let hov2=await driver.wait(until.elementLocated(By.xpath("//a[text()='SUB SUB LIST »']")),3000);
await driver.actions({async:true}).move({origin:hov2}).perform();




}date()
