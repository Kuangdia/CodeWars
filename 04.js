// Break camelCase

const log = console.log;

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  // create a variable to store empty str
  let str = "";

  // loop through string
  for (let i = 0; i < string.length; i++) {
    // check if string has an uppercase letter
    if (string[i] == string[i].toUpperCase()) {
      str += ` ${string[i]}`;
    } else {
      str += string[i]
    }
  }

  return str;
}

solution("camelCasing")

// other solutions
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}