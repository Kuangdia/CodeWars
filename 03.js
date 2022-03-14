const log = console.log;

// in this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

filter_list([1,2,'a','b', -5]) 
// == [1,2]
filter_list([1,'a','b',0,15]) 
// == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) 
// == [1,2,123]

function filter_list(l) {
  const filter = l.filter((item) => {
    if (typeof item === "number") {
      return item >= 0
    }
  })
}

// other solutions
function filter_list(l) {
  return l.filter(v => typeof v == "number")
 }

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
