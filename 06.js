// +1 Array

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Example
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1,-9]) would return null

function upArray(arr){
  // return null if arr is empty
  if (arr.length < 1) {
    return null;
  }

  // loop through array
  // return null if there's negative integer || > one digit
  for (let key of arr) {
    if (key < 0 || key > 9 || typeof key != "number") {
      return null;
    }
  }

  // loop through the array
  for (let j = 0; j < arr.length; j++) {
    // check if the last digit is 9
    if (j == arr.length - 1 && arr[j] == 9) {
      // convert to string to add 1 by parseInt
      let joinArr = arr.join("");
      const addNum = parseInt(joinArr) + 1;
      // convert numbers back to array
      const newArr = Array.from(String(addNum), Number);
      return newArr;
    } else if (j == arr.length - 1 && arr[j] < 9) {
      // add 1 if last digit is not 9
      arr[j] += 1
      return arr;
    }
  }

}

console.log(upArray([2, 3, 9]));
console.log(upArray([4, 3, 2, 5]));