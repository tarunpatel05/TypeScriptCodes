// const userName = 'Tarun';
// userName = "Patel"
// let age = 30;
// age = 29;

// var is not used
//var result;// declarted here; van use let here

// function add(a:number, b:number){
//   // var result;// need to declarte it above to use it
//   result = a+b;
//   return result;
// }
// console.log(result); //now it will work// can use let
//+++++++++++++++++++++
// let result;
// function add(a:number, b:number){
//   // var result;// need to declarte it above to use it
//   result = a+b;
//   return result;
// }
// console.log(result); //now it will work// can use let
//++++++++++++++++++++++++++++++
// let age = 30;
// age = 29;

// if(age>20){
//   var isOld = true; // this variable become with global scope.
//   // let isOld = true; // this will not work down, it blocked scope not avaiable in down block
// }

// console.log(isOld);
//++++++++++++++++++++++++++++++ Arrrow Function ES6 Nextgen JS+++++
// // function as expression which is store in variable
// // const add = () => {}
// const addArrow = (a:number, b:number) => {
//   return a+b;
// }
// const addArrow1 = (a:number, b:number) => a+b; // if we have one expression

// const printOutput1 = (output:string|number) =>{
//   console.log(output);
// } //it it has only one parameter

// const printOutput:(a:number|string) => void = output => console.log(output);

// console.log(addArrow(2,5));
// console.log(addArrow1(2,5));
// printOutput(addArrow1(5,6));
// printOutput(addArrow(5,6));

// // example where we can use arrow function
// if(button){
//   button.addEventListener('click', event => console.log(event));
// }


//++++++++++++++++++++++++++++++ Default argument to function+ ++++++

// const addDefault = (a:number, b:number=1) => a+b; // if we have one expression
// console.log(addDefault(2)); //can call with 1 argument
// //define in last only
// // const addDefault = (a:number=1, b:number) => a+b; // wil not work

// spread operator +++++++++++++++

const hobbies = ['sports', 'cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
const someMoreHobbbies = ['Jumping', ...hobbies];

const person = {
  name:'Max',
  age:30
};
const copiedPerson = person;

const otherPerson = {...person}; //values get copied

// rest parmeters ++++++++++++++++
const addNew = (...numbers:number[]) => {
 return numbers.reduce((curResult, curValue) => {
  return curResult+curValue;
} , 0)
}

const addedNumbers = addNew(5,10,2, 4,5,2.7);
console.log(addedNumbers);

///+++++++++++++++++++++++++++=

const addNew1 = (...numbers:[number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
   return curResult+curValue;
 } , 0)
 }
 
 const addedNumbers1 = addNew1(5,10,2);
 console.log(addedNumbers1);

//+++++++++++++++++++ Array destructuring
const hobbies1 = ['sports', 'cooking'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies1;
console.log(hobbies1,hobby1,hobby2);

//// object destructuring
const person1 = {
  firstName:'Max',
  age:30
};
const {firstName: userName1,age} = person1;
console.log(userName1, age, person)
//++++++++++++++++++++++++++++

