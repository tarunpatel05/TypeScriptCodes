// Interface : describe the structure of object, how the object should look like
//only structure
//basically type check the object
// interface can be used as contract a class can implement and a class then has to adhere to 


// interface Person {
//     name:string; // name:string = 'Max'   // can not do this in interface, no concrete value
//     age:number;
//     greet(phrase:string):void;
// }

// let user1:Person

// user1 = {
//     name:'Max' ,
//     age: 30,  // see we use comma here not semi lcolon
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name);
//     }
// };

// user1.greet('Hi there - i am');

// ++++++++ Can use Type, the why Interface, : you can implement interface in the class, 
// and interface looks more cleaner

// type Person1 = {
//     name:string; // name:string = 'Max'   // can not do this in interface, no concrete value
//     age:number;
//     greet(phrase:string):void;
// }
// let user2: Person1;

//////////////////////// +++++++++++++++++++====
// interface Greetable {
//     name:string; // name:string = 'Max'   // can not do this in interface, no concrete value
//     greet(phrase:string):void;
// }
// class Person implements Greetable{
//     name: string;
//     age = 30;
//     constructor(n:string){
//         this.name =n;
//     }
//     greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// let user1:Greetable;
// user1 = new Person('Max');
// user1.greet('Hi there - i am');
// console.log(user1);

// let user2 : Person;
// user2 = new Person('Tarun');
// console.log(user2);

////////////////////////////////// Readonly interface properties
// interface Greetable {
//     readonly name:string; //  only readonly can be added no public private
//     greet(phrase:string):void;
// }
// class Person implements Greetable{
//     name: string;
//     age = 30;
//     constructor(n:string){
//         this.name = n;
//     }
//     greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// let user1:Greetable;
// user1 = new Person('Max');
// // user1.name = 'Manu'; // can not do it, because it is readonly property

///////////////////////// Extending interface 
// interface Named{
//     readonly name:string;
// }
// interface Greetable {
//     greet(phrase:string):void;
// }
// class Person implements Greetable, Named{
//     name: string;
//     age = 30;
//     constructor(n:string){
//         this.name = n;
//     }
//     greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// let user1:Greetable;
// user1 = new Person('Max');
/////////////////////////////////////////////// Or
// interface Named{
//     readonly name:string;
// }
// // interface Greetable extends Named, AnotherInterface // can extends other interface as well
// interface Greetable extends Named{
//     greet(phrase:string):void;
// }
// class Person implements Greetable{
//     name: string;
//     age = 30;
//     constructor(n:string){
//         this.name = n;
//     }
//     greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// let user1:Greetable;
// user1 = new Person('Max');


//////////////////////////////////////////////////
type Addfn = (a:number, b:number) => number;
let add5: Addfn;
add5 = (n1:number,n2:number) => {
    return n1+n2
};

interface Named{
    readonly name:string;
}
// interface Greetable extends Named, AnotherInterface
interface Greetable extends Named{
    greet(phrase:string):void;
}
class Person implements Greetable{
    name: string;
    age = 30;
    constructor(n:string){
        this.name = n;
    }
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user1:Greetable;
user1 = new Person('Max');

