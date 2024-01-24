//arrays

const arr=[1,2,3,4,5,true,"Sam"]

console.log(arr[2]);

//arrays in js are resizable
// copy operations on array gives shallow copies i.e, the copies share the same reference as the original one

const arr1=new Array(1,2,3,true,"Sam")
console.log(typeof arr1);

//Array methods

//push-->adds elements into array
arr1.push(67)
console.log(arr1);

//pop-->deletes last element in array
arr1.pop()
console.log(arr1);

//unshift-->adds element at the beginning
arr1.unshift(3)
console.log(arr1);

//shift-->deletes elements from the beginning
arr1.shift()
console.log(arr1);

//includes-->whether an element is there in array or not
console.log(arr1.includes(2));
console.log(arr1.includes(9));

//indexOf-->gives the index of the character
console.log(arr1.indexOf(2,-1));

//join-->concats the array with other elements and converts the whole into a string
console.log(arr1.join(arr));

//slice-->extracts a part of the array without altering the original array
console.log(arr1.slice(1,3));
console.log(arr1);

//splice-->extracts a part of the original array upto the given last index and alters the original array by completely removing the spliced part
console.log(arr1.splice(1,3));
console.log(arr1);

//concat--> joins one array with other but returns a new array
const arr2=arr.concat(arr1)
console.log(arr2);


//spread operator(...[array])-->converts array elements into individual elements
console.log([...arr,...arr2]);

//flat(depth upto which flattening is to occur)-->converts the array sub elements into outer array elements
const myArr=[1,2,3,[4,5,[6,7]]]
console.log(myArr.flat(Infinity));

//isArray-->checks whether an element is array or not
console.log(Array.isArray(8));

//from-->converts iterable or indexed elements into arrays and if some non-iterable element is given where conversion is confusing like key:value pairs as to make array of key or values then empty array is returned
console.log(Array.from(789));
console.log(Array.from({id:768}));


//of-->converts a set of elemets into array unlike from where a single value was divided into a array
console.log(Array.of("Sam",7,true));












