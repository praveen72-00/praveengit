// const person={
//     name:'praveen',
//     Age:'21;'
// }

const { Driver } = require("selenium-webdriver/chrome");

// function payair(){
//     return ("name "+ person.name +" \nage "+ person.Age);

// }

// console.log(payair());

//------------ fuction with object 
// function nam(sample="salaa"){
//     console.log(sample);
// }
// nam()//------------function with parameters and default value 
 
// function name(...arg){
//     console.log(arg);
// }
// name("name:'hello'",18) ------function with array 

// function pra (fullname){
// return fullname ;
// }
// console.log(pra('praveen'));


// const fname= (firstname)=> firstname;
// console.log (fname('praveen'));       arrow function  or || anonmoys function 
// function random(name){
//     return name;
// }
// console.log(random('praveen '));
// console.log(random('pradeep '));
// console.log(random('naveen '));

// function greet(name,callback) {
//   console.log("Hello " + name);
//   callback()
  
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alex", sayGoodbye);

// function dom(fullname){
//   console.log("name is: "+fullname);

//   function brain (lastname){
//     console.log("fuck"+lastname);
//   }
//   brain("brain o corner");
  
// }

// dom('dominc torado ')

// function some(num){
// return num>0
// }
// console.log(some(3))


//==========================> function with object 

// function person (name,age){
//     let tec=new Object//or {}
//     tec.like=name
//     tec.age=age
// return tec
// }
// let persons=person("name praveen","some age")
// console.log(persons.like);
//========================================================================>
// function teacher (name,age){
    
//     // this.name=name;
//     // this.age=age;===== also we can use this type
    
//     function random(){
//     let names={
//     gie:"gee",
//     }
//     console.log(names.gie);}
//     random();
    
//  return {name,age} ;
// }
// let teachers=new teacher("praveen",21);
// console.log(teachers.name,teachers.age)





//=======================================function with parameter and inside obj

// function
// createPerson (name,age) {
// let obj= {}
// obj.some = name
// obj.age = age
// // obj.introduceSelf = function () {
// // return `Hi my name is ${obj.some}`
// // }
// return obj
// }

// console.log(createPerson('plskdkd',).some)

// // let person=new createPerson('praveen');
// // console.log(person);

// export function name1(pai,last){
    

//     return{pai,last} ;

// }

// const random=name1("jskdwk",23);
// console.log(random);

// console.log(name1("hjhk",77));
// console.log(name1("jjkk").pai);




// function pra (fullname){
// return fullname ;
// }
// console.log(pra('praveen'));
//=========================================>------function inside function 
// function lame(){
//     a=1;
//     function lame2(){
//          b=2;
//       return(a+b);
//     }
//   return lame2();
// }
// let add=lame();
// console.log(add);
const{Builder,By,Key}=require("selenium-webdriver")
const chrome=require("selenium-webdriver/chrome");
describe("randome",function (){
this.timeout(0)
 /**  @type {import('selenium-webdriver').WebDriver} */

let driver;

let option=new chrome.Options();

beforeEach("",async function (){
option.addArguments("--start-maximized")
 driver= await new Builder().forBrowser('chrome').setChromeOptions(option).build();
})

  it("execute", async function(){
   
await driver.get("https://automationexercise.com/products");
await driver.findElement(By.id("search_product")).sendKeys("shirt",Key.RETURN);
//await driver.close();

  })
  it("second",async function(){
   await driver.switchTo().newWindow('tab');
   await driver.f
await driver.get("https://automationexercise.com/products");
  })
})