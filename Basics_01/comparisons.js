//comparisons are tricky in JS.

console.log("2">1)
console.log("02">1)
console.log("2"==2)

//when numeric strings are compared they get converted to numbers and get compared accordingly but for alphanumeric strings they always give false

console.log(null>0)
console.log(null==0)
console.log(null>=0)

//In third case null gets converted to 0 so it gives true

console.log(undefined<0)
console.log(undefined>=7)
console.log(undefined=="j")

//undefined generally gives false in most cases