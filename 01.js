const log = console.log

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  // create two new arrays;
  const newArr = [];
  const newArr2 = [];

  // Loop through array
  arr.map((item, index) => {
    if (item === arr[0]) {
      // Push arr[0] into a newArr
      newArr.push(item);
    } else {
      // if item !== arr[0], we push into newArr2
      newArr2.push(item);
    }
  })

  //if newArr.length > newArr2.length; return newArr2 else newArr
  if (newArr.length > newArr2.length) {
    return newArr2[0];
  } else {
    return newArr[0];
  }

  
}

log(findUniq([ 0, 1, 0 ]));
log(findUniq([ 0, 0, 1 ]));
log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
log(findUniq([ 1, 1, 2, 1, 1 ]));
log(findUniq([ 3, 10, 3, 3, 3 ]));

// describe("Example Tests", () => {
//   it("Tests", () => {
//     assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
//     assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
//   });
// });