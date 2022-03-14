const log = console.log;

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  // convert string into array of letters
  const arr = str.split("")

  // reverse the string with reverse()
  const reverse = arr.reverse()

  // join the array into string
  reverse.join("")

}

solution('world')

// other solutions
const solution = s => [...s].reverse().join('')
