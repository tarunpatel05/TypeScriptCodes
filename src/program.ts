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