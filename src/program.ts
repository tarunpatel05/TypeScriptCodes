// ++++++++++++++++ take numbers out of string ex: '123Tarun4567' o/p 1234567
function extractNumbers(inputString: string): string {
    // Regular expression to match all numbers
    const regex = /\d+/g;

    // Find all matches
    const matches = inputString.match(regex);

    // If matches found, join them; otherwise return an empty string
    return matches ? matches.join('') : '';
}

const inputString = "TarunPatel123St345";
const extractedNumbers = extractNumbers(inputString);

console.log(extractedNumbers); // This will print "123345"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

  //+++++++++++++ taking subset of sum 10
  function findSubsetsThatSumToTarget(nums: number[], target: number): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums.slice(i, j).reduce((acc, val) => acc + val, 0) === target) {
                result.push(nums.slice(i, j));
                break; // Assuming we only need one subset per starting point
            }
        }
    }
    return result;
}

// Given array
const nums: number[] = [1, 2, 3, 2, 1, 1, 2, 2, 3, 2, 4, 3, 2, 1, 4, 2, 1, 2, 1];
const targetSum: number = 10;

// Find subsets
const subsets: number[][] = findSubsetsThatSumToTarget(nums, targetSum);
console.log(subsets);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*print 
1
22
3
4444
5
666666
*/

function printPattern(limit: number): void {
    let repeat = 1; // Initial repeat count

    for (let i = 1; i <= limit; i++) {
        let line = ''; // Initialize line to be printed

        if (i % 2 === 0) {
            // On even iterations, repeat the number i times
            repeat = i * 2;
            for (let j = 0; j < repeat; j++) {
                line += i.toString();
            }
        } else {
            // On odd iterations, just print the number once
            line = i.toString();
        }

        console.log(line); // Print the line
    }
}

printPattern(6);

// +++++++++ or +++++++++++++++
let repeat:number = 0;
 
for (let i =1 ; i<=6 ; i++){
   let line ='';

   if(i%2 !== 0){
      line = i.toString();
   }
   else{
      repeat = i;
      for(let j = 0; j<repeat; j++ ){
         line += i.toString();
      }
   }
         console.log(line);
}