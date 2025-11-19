// const finger= 20;//---declearing finger 

// let praveen ={
//     eye:'brown',
//     ears:2,
//     allfingers:finger,// ----calling the declared finger 
// person (eye){
// console.log (this.eye);//---it call the object from above only when you use .this 
// }
// };
// delete praveen.ears;
// praveen.ears=3;//----adding the new object  
// console.log(praveen.person('blue'));


// let user={

// };
// user.name='praveen';
// console.log(user);


//--------------------------class 

class User{
  name='praveen';

    display(){
        console.log(this.name);

    }



}
let pra=new User ();
console.log(pra)