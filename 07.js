// Dashatize it

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Example
// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  // return Math.abs(num)
  if (isNaN(num)) {
    return 'NaN';
  }

  let string = "";

  // convert to array
  const arr = num.toString().split("")
  // loop through numbers
  for (let i = 0; i < arr.length; i++) {
    // for index 0 check that current and next are even
    if (i == 0 && arr[i] == "-") {
      string;
    } else if (i == arr.length - 1) {
      string += arr[i]
    } else if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
      string += arr[i]
    } else if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0) {
      string += arr[i] + "-";
    } else if (arr[i] % 2 == 0 && arr[i + 1] % 2 != 0) {
      string += arr[i] + "-";
    } else if (arr[i] % 2 != 0 && arr[i + 1] % 2 == 0) {
      string += arr[i] + "-";
    }
  }
  return string;
  // otherwise put hash
  
}

// Other solutions
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

console.log(dashatize(274))
console.log(dashatize(-28369))
// console.log(dashatize(-1))