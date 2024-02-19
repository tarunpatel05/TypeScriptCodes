// ++++++++++++++++ take numbers out of string ex: '123Tarun4567' o/p 1234567
function extractNumbers(inputString: string): string {
  // Regular expression to match all numbers
  const regex = /\d+/g;

  // Find all matches
  const matches = inputString.match(regex);

  // If matches found, join them; otherwise return an empty string
  return matches ? matches.join("") : "";
}

const inputString = "TarunPatel123St345";
const extractedNumbers = extractNumbers(inputString);

console.log(extractedNumbers); // This will print "123345"

//+++++++++++++++++++++++++++++another solution++++++++++++++++++++++++++++++++
const filterNumbersFromString = (testString: string) => {
  // split the characters of string
  let chars: string[] = testString.split("");
  // declare empty array
  let testArr = [];
  // iterate over all characters
  for (let i = 0; i < chars.length; i++) {
    // check if the character is not a number
    if (!isNaN(Number(chars[i]))) {
      // push the character to empty array
      testArr.push(chars[i]);
    }
  }
  const string2: string = testArr.join("");
  return string2;
};

const result: string = filterNumbersFromString("543345sdfsdf3534534jj23");
console.log(result); // This will print 543345353453423

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function moveZeroesToFrontAndJoin(arr: number[]): string {
  // Separate zeroes and non-zero elements
  const zeroes = arr.filter((item) => item === 0);
  const nonZeroes = arr.filter((item) => item !== 0).sort((a, b) => b - a);

  // Concatenate zeroes at the front and non-zero elements
  const rearrangedArray = [...zeroes, ...nonZeroes];

  // Join the elements to form a string
  return rearrangedArray.join("");
}

const inputArray = [4, 0, 1, 0, 2, 0, 3, 0];
const outputString = moveZeroesToFrontAndJoin(inputArray);

console.log(outputString);
//+++++++++++++++++++++++++alternate way ++++++++++++++++++++++++++++++
const moveZerosToFrontAndJoin = (arrTest: number[]) => {
  // create two empty arrays
  let zeroArray: number[] = [];
  let nonZeroArray: number[] = [];
  // iterate the loop over array
  for (let i = 0; i < arrTest.length; i++) {
    // if array contains 0, push element to first array otherwise push it to another array
    if (arrTest[i] == 0) {
      zeroArray.push(arrTest[i]);
    } else {
      nonZeroArray.push(arrTest[i]);
    }
  }
  // merge both arrays
  let concatArray: number[] = [...zeroArray, ...nonZeroArray];
  return concatArray;
};

const result2 = moveZerosToFrontAndJoin([
  4, 2, 0, 2, 5, 0, 0, 2, 5, 0, 5, 0, 0,
]);
console.log(result2); // result is [0, 0, 0, 0, 0, 0, 4, 2, 2, 5, 2, 5, 5]

//+++++++++++++ taking subset of sum 10
function findSubsetsThatSumToTarget(
  nums: number[],
  target: number
): number[][] {
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
const nums: number[] = [
  1, 2, 3, 2, 1, 1, 2, 2, 3, 2, 4, 3, 2, 1, 4, 2, 1, 2, 1,
];
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
    let line = ""; // Initialize line to be printed

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
let repeat: number = 0;

for (let i = 1; i <= 6; i++) {
  let line = "";

  if (i % 2 !== 0) {
    line = i.toString();
  } else {
    repeat = i;
    for (let j = 0; j < repeat; j++) {
      line += i.toString();
    }
  }
  console.log(line);
}

//+++++++++++++++++++++++++++++++++++++++
// Arrays of products and their corresponding prices
// const products = ["iPhone 11", "Galaxy S23", "Pixel 4", "iPhone 8"];
// const prices = [700, 560, 899, 284];

// // Function to find the name of the product with the second highest price
// function findSecondHighestProduct(products: string[], prices: number[]): string {
//     // Combine the products and prices into an array of objects
//     const combined = products.map((product, index) => ({
//         name: product,
//         price: prices[index]
//     }));

//     // Sort the array based on price in descending order
//     combined.sort((a, b) => b.price - a.price);

//     // Return the name of the product with the second highest price
//     // Check if there is at least two products
//     return combined.length > 1 ? combined[1].name : 'Not enough products';
// }

// const secondHighestProduct = findSecondHighestProduct(products, prices);
// console.log(secondHighestProduct); // This will print the name of the product with the second highest price

// +++++++++++++++++ remove duplicates and arrange in descending order in a string +++++++++++++
const removeDuplicatesInDescendingOrder = (abc: string) => {
  // split all characters
  let chars = abc.split("");
  let newMap = new Map();
  // define first for loop
  for (let i = 0; i < chars.length; i++) {
    //initialize the counter to count the duplicates
    let count = 0;
    for (let j = 0; j < chars.length; j++) {
      // break the loop if the elements are same and i > j
      if (chars[i] == chars[j] && i > j) {
        break;
      }
      // increase the counter if the elements are same
      if (chars[i] == chars[j]) {
        count++;
      }
    }
    if (count > 0) {
      // add the element in map and its count
      newMap.set(chars[i], count);
    }
  }
  // sort the map with entries for b and a in descending order
  let sortedMap: Map<string, number> = new Map(
    [...newMap.entries()].sort((a, b) => b[1] - a[1])
  );
  // new array with sorted keys
  let newString: string[] = [...sortedMap.keys()];
  // join the keys
  return newString.join("");
};

const resultedString = removeDuplicatesInDescendingOrder("ABCDAABBBCAAAADDDDD");
console.log(resultedString); // result is ADBC
