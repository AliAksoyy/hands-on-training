//soru 1

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

//Note: If the number is a multiple of both 3 and 5, only count it once.

//cevap 1

// const sumOfNumbers = (num) => {
//     let result = 0
//     if(num<0){
//         return 0
//     }else {
//         for(let i =0; i<num; i++){
//             (i % 3 === 0) || (i % 5 === 0) ? result+=i : result+=0
//         }
//         return result
//     }
    
// }

// console.log(sumOfNumbers(15))

// soru 2

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// cevap 2

// const isArmstrongNumber = (num) => {

//     const arr =num.toString().split("")
//     const len = arr.length;
//     let result =arr.map((item)=> Number(item)).reduce((acc,item)=>  acc+=item**len,0)
    
//     return result === num ? true : false



// }
// console.log(isArmstrongNumber(1652))

// soru 3

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// cevap 3

// const filterList = (arr) => {
//   return   arr.filter((item)=> typeof item === "number")
// }

// console.log(filterList([1,2,'aasf','1','123',123]));

// soru 4

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// cevap 4

// const member =(arr) => {

//    return  arr.map((item)=> item[0]>=55 && item[1]>7 ? "senior" :"open")

// }
// console.log(member([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

// soru 5

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// cevap 5

// const spinWords =(str) => {

//     return str.split(" ").map((item)=>item.length>=5 ? item.split("").reverse().join("") : item).join(" ")

// }
// console.log(spinWords("Hey fellow warriors"));

// soru 6 

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// cevap 6

// const countString = (str) => {
//    let obj ={}
//     let arr =str.split("")
//     for(let i in arr) {
//         if(!Object.keys(obj).includes(arr[i])){
//             obj[arr[i]]=1
//         }else {
//             obj[arr[i]] = arr.slice(i).includes(arr[i]) ? Number(obj[arr[i]]) +1 : obj[arr[i]]
//         }
//     }
//     return obj
// }
// console.log(countString("kırıkkale"))




let a = +prompt("sayı")
let asal=true
if(a<=1){
    alert("sayı 1 den bbüyük olmalı")
}else {
    for(let i=2; i<a; i++){
        if(a%i===0){
            asal=false;
            break;
        }
    }
    let sonuc= asal ? "asal" : "asal değil"
    console.log(`${a} ${sonuc}`)
}
