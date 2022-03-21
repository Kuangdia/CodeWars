// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count (string) {  
  // create an empty object variable
  obj = {};

  // convert string to array
  const arr = string.split("");

  // loop through each element
  arr.forEach((item) => {
    // set count to 1 || +1 for incremental counts
    if (obj[item] == undefined) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  })
  return obj;

}

count("aba")
// { a: 2, b: 1 } 
count("")
// {}

// other solutions
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

const count = require('lodash').countBy;