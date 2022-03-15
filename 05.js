// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count (string) {  
  obj = {};

  const arr = string.split("");

  arr.forEach((item) => {
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