//filter function is similar to forEach method but the difference is  that filter() returns a new array with elements that pass the test implemented by the provided function but  forEach does not return anything(udefined)

const myArray=[1,2,3,4]

let var1=myArray.forEach((items)=>{
    console.log(items);
    return items;
})
console.log(var1);

//forEach() method only displays and doesn't return anything i.e, undefined

let var2=myArray.filter((items)=>{
    console.log(items);
    return items;
})
console.log(var2);

//filter method not only displays but returns the items that satisfies the condition as well

//Both of them have same syntax almost

//Exercise 1--> Display the books whose genre is History

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const historyBooks=books.filter((items)=>{
    if(items.genre=='History')
    return items
  })

  console.log(`The history books are:-${JSON.stringify(historyBooks)}`);

 

  