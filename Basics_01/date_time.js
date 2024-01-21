//Dates and Time
//the time was started counting from 1st Jan 1970
//A new API called temporal is in production for time and date related operations

//declaration type 1
let myDate=new Date()// results in a date object denoting current time in somewhat unrecognisable format
console.log(myDate);
let myNdate=new Date(2023,0,23,5,6,7)//any arbitrary time can also be given....month starts from 0
console.log(myNdate.toLocaleString())//needs to converted to recognisable format so .toLocaleString() is used
let myNdate1=new Date('06-06-2024')//we can also give the input as per our format through a string
console.log(myNdate1.toDateString());

//declaration type 2
let myDate1=Date()
console.log(myDate1);//results in a string value denoting the current time in recognisable format


//Functions of date&time-->

console.log(myDate.toDateString());//gives a string of format  Day Month Date Year

console.log(myDate.toISOString());//returns same new keyword value

console.log(myDate.toJSON());//returns same as new keyword value

console.log(myDate.toLocaleString());//gives the date and time in indian format date/month/year, hrs:min:sec am/pm
//in this function we can further customize the format in which the date is shown by defining objects inside the .toLocaleString() method

console.log(myDate.toLocaleDateString());//gives the date  in indian format  date/month/year


console.log(Date.now())//using .now() gives the difference between now and 1st Jan 1970 in milli seconds

//Function to see whether my birthday is coming or past
const birthDaypassOrNot=function d (){
    let currDate=new Date()
    console.log(currDate.getTime());

    let currYear=currDate.getFullYear()
    let birthDay=new Date(2024,0,1)
    console.log(birthDay.getTime());

    
    if((birthDay.getTime()-currDate.getTime())>0)
    console.log("BirthDay is coming!!!");
    else
    console.log("Belated Happy Birthday!!!");

    return 5

}
birthDaypassOrNot()







