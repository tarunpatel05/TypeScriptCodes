// // Union Types
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }
// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("Tarun", "Patel");
// console.log(combinedNames);

// +++++++++++++++++++++++++++++ literal types ++++++

// console.log('Time to get started');
// function combine(input1: number | string, input2: number | string, resultConversion:'as-number'|'as-string') {
//     let result;
//     if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
//       result = +input1 + +input2;
//     } else {
//       result = input1.toString() + input2.toString();
//     }
//     return result
//     // if(resultConversion==='as-number'){
//     //     return +result;
//     //     // return parseFloat(result);
//     // }else{
//     //     return result.toString();
//     // }
  
//   }
//   const combinedAges = combine(30, 26, 'as-number');
//   console.log(combinedAges);

//   const combinedStringAges = combine('30', '26', 'as-number');
//   console.log(combinedStringAges);
  
//   const combinedNames = combine("Tarun", "Patel", 'as-string');
//   console.log(combinedNames);

// ========================== Type Aliases/Custom Types
type Combinable = number|string;
type ConversionDescriptor = 'as-number'|'as-string'

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result
  
  }
  const combinedAges = combine(30, 26, 'as-number');
  console.log(combinedAges);

  const combinedStringAges = combine('30', '26', 'as-number');
  console.log(combinedStringAges);
  
  const combinedNames = combine("Tarun", "Patel", 'as-string');
  console.log(combinedNames);

// ++++++++++++++++++++++
// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }
   
// from this ====
//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }

//To this ===

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
  

