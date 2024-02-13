// function add(n1: number, n2: number):number {
//   return n1 + n2;
// }

// function printResult(num:number):void {
//     console.log('Result: '+num);
//     return;
// }

// // printResult(add(5,12));
// console.log(printResult(add(5,12))); //retrun undefined
// // undefined is also a type in Javascript

// let combineValues: Function; //Function is a type in Typescript
// combineValues = add;  // add is function
// // combineValues = 5; // ERROR
// // combineValues = printResult // it is OK here
// console.log(combineValues(8,8));

///+++++++++++++++ function types
// function add(n1: number, n2: number):number {
//     return n1 + n2;
//   }

//   function printResult(num:number):void {
//       console.log('Result: '+num);
//       return;
//   }

//   console.log(printResult(add(5,12))); //retrun undefined

//   let combineValues: (a: number,b:number) => number;  //function type, specific function

//   combineValues = add;  // add is function
// //   combineValues = printResult; // ERROR
//   console.log(combineValues(8,8));

/// ++++++++++++++ Function Type and callback

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printResult(add(5, 12))); //retrun undefined

let combineValues: (a: number, b: number) => number; //function type, specific function

combineValues = add; // add is function
console.log(combineValues(8, 8));

// addAndHandle(10,20,()=> {})  // ()=> {} is anonymous function
addAndHandle(10,20,(result)=> {
    console.log(result)
})  // ()=> {} is anonymous function
