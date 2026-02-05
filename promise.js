// let some=true;

// let sathiyam= new Promise((resolve,Reject)=>{
// if (some){
//     resolve ('its ok ');
// }else
// {
//     Reject ("its is't");
    
// }
// })
//  sathiyam.then((random) => {
//   console.log(random )
//  }).catch((find)=>{
//   console.log(find)
//  })
//======================================this is settimeout function 

// function time(){
//     console.log("this is a function statement ");
// }
// let some =new Promise (()=>
//     {
//     console.log("this is 1");

//     setTimeout(() => 
// {
//   console.log("This runs after 4 seconds");
// }

// , 4000); // time in milliseconds)

// setTimeout(time,10000)

// })


//================================================> perfect
// function greet(name) {
//   return new Promise((resolve,reject) => {
//     if (typeof name==="string")
//       {
//     resolve  ("Hello " + name)
//     }else{
//    reject ("some error")
//     }
//   });
// }
// greet(678).then((some)=>{
//   console.log(some)
// }).catch((some)=>{
//   console.log(some)

// })


// function sayGoodbye(say) {
//   console.log("Goodbye!"+say);
// }

// greet("Alex")
//   .then(() => {
//     sayGoodbye('hoo'); // runs after greet is finished
//   });




//   function greet(name) {
//   new Promise((resolve, reject) => {
//     if (!name) {
//       reject("No name provided!"); // ❌ error case
//     } else {
//       console.log("Hello " + name);
//       resolve(); // ✔ success
//     }
//   });
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet('praveen')
//   .then(() => {
    
//     sayGoodbye();            // runs if resolve() is called
//   })
//   .then(()=>{
//     console.log (greet())
//   })
//   .catch((error) => {
//     console.log("Error:", error);   // runs if reject() is called
//   });


//   async function pra (){
//     console.log ("some new text ");
//     await
//   }
// pra()