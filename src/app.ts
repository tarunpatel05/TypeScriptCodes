function addAndHandle1(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
// console.log(combineValues(8, 8));
// addAndHandle(10,20,()=> {})  // ()=> {} is anonymous function
addAndHandle1(10,20,(result)=> {
    console.log(result)
})

function clickHandler(message:string){
  console.log('Clicked! ' + message);
}
const button = document.querySelector('button')!;
if(button){
  button.addEventListener('click',clickHandler.bind(null,"You are welcome"))
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

function moveZeroesToFrontAndJoin(arr: number[]): string {
  // Separate zeroes and non-zero elements
  const zeroes = arr.filter(item => item === 0);
  const nonZeroes = arr.filter(item => item !== 0).sort((a, b) => b - a);

  // Concatenate zeroes at the front and non-zero elements
  const rearrangedArray = [...zeroes, ...nonZeroes];

  // Join the elements to form a string
  return rearrangedArray.join('');
}

const inputArray = [4, 0, 1, 0, 2, 0, 3, 0];
const outputString = moveZeroesToFrontAndJoin(inputArray);

console.log(outputString);