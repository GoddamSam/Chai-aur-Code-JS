//object de -structuring or array de-structuring is done to easily handle the big attribute names of the object and use them with ease and agility
//it helps in reducing the number of lines of code by breaking down the complex attributes into smaller manage

let ob1={
    name:"Sam",
    age:21,
    sex:'male',
    status:'student',
    stream:'ECE',
    isDisabledorNot:false

}

let {isDisabledorNot}=ob1
console.log(isDisabledorNot)//so without mentioning the object name and dot operator we can use the attributes directly

let {isDisabledorNot:isD}=ob1
console.log(isD);//we can also give shorter aliases to big atributes and use them.


//JSON
//earlier the data from apis used to come in xml format which was complex
//now it comes in json format which is lightweight and easy to parse using javascript objects

//format-->

/*{
    key:values
    ...
    ...
    ...
}*/

//or

/*
[
    object 1{

    }
    object 2{

    }
    ...
    ...
    ...
]
*/