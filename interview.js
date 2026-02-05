
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const details =require('../learn_javascript/loginData.json');
const fs=require("fs");
async function interview(test) {

  let options = new chrome.Options();

  options.setUserPreferences({
   // "credentials_enable_service": false, // it stop the chrome to save the login credentials 
     "profile.password_manager_enabled": false // it turn off the password manager like is weak or already using 
  });

  options.addArguments(
   //  "--disable-save-password-bubble", //disable the save pop up apper in after login
 //   "--disable-infobars", //disable the chrome is automated bar in the chrome 
  //   "--disable-notifications", // this disable the notification 
    "--incognito", //open the incognito mode or tab 
 //   "--start-maximized" // maximized the window 
  );

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await driver.wait(until.elementLocated(By.name("username")), 10000);
  await driver.findElement(By.name("username")).sendKeys(test.login[0].username);
  await driver.findElement(By.name("password")).sendKeys(test.login[0].password);
  let screen=await driver.takeScreenshot();
  fs.writeFileSync('interview.png',screen,"base64");
 
  await driver.sleep(2000)
  await driver.findElement(By.css("button[type='submit']")).click();

  await driver.sleep(3000);
await driver.wait(until.elementLocated(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")),5000);

  
  await driver.findElement(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")).sendKeys("");
 await driver.findElement(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input")).sendKeys("");
 await driver.sleep(3000);

await driver.findElement(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")).click();
 await driver.findElement(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")).sendKeys(test.login[1].username);
 await driver.findElement(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input")).sendKeys(test.login[1].password);
 await driver.sleep(2000);
 await driver.findElement(By.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")).click();
let shot=await driver.takeScreenshot();
fs.writeFileSync('dashboard.png',shot,'base64');

 let das=await driver.wait(until.elementLocated(By.xpath("//p[text()='manda user']")));
 await driver.wait(until.elementIsVisible(das)).click();
 let log=await driver.wait(until.elementLocated(By.xpath("//a[text()='Logout']")));
await driver.wait(until.elementIsVisible(log)).click()


}

interview(details);

//this is a pull in git hub 
console.log("hello this is a pull request from the git to vs code ")


// const{Builder,By,Key,until}=require("selenium-webdriver");
// async function inerview(){
// let driver=await new Builder().forBrowser('chrome').build();

// await driver.get("https://demoqa.com/automation-practice-form");
// await driver.findElement(By.id("firstName")).sendKeys("praveen");
// await driver.findElement(By.id("lastName")).sendKeys("praveen");
// await driver.findElement(By.id("userEmail")).sendKeys("praveen123@gmail.com");
// let gender=await driver.findElement(By.xpath('//*[@id="genterWrapper"]/div[2]/div[1]/label'));
// await gender.click();

// await driver.findElement(By.id("userNumber")).sendKeys("1234567890");
// await driver.findElement(By.xpath("//*[@id='dateOfBirthInput']")).click();

// await driver.findElement(By.xpath("//*[@id='dateOfBirthInput']")).clear();

// await driver.findElement(By.xpath("//*[@id='dateOfBirthInput']")).sendKeys("19 dec 2025");
// await driver.findElement(By.id("lastName")).click();

// await driver.findElement(By.xpath("//*[@id='submit']")).click()


// }inerview();


