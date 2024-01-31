//map is an object which also stores key and value pairs but it is different from objects as map stores values in theor insertion order whereas objects store them in any order
//maps can have any type of value in its key whereas objects can oly have strings or symbols as its key
//length of map can easily be determined while for objects they have to be maintained manually

const myMap=new Map()

myMap.set('Bihar','Patna')
myMap.set('Kerala','Kochi')
myMap.set('Orissa','Jharkhand')

for(const states of myMap)
console.log(states);
//for of looping structure accesses the key value pairs as arrays of length 2 having keys and values

for(const [states,capitals] of myMap)
console.log(`${states} has capital ${capitals}`)
//this is how keys and values can be separated out from the mini arrays

for(const states in myMap)
console.log(states);
//for in looing structure can't be used to iterate over maps so it does not display anything

myMap.forEach((values,keys,arr)=>{
    console.log(keys+" "+values+" "+arr);
})
//forEach acts similarly for maps as in arrays where the first parameter gives the values in key value pair , the second parameter gives the keys while in arrays they gave indices and the third parameter gave the entire array while in maps the reference is returned