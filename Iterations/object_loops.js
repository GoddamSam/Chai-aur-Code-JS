//objects can be iterated by for in looping structure

const myObj={
    name:'Samaroho',
    age:21,
    sex:'male',
    profession:'software engineer'
}

for(const items in myObj)
console.log(items, myObj[items]);
//as per for in looping structure the keys are displayed


for(const items of myObj)
console.log(items);
//gives error as objects are not iterable through for of looping structure


myObj.forEach(element => {
    console.log(element);
});
//this also gives same error i.e, the object is not iterable though this method

Object.keys(myObj).forEach((keys)=>{
    console.log(`${keys}: ${myObj[keys]}`);
})
//Object.key() or Object.values or Object.entries prototype methods have to be used to get the arrays of the keys or values or both and then the foreach or for in and for of looping structure can be applied
 