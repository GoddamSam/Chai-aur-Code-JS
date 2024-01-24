//other data types to number.

let a ="66"
let b="66ab"
let c=true
let d=false
let e=null
let f=undefined

console.log(Number(a))
console.log(Number(b))
console.log(Number(c))
console.log(Number(d))
console.log(Number(e))
console.log(Number(f))

//NaN value stands for Not a number whose type may be number but as a value it is not a number

//"66"-->66  "66ab"-->NaN  true-->1  false-->0  null-->0  undefined-->NaN


//other data types to boolean

let a1 ="66"
let b1=" "
let c1=0
let d1=-5
let e1=null
let f1=undefined

console.log(Boolean(a1))
console.log(Boolean(b1)) 
console.log(Boolean(c1))
console.log(Boolean(d1))
console.log(Boolean(e1))
console.log(Boolean(f1))

//"Sam66"-->true  ""-->false  " "-->true  0-->false  -1/1/5-->true  null-->false  undefined-->false


//other data types to string

let a2=null
let b2=undefined

console.log(String(a2))
console.log(String(b2))

//any type is just converted as it is in String in value