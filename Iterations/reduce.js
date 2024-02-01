//reduce function is used to perform cummulative operations on the array elements and return a result
//it takes a callback function and an initial value as an argument
//the callback function takes an accumulator where the cummulative results are stored and an index variable for traversing array elements

//this function is particularly useful in shooping cart applications where we need to compute the total price of all the items

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalprice=shoppingCart.reduce((acc,courses)=>{
    return acc+courses.price
},0)

console.log(totalprice);

