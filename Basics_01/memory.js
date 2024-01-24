//Two types of memory are used-->Stack and Heap

//Stack is used to store primitive data and the references or variable names of non primitive types
//In stack the copies of the original values are given so any change takes place in the copy separately

let name1="Samaroho"

let name2=name1
name2="Riju"

console.log(name1)
console.log(name2)


//Heap is used to store the non primitives like objects, functions and arrays
//In heap the reference of the objects in the heap memory is given so any change from whichever variable reflects on the original value

let user1={
    name:"Samaroho",
    upi:"csam@oksbi"
}

let user2=user1
user2.upi="csam@okhdfc"

console.log(user1)
console.log(user2)