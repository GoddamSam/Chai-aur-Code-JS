//for of-->

const arr=['Bihar','Punjab','Orissa']
for(const states of arr)
console.log(`The state is:-${states}`);

const mystr='Hello I am learning JS'
for(const str of mystr)
{
    if(str===' ') continue
console.log(`The letters in the string is:-${str}`);
}

//for of looping structure returns directly the values of the iterable object

//for in-->

for(const states in arr)
console.log(`The states at index ${states} is:-${arr[states]}`);

//for in looping structure returns the indices of the iterable object


//for each--> It is a iterating method that is an array prototype provided by js for every array
//the method has a callback function which doesn't have a name and it has the following parameters - values, indices and the array it is traversing
//the forEach() method does not return any values i,e, undefined

//method 1 --> callback fn declared using function keyword
arr.forEach(function(states,ind,arr){
    console.log(`The state at index ${ind} is ${states} present in array ${arr}`)
})

//method 2 --> callback fn declared using arrow operator
arr.forEach((items)=>{
    console.log(items);
})

//method 3 --> passing the callback function written separately
function display(items){
    console.log(items);
}
arr.forEach(display)//reference of the function is passed....the function is not called

const arrOfObj=[
    {
        state:'Bihar',
        language:'Bhojpuri'
    } ,
    {
        state:'West Bengal',
        language:'Bengali'
    } ,
    {
        state:'Maharashtra',
        language:'Marathi'
    }
]
arrOfObj.forEach((items)=>{
    console.log(items.language);
})
//forEach mathod can be used for iterating over objects and their properties as well in an array of objects

