const{Builder,By,until,Key}=require("selenium-webdriver");
const chrome=require("selenium-webdriver/chrome");
async function chrome_optios(){
let options = new chrome.Options();
options.excludeSwitches(["enable-automation"]);//this disable the the browser is automated infobar 

options.setUserPreferences({
//"Credentials-enable_service":false,
//"profile.password_manager_enabled":false
})

options.addArguments(
   // "--start-maximized",
   // "--disable-infobars",
    //'--disable-notifications',
    //'--incognito',
   //'--disable-save-password-bubble',
)
let driver=await new Builder().forBrowser("chrome").setChromeOptions(options).build();
await driver.get("https://www.saucedemo.com/");
await driver.findElement(By.id("user-name")).sendKeys("standard_user",Key.TAB,"secret_sauce");
await driver.findElement(By.xpath("//*[@id='login-button']")).click();

}chrome_optios();