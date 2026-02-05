
//=======================================================================. selenium assertion 


// const {Builder,By,until,Key}= require('selenium-webdriver');
// const assert=require("assert");

// async function pra() {

//   let driver= await new Builder().forBrowser('chrome').build();
// try{
  
//   await driver.get('https://www.amazon.in') ;

//   let search = await driver.wait(until.elementLocated(By.id('twotabsearchtextbox')),3000);
//   await search.sendKeys('laptop',Key.RETURN);
// let text= await driver.wait(until.elementLocated(By.xpath("//span[text()='Popular Shopping Ideas']"))).getText()

// assert.strictEqual(text,"Popular Shopping Ideas");
//   await driver.sleep(5000);
// }

// finally
// {
// await driver.quit();
// }}
// pra();



//=======================================================> amazon

// const { Builder, By, Key, until } = require('selenium-webdriver');

// (async () => {
//   // 1. Open Chrome
//   let driver = await new Builder().forBrowser('chrome').build();

//   try {
//     // 2. Go to Amazon
//     await driver.get('https://www.amazon.in/');

//     // 3. Wait for search bar
//     const searchBox = await driver.wait(
//       until.elementLocated(By.id('twotabsearchtextbox')),
//       10000
//     );

//     // 4. Type product name (change this to anything you want!)
//     await searchBox.sendKeys('laptop', Key.RETURN);

//     // 5. Wait for results to load
//     await driver.wait(
//       until.elementLocated(By.css('div.s-main-slot div[data-asin]')),
//       10000
//     );

//     // 6. Find the first product and click it
//     const firstProduct = await driver.findElement(
//       By.xpath('//*[@id="05a089b6-4a11-4f2e-af36-de3f7cd863b3"]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]/a/h2')
//     );
//     await firstProduct.click();

//     // 7. Wait for product page to load
//     // await driver.wait(
//     //   until.elementLocated(By.id('productTitle')),
//     //   10000
//     // );

//    // console.log('Opened product page!');
//    await driver.sleep(5000);
//   } catch (e) {
//     console.log('Error:', e);
//   }
//   finally{
//     await driver.quit()
//   }
// })();





//===============================================================================> old switch to new tab or window  


/*
const {Builder,By,until,Key}=require ('selenium-webdriver');
async function w3school() {
  let driver = await new Builder().forBrowser('chrome').build();

   await driver.manage().window().maximize();
  await driver.get('https://www.w3schools.com/');
  await driver.sleep(2000)
await driver.findElement(By.xpath("//a[text()='JAVASCRIPT']")).click();
//await store.sendKeys('student');
//await driver.sleep(2000)
await driver.findElement(By.xpath("//a[text()='JS Operators']")).click();
//await driver.findElement(By.id('submit')).click();
//await driver.sleep(2000);
await driver.navigate().back();
//await driver.sleep(2000);
await driver.executeScript("window.open('https://www.flipkart.com', '_blank')");//for open in new window 
        let tabs = await driver.getAllWindowHandles();

        await driver.switchTo().window(tabs[1]);


       let laptop= await driver.findElement(By.name('q'))
        await laptop.sendKeys('laptop ',Key.RETURN);
       // await driver;

await driver.sleep(2000)

await driver.switchTo().window(tabs[0]);
await driver.sleep(2000)
await driver.get('https://www.amazon.in');
await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('toys',Key.RETURN);

await driver.sleep(2000);

await driver.quit();
  
}

w3school()

*/




//=====================================================> implicit wait for all elements in the code it will apply

// const { Builder, By, Key } = require('selenium-webdriver');

// (async function googleSearch() {
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         // Set implicit wait: 10 seconds
//         await driver.manage().setTimeouts({ implicit: 20000 });

//         await driver.get('https://www.google.com');

//         // Accept cookies if present
//         try {
//             let acceptBtn = await driver.findElement(By.id('L2AGLb'));
//             await acceptBtn.click();
//         } catch (err) {
//             // ignore if not present
//         }

//         // Find search box (implicit wait will handle delay)
//         let searchBox = await driver.findElement(By.name('q'));
//         await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

//         // Find search results (implicit wait applies here too)
//         let results = await driver.findElements(By.css('h3'));

//         console.log('Top 5 Google Search Results:');
//         for (let i = 0; i < Math.min(results.length, 5); i++) {
//             let title = await results[i].getText();
//             console.log(`${i + 1}: ${title}`);
//         }

//     } finally {
//         await driver.quit();
//     }
// })();

////===============================================> screen shot 

// const { Builder, By, Key, until } = require('selenium-webdriver');
// const fs = require('fs');

// (async function loginTest() {
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         // Implicit wait
//        // await driver.manage().setTimeouts({ implicit: 10000 });

//         // Open the login page
//         await driver.get('https://the-internet.herokuapp.com/login');

//         // Enter username
//         let username = await driver.findElement(By.id('username'));
//         await username.sendKeys('tomsmith');

//         // Enter password
//         let password = await driver.findElement(By.id('password'));
//         await password.sendKeys('SuperSecretPassword!');

//         // Click login
//         let loginBtn = await driver.findElement(By.css('button.radius'));
//         await loginBtn.click();

//         // Wait for success message
//        await driver.findElement(By.id('content'));
//          //if (message.includes('You logged into a secure area!')) {
//            // console.log('Login Successful ');
//          //} //else {
//              console.log('Login pass ss');
//      //   }
// await driver .sleep(2000);
//         // Take screenshot
//       //  let screenshot = await driver.takeScreenshot();
//        // fs.writeFileSync('login_result.png', screenshot, 'base64');

//     } finally {
//          await driver.quit();
//     }
// })();


//============================================= >xpath contains 

// const {Builder,By,until,Key, error}=require("selenium-webdriver");

// async function praveen (){
//     let driver = await new Builder().forBrowser("chrome").build();
//     try {
//         await driver.get("https://www.limeroad.com/");

//         // Click gender (Men/Women)
//         let gender = await driver.findElement(By.xpath("//p[contains(@class,'m0') and text()='Men']"));
//         await gender.click();
//         //await driver.sleep(3000)

//         // Hover over profile icon/text
//         let hover = await driver.findElement(By.id("desktop_profile"));
//         await driver.actions({async:true}).move({origin:hover}).perform();  // mouse hover 

//         // Wait for login button to appear
//         let loginBtn = await driver.wait(until.elementLocated(By.xpath("//span[text()='Login']")));

//         // Wait for login button to be visible
//         await driver.wait(until.elementIsVisible(loginBtn));

//         // Click the login button
//         await loginBtn.click();  // <-- must include parentheses
//       //  await driver.sleep(2000)
// let num=await driver.wait(until.elementLocated(By.id("emph")))
// await driver.wait(until.elementIsVisible(num)).sendKeys("123456789341");
//      //   await driver.actions({async:true}).clear();
//         //await driver.sleep(3000);
//        await driver.navigate().back();
//        const original= await driver.getWindowHandle()


//     await driver.switchTo().newWindow('tab');
//     await driver.get("https://practicetestautomation.com/practice-test-login/");
//     await driver.findElement(By.id("username")).sendKeys("student");
//     await driver.findElement(By.name("password")).sendKeys("Password123");
//     await driver.findElement(By.css(".btn")).click();


//     await driver.switchTo().window(original);
//     await driver.findElement(By.id("Man")).click();
//  let dress =await driver.wait(until.elementLocated(By.id("693abc6f9e95be1c6f456968")));
//  await driver.wait(until.elementIsVisible(dress)).click();
//         await driver.sleep(4000);
//     } 
//     catch(error){
// console.log('some error');
//     }
    
//     finally {
//         await driver.quit();
//     }
// }

// praveen();
//===================================================-----> w3 school site 
/*
const{Builder,By,until,Key}=require("selenium-webdriver");
async function w3(){
const driver=await new Builder().forBrowser("chrome").build();
try{
await driver.get("https://www.w3schools.com/");
await driver.findElement(By.xpath("//a[text()='JAVASCRIPT']")).click();
await driver.sleep(2000);

await driver.findElement(By.xpath("//a[contains (@class,'overview_header') and text()='JS Syntax']")).click();
//await driver.sleep(2000);

await driver.findElement(By.xpath("//a[text()='JS Comments']")).click();
//await driver.sleep(2000);

await driver.sleep(2000);
}
catch{
console.log("some error is found");

}
finally{
await driver.quit();
}
}w3()
*/
//====================================================>--hover the content in action function 
// const{Builder,By,until,Key}=require("selenium-webdriver");
// async function geek_for_geek(){
// const driver=await new Builder().forBrowser("chrome").build();
// try{
// await driver.get("https://www.geeksforgeeks.org/");
// let hov=await driver.findElement((By.xpath("//div[text()='Jobs']")));

// await driver.wait(until.elementIsVisible(hov));
// await driver.actions({async:true}).move({origin:hov}).perform();
// await driver.sleep(2000)
// let hov1=await driver.wait(until.elementLocated(By.xpath("//div[text()='Tutorials']")));
// await driver.actions({async:true}).move({origin:hov1}).perform();
// await driver.findElement(By.xpath("//h2[text()='Courses']")).click();




// //await driver.sleep(1000);
// }
// catch(error){
// console.log("some problem in the code ",error)
// }


// finally{
// //await driver.quit();

// }
// }
// geek_for_geek()



//===========================================================>random website for dropdown in select 
// const {Builder,By,Key,unitl}=require("selenium-webdriver");
// async function praveen(){
// let driver =await new Builder().forBrowser('chrome').build();
// try{
//   await driver .get("https://www.qa-practice.com/elements/select/single_select");
//   let drop=await driver.findElement(By.id("id_choose_language"));
//  await drop.sendKeys("JavaScript");
//  await driver.findElement(By.id("submit-id-submit")).click();
//   await driver.sleep(4000);
// }
// catch(error){
//   console.log("some code is error");
  
// }

// finally{
//  await  driver.quit();
// }
// }
// praveen()

//===================================================================================>Alert in webpage handle 
// const {Builder,By,Key,until}=require("selenium-webdriver");
// async function websie(){
// let driver = await new Builder().forBrowser('chrome').build();
// try{
//   await driver.get("https://www.qa-practice.com/elements/alert/alert#");
// await driver.wait(until.elementLocated(By.className("a-button"))).click()
// let alert=await driver.switchTo().alert();
// await alert.accept();
// await driver.sleep(3000)
// }
// catch(error){
//   console.log("some erroe in web code ");
// }
// finally{
//   await driver.quit()
// }
// }
// websie()
//=============================================> prompt box in dom

// const {Builder,By,Key,until}=require("selenium-webdriver");
// async function websie(){
// let driver = await new Builder().forBrowser('chrome').build();
// try{
// await driver.manage().window().setRect({ width: 1920, height: 1080 });
//   await driver.get("https://www.qa-practice.com/elements/alert/prompt#");
// await driver.wait(until.elementLocated(By.className("a-button"))).click()
// let alert=await driver.switchTo().alert();
// await alert.sendKeys("some random text ");
// await alert.accept();
// await driver.sleep(3000)
//  let hand=await driver .getWindowHandle();

// }
// catch(error){
//   console.log("some erroe in web code ");
// }
// finally{
//   await driver.quit()
// }
// }
// websie()
 
// //=======================================>.   for the incognito tab and the maximized  screen 
// const {Builder,By,}=require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const fs=require("fs")

// async  function praveen (){
  
// let incognitoOptions = new chrome.Options();
// await incognitoOptions.addArguments("--incognito","--start-maximized");
//  //await incognitoOptions.addArguments('--start-maximized');
// let driver = await new Builder()
//   .forBrowser("chrome")
//   .setChromeOptions(incognitoOptions)
//   .build();
  
// await driver .get('https://www.geeksforgeeks.org/')
// await driver .sleep(3000);
// let screen=await driver.takeScreenshot()
// fs.writeFileSync('geek.png',screen,'base64');
// await driver .switchTo().newWindow('tab');
// await driver.get('https://www.geeksforgeeks.com/');
// await driver.sleep(3000);
// }praveen()


//========================================================> incognito mode 

// const { Builder,By}=require("selenium-webdriver");
// const chrome=require("selenium-webdriver/chrome");
// (async ()=>{
// let incognito=new chrome.Options();
// await incognito.addArguments("--incognito","--start-maximized");

// let driver = await new Builder().forBrowser('chrome').setChromeOptions(incognito).build();
// await driver .get( "https://www.hotstar.com/in/movies");

// })();

//============================================================================================================================
//                            ****  projet  **** 

// const {Builder,By,Key,until}=require("selenium-webdriver");
// const chrome=require("selenium-webdriver/chrome");
// async function project (){
//   try{
//  //   ===== register page 
// let option= await new chrome.Options();
// await option.addArguments("--start-maximized");
// let driver = await new Builder().forBrowser('chrome').setChromeOptions(option).build();
// await driver .get("https://practice.expandtesting.com/register");
// let land=await driver.wait(until.elementLocated(By.id("username")))
// await driver .findElement(By.id("username")).sendKeys("praveenthirunavukarasu",Key.TAB,"SuperSecretPassword!",Key.TAB,"SuperSecretPassword!");
// let btw= await driver.findElement(By.xpath("//button[text()='Register']"));
// await driver.executeScript(
//   "arguments[0].scrollIntoView(true); arguments[1].click()",
//   land,btw);
// //======login page 
// await driver.get("https://practice.expandtesting.com/login#google_vignette");
// await driver.findElement(By.id("username")).sendKeys("practice",Key.TAB,"SuperSecretPassword!");
// await driver.findElement(By.xpath("//*[@id='submit-login']")).click();



//   }
//   catch(error){
//     console.log("Somthing Went Worng",error);
    
//   }
//   finally{

//   }
// }project();




//===========================>>.  import the select and dob is selected 
// const{Builder,By,until,Key,Actions}=require("selenium-webdriver");
// const chrome=require("selenium-webdriver/chrome")
// const { Select } = require("selenium-webdriver/lib/select");


// async function praveen(){
// try{
// let options= new chrome.Options();
//  options.addArguments("--start-maximized");
// let driver=await new  Builder().forBrowser("chrome").setChromeOptions(options).build();
// await driver.get("https://automationexercise.com/");
// //hover and click the header Products link
// let hov=await driver.findElement(By.partialLinkText("Products"));
// await driver.actions({async:true}).move({origin:hov}).click().perform();

// let hov1=await driver.findElement(By.partialLinkText("Signup / Login"));
// await  driver.actions({async:true}).move({origin:hov1}).click().perform();
// //name and email 
// await driver.findElement(By.name("name")).sendKeys("praveen",Key.TAB,"praveen111@gmail.com");
// await driver.findElement(By.xpath("//button[text()='Signup']")).click();

// await driver.sleep(3000);
// //gender
// await driver.findElement(By.id("uniform-id_gender1")).click();
// //await driver.actions({async:true}).move({origin:gender}).click().perform();

// await driver.findElement(By.id("password")).sendKeys("praveen1244@");

// // daydropdown with select import 2️⃣0️⃣
// let day=await driver.findElement(By.id("days"));
// let dropday=  new Select(day);
// await dropday.selectByValue("20");

// //month using the select import 🔢
// let month=await driver.findElement(By.id("months"));
// let dropmonth=new Select(month);
// await dropmonth.selectByValue("10");

// // year 🎂
// let year=await driver.findElement(By.id("years"));
// let dropyear=new Select(year);
// await dropyear.selectByValue("2004");

// // next field F.name, L.name , company, address
// await driver.findElement(By.id("first_name")).sendKeys("praveen",Key.TAB,'T',Key.TAB,"none",Key.TAB,"pv kovil 2nd street gopalapuram elater");

// // contry select in drop dowm 🇮🇳
// let country =await driver.findElement(By.id("country"));
// let dropcountry=new Select(country);
// await dropcountry.selectByValue("India");

// await driver.findElement(By.id("state")).sendKeys("Tamil Nadu",Key.TAB,"chennai",Key.TAB,"600014",Key.TAB,"720000001");
// await driver.findElement(By.xpath("//button[text()='Create Account']")).click();

// await driver.wait(until.elementLocated(By.xpath("//a[text()='Continue']"))).click();




// }
// catch(error){
// console.log("code has some error",error);

// }
// finally{

// }

// }
// praveen()


//========++++==============================

// const {Builder,By,until,Key}=require("selenium-webdriver");
// const chrome=require("selenium-webdriver/chrome");
// async function sam(){

// let option = new chrome.Options();
// option.addArguments("--start-maximized");
// let driver= await new Builder().forBrowser("chrome").setChromeOptions(option).build()
// try{
// await driver.get("https://automationexercise.com/login");
// await driver.findElement(By.name("email")).sendKeys("praveen111@gmail.com");
// await driver.findElement(By.name("password")).sendKeys("praveen1244@");
// await driver.findElement(By.xpath("//button[text()='Login']")).click();

// await driver.wait(until.elementLocated(By.partialLinkText("Products")));
// //await driver.actions({async:true}).move({origin:product}).click().perform();
// await driver.findElement(By.xpath("Products")).click();

// let card =await driver.findElement(By.xpath("(//div[@class='product-image-wrapper'])[1]"));
// await driver.wait( until.elementIsVisible(card))
// await driver.executeScript(
//   "arguments[0].scrollIntoView({block:'center'});",
//   card
// );

// await driver.actions({async:true}).move({origin:card}).click().perform();
// await driver.findElement(
//   By.xpath("(//a[contains(text(),'Add to cart')])[1]")
// ).click();
// // await driver.findElement(By.xpath("//a[text()='Continue Shopping']")).click();

// }
// catch(error){
//   console.log("some in code ",error);
// }
// finally{
// //await driver.quit();
// }
// }
// sam()


///==========================>---IFrame  can be access switchTo().frame(index value ) \\   u can only one by one frame one.

// const {Builder,Key,unitl,By}=require("selenium-webdriver");      
// const chrome=require("selenium-webdriver/chrome");
// async function sam(){
//   let option = new chrome.Options();
//   option.addArguments("--start-maximized");
// let driver= await new Builder().forBrowser("chrome").setChromeOptions(option).build();
// try{
// await driver.get("https://letcode.in/frame");
// await driver.switchTo().frame(0);
// await driver.findElement(By.name("fname")).sendKeys("praveen");
// // await driver.switchTo().defaultContent();//--------»»»»» this is for go to the mainpage [exit the iframe]
// await driver.switchTo().frame(0);
// await driver.findElement(By.xpath("/html/body/app-root/app-innerframe/div/div/div/div/div/input")).sendKeys("praveen ");
// }
// catch(error){
//  console.log ("some error in the code of sam ", error);

// }
// finally{


// }

// }sam()

//============================================== scroll using the executeScript when ad is present 
// const{Builder,By,unitl,Key, until}=require("selenium-webdriver");
// const chrome=require("selenium-webdriver/chrome");
// async function sel(){
// let option= new chrome.Options();
// option.addArguments("--start-maxmized",);
// let driver=await new Builder().forBrowser("chrome").setChromeOptions(chrome).build();
// try{
// await driver.get("https://letcode.in/radio");
// await driver.findElement(By.id("yes")).click();
// let checkbox = await driver.findElement(
//   By.xpath("(//input[@type='checkbox'])[2]")
// );

// await driver.executeScript(
//   "arguments[0].scrollIntoView({block:'center'});",
//   checkbox
// );

// await driver.executeScript(
//   "arguments[0].click();",
//   checkbox
// );
// let click=await driver.wait(until.elementLocated(By.xpath("(//label[contains(@class,'label')])[7]")));
// await driver.actions({async:true}).move({origin:click}).perform();
// let checkbox1 = await driver.findElement(By.xpath("(//input[@type='checkbox'])[2]"))

// await checkbox1.click(); 
//    // =========== the move use the real mouse so the ad interfear but the executeScript use the code to run 


// }
// catch(some){
//   console.log("some problem in the code ",some);;

// }

// finally{

// }

// }sel()


// const {Builder,Key,until,By}=require("selenium-webdriver");
// const chrome=require("selenium-webdriver/chrome");
 
// (async()=>{
// let chromeoption=new chrome.Options();
// chromeoption.addArguments("--start-maximized");
// let driver=await new Builder().forBrowser().setChromeOptions(chromeoption).build();
// await driver.get("https://letcode.in/selectable");

// })();

//================================================================--> data driven testing 

// const { Builder, By, until } = require('selenium-webdriver');
// const testData = require('../LEARN_JAVASCRIPT/loginData.json');

// async function runTest(data) {
//   let driver = await new Builder().forBrowser('chrome').build();

//   try {
//    // console.log(`Running test for: ${data.username}`);
// await driver.get("https://automationexercise.com/login");
// await driver.findElement(By.name("email")).sendKeys(data.login[1].username);
// await driver.findElement(By.name("password")).sendKeys(data.login[0].password);
    

  

//   } catch (error) {
//     console.log(`❌ Test Failed for ${data.username}`);
//     console.error(error.message);

//   } finally {
//    // await driver.quit();
//   }
// }runTest(testData)




/*
const { Builder, By, until, Key } = require("selenium-webdriver");
async function praveen() {
    let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.myntra.com/");
        await driver.manage().window().maximize();
        let searchBox = await driver.wait(
            until.elementLocated(By.xpath("//input[@placeholder='Search for products, brands and more']")),
            10000
        );
        await searchBox.sendKeys("shirt", Key.RETURN);
        let product = await driver.wait(
            until.elementLocated(By.xpath("(//li[@class='product-base'])[1]")),
            10000
        );
        await product.click();
        let handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[1]);
        let size40 = await driver.wait(
            until.elementLocated(By.xpath("//p[text()='40']")),
            10000
        );
        await size40.click();
        let addToBag = await driver.wait(
            until.elementLocated(By.xpath("//div[text()='ADD TO BAG']")),
            10000
        );
await driver.sleep(2000)
        await addToBag.click();
  let addToBag1 = await driver.wait(
            until.elementLocated(By.xpath("//span[text()='GO TO BAG']")),
            10000
        );
        await addToBag1.click();    
}
praveen();
*/

//===================================================== from base and xpath 
// const{Builder,By, Key, until}=require("selenium-webdriver");
// async function praveen(){
// let driver=new Builder().forBrowser('chrome').build();
// await driver.get("https://www.google.com");
// await driver.findElement(By.name("q")).sendKeys("myntra",Key.RETURN);
// const myElement = By.xpath("//div[starts-with(@class,'CCgQ5')][1]");

// let ele=await driver.wait(until.elementLocated(myElement));
// await driver.wait(until.elementIsVisible(ele));//this code not work 
// await driver.findElement(myElement).click();
// //await driver.wait(until.elementLocated(By.xpath("//div[starts-with(@class,'CCgQ5')][1]")));  /////-----starts-with
// //wait driver.findElement(By.xpath("//div[contains(@class,'CCgQ5 vCa9Yd QfkTvb N8QANc MBeuO Va3FIb EE3Upf')][1]")).click();


// }praveen();
//================================================================> myntra
// const{Builder,By,Key,until}=require("selenium-webdriver");
// async function praveen(){
// let driver=new Builder().forBrowser('chrome').build();
// await driver.get("https://www.myntra.com/apparel?utm_source=dms_google&utm_medium=dms_searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gad_campaignid=20443628324&gbraid=0AAAAADoxBh5AA5p9LZVEVWffQ8IkC2ne1&gclid=CjwKCAiAssfLBhBDEiwAcLpwfkYNrf7e310wU3s-mam5-afljBd9A-Ht2wjJAJBBO9m3ubtxi3TbnBoC57EQAvD_BwE");
// //hover  in the head of the dropdown
// let hover= await driver.findElement(By.xpath("//*[@id='desktop-header-cnt']/div[2]/nav/div/div[1]/div/a"));
// await driver.actions({async:true}).move({origin:hover}).perform();
// // click the content in the hover box  
// let secondhov=By.xpath("//*[@id='desktop-header-cnt']/div[2]/nav/div/div[1]/div/div/div/div/li[1]/ul/li[2]/a")
// let hov= await driver.wait(until.elementLocated(secondhov))
// //shirt click in dynamic 
// await driver.actions({async:true}).pause(300).move({origin:hov}).click().perform()
// let click=By.xpath("//li[@id='22492580']//img[@title='U.S. Polo Assn. Embroidered Logo V-Neck Cotton Lounge T-shirts']");
// let pro=await driver.wait(until.elementLocated(click))
// await pro.click();

// let window =await driver.getAllWindowHandles();
// await driver.switchTo().window(window[1]);
// //  size button 
// let si=await driver.wait(until.elementLocated(By.xpath("//p[text()='M']")));
// await si.click();

// let add= await driver.wait(until.elementLocated(By.xpath("//div[text()='ADD TO BAG']")),3000);
//  await add.click();

// let booking_cart= await driver.wait(until.elementLocated(By.xpath("//span[text()='GO TO BAG']")),3000);
//  await booking_cart.click();
// //walet 
// await driver.wait(until.elementLocated(By.xpath("//div[text()='Wallets']")),3000).click();

// //walet link
// let move=await driver.wait(until.elementLocated(By.xpath("//img[@src='https://assets.myntassets.com/q_95,w_172,c_limit,fl_progressive/assets/images/30005651/2024/7/10/c6d27832-df22-4bda-b423-4c4c4b53c97c1720617404863DailyObjectsUnisexLeatherTwoFoldWallet1.jpg']")),3000);
// //await driver.actions({async:true}).move({origin:move}).click().perform();
// await move.click();

// //  switching to the next tab
// let handles=await driver.getAllWindowHandles()
// await driver.switchTo().window(handles[2]);
// await driver.wait(until.elementLocated(By.xpath("//*[@id='mountRoot']/div/div[1]/main/div[2]/div[2]/div[2]/div[2]/div/div[1]")),3000).click();
// await driver.switchTo().window(handles[0])
// await driver.switchTo().newWindow('tab');
// await driver.get("https://google.com");
// await driver.wait(until.elementLocated(By.name("q")),2000).sendKeys("facebook",Key.RETURN)
// //await driver.sleep(2000);

// let all_link=await driver.wait(until.elementsLocated(By.id("center_col")));

// await all_link[3].click();



// }praveen();
//=================================================================================> window handles

// const {Builder,By,Key,until}=require("selenium-webdriver");
// async function sam(){

// let driver=await new Builder().forBrowser("chrome").build();
// await driver.get("https://letcode.in/window");
// await driver.findElement(By.xpath("//button[text()='Muiltiple windows']")).click();
// let handles=await driver.getAllWindowHandles();

// await driver.switchTo().window(handles[2]);
// let title=await driver.getTitle()
// console.log(title);
// //hover on the product in the dropdow tab
// let hov_product=await driver.findElement(By.xpath("//a[text()='Products']"));
// await driver.actions({async:true}).move({origin:hov_product}).perform();
//  let visible=await driver.findElement(By.xpath("//a[text()=' LetXPath ']"));;

// let visible1=await driver.wait(until.elementIsVisible(visible));
// await visible1.click();
// await driver.switchTo().window(handles[0]);
// await driver.sleep(4000);

// await driver.wait(until.elementLocated(By.xpath("//button[text()='Open Home Page']")),3000).click();
// // let hov_product1=await driver.findElement(By.xpath("//a[text()='Products']"));
// // await driver.actions({async:true}).move({origin:hov_product1}).perform();
// await driver.sleep(5000)
// let window_handle=await driver.getAllWindowHandles();
// await driver.sleep(2000)
// await driver.switchTo().window(window_handle[0]);
// await driver.sleep(2000);
// await driver.switchTo().window(window_handle[3]);
// await driver.sleep(2000);
// let title1 =await driver.getTitle();
// console.log(title1);
// await driver.executeScript(`window.scrollBy(0,600);`);
// // await driver.executeScript("window.scrollBy(0, 400);");


// await driver.findElement(By.linkText("AUI - 1")).click();
// await driver.close();

// }sam()
// const{Builder,By,Key,until}=require("selenium-webdriver");
// //const { elementIsVisible } = require("selenium-webdriver/lib/until");
// async function drag(){
// let driver=await new Builder().forBrowser("chrome").build();
// await driver.manage().window().maximize();
// await driver.get("https://letcode.in/droppable");

// let drag=await driver.wait(until.elementLocated(By.xpath("//div[@id='draggable']")),2000);
// await driver.wait(until.elementIsVisible(drag));
// let drop=await driver.wait(until.elementLocated(By.xpath("//div[@id='droppable']")),2000);
// await driver.wait(until.elementIsVisible(drop));
// await driver.executeScript('window.scrollBy(0,200)')
// await driver.actions({async:true}).dragAndDrop(drag,drop).pause(2000).perform();

// }drag()



// const { Builder, By } = require("selenium-webdriver");

// (async function uploadFileExample() {
//   let driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await driver.get(
//       "https://www.w3schools.com/howto/howto_html_file_upload_button.asp"
//     );

//     // Locate the file input
//     const fileInput = await driver.findElement(By.id("myFile"));

//     // Upload file (ABSOLUTE path)
//    await fileInput.sendKeys("/Users/praveen/Documents/test.txt");

//     // Pause so you can see the file selected
//     await driver.sleep(3000);

//   } finally {
//     // await driver.quit();
//   }
// })();



// const{Builder,By,until,Key}=require("selenium-webdriver");
// async function fram(){
//    let driver = await new Builder().forBrowser("chrome").build();
//    await driver.get("https://letcode.in/frame");
// await driver.switchTo().frame(0);
// await driver.findElement(By.name("fname")).sendKeys("praveen");
// await driver.switchTo().frame(0);
// await driver.findElement(By.xpath("/html/body/app-root/app-innerframe/div/div/div/div/div/input")).sendKeys("praveem");

// }fram()



