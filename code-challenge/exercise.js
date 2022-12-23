//! 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const today = new Date().toLocaleTimeString()
// if(Number(today.slice(0,2))>12){
//     console.log(`Today is : ${today.slice(0,2)-12} PM ${today.slice(2)}`)
// }

// const currentTime = new Date().getDay()
// let newToday;
// console.log(currentTime)

// switch (currentTime){
//     case 1:
//         newToday="Pazartesi";
//         break;
//     case 5:
//         newToday="Friday";
//         break;
//     default:
//         newToday="?";
//         break;
        
// }
// console.log("Today is", newToday);

// !Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// const date = new Date().toLocaleDateString()
// console.log(date.split(".").join("/"));
// let newDate=date.split(".")
// console.log(newDate.slice(1,2).concat(newDate.slice(0,1).concat(newDate.slice(2))).join("-"));


// !Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor

// const a = Number(prompt("1 kenari git"))
// const b = Number(prompt("2 kenari git"))
// const c = Number(prompt("3 kenari git"))

// const s = (a+b+c)/2
// let alan =Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(alan.toFixed(2));

//! Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  Go to the editor
// Click me to see the solution

// let letter="w3resource"
// let newArr=""

// for(let i=letter.length-1; i<letter.length; i++){
//     newArr=letter[i]

// }
// console.log(newArr.concat(letter.slice(0,letter.length-1)))

//! Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  Go to the editor

// function isLeapYear(year) {
//     if ( ( year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0) ) { 
//         console.log(`${year} is a leap year`); 
//     } else {
//         console.log(`${year} is not a leap year`); 
//     }
// }

//! Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor

// const getDateSunday=()=> {
//     let counter=0
//     let newArr=[]
//     for(let i=2014; i<=2050; i++){
//        newArr.push(new Date(`1 Jan ${i}`))
//     }
    
//     newArr.filter((item)=> 
//        item.getDay()==0 && counter++
//     )
//     console.log(counter)
// }
// getDateSunday()

// !Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  Go to the editor


// let random = Math.floor(Math.random()*10 +1)
// console.log(random)

// let guess=+prompt("sayi tahmin ediniz")

// guess===random ? console.log("güzel") : console.log("hata var kardeş")

// !. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor
// Click me to see the solution

// let restDays=new Date()

// console.log(restDays.getMonth()+1);
// console.log(restDays.getDay()+1);
// console.log(restDays.getDate());

// if(restDays.getMonth()+1==12){
//     console.log(31-Number(restDays.getDate()))
// }




