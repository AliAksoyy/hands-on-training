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



