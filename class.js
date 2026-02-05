// class Lean{
//     constructor(name2,age,profinal){
// this.name=name2;
// this.age=age;
// this.profinal=profinal;
//     }
// }
// const praveen=new Lean("praveen",21,"testing")
// console.log(praveen.age,praveen.name);

// const n =class{
//     constructor(names,age,job){
//         this.name=names;
//          this.age=age;
//         this.job=job;
//     }
//      bro(){
// return(`the name is ${this.name},ideii ${this.age}`);
//     }
// } 
// const gill=new n("praveen",20,"softer tester");
// console.log(gill.bro())

//===========> inheritance in class 
class Student  {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    like(){
        return `this is an dumuy function ${this.name} `;
    }
}
class Student1 extends Student{
    constructor(name,age,roll){
        super(name,age)
        this.roll=roll; 
       
    }
    

}
const students =new Student ("praveen",23);
console.log(students,"\n",students.like("jcjcj"));
const pai= new Student1 ("praveen",12,36);
console.log(pai.like())