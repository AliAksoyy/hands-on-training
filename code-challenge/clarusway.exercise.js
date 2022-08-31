// **********************1*******************************
// Question-1
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const hesapla = (nums, target) => {
//   let newNums = [];

//   for (let i = 0; i < nums.length; i++) {
//     let fark = target - nums[i];

//     for (let j = 0; j < nums.length; j++) {
//       if (fark === nums[j]) {
//         newNums.push(nums.indexOf(nums[i]));
//         newNums.push(nums.indexOf(nums[j]));
//         return newNums;
//       }
//     }
//   }
// };
// hesapla([2, 7, 11, 15], 9);

// *************************2*************************

// Question-2
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// const palindrome = (num) => {
//    const a =  Number(num.toString().split("").reverse().join(""))

//    if(a===num) {
//     console.log("palindrome")
//     return true
//    }else {
//     return false
//    }
// }
// console.log( palindrome(122))

// Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// let roman = {
//     I :1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000

// };

//         const hesapla =(rom) => {

//             let total = 0
//             const arr = rom.split("");
//             console.log(arr)

//             for(let i = 0; i<arr.length; i++ ) {
//                 if(roman[arr[i]] < roman[arr[i+1]]) {
//                     total -= roman[arr[i]]
//                 }else {
//                     total += roman[arr[i]]
//                 }
//             }
//              return total
//         }
//         console.log( hesapla("MCMXCIV"))

// ***********************4****************
// /! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// const validNumber = () => {

//   let num = prompt("Enter a valid number") 
//   if(Number(num)) {
//     console.log("It is a valid number")
//   } else {
//     return validNumber()
//   }
//   return typeof num
// }
// console.log( validNumber())

//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

// const ebobBul = (num1,num2) => {

//   let ebob ;
//       if(num1 ===0 || num2 ===0) {
//         return "Please enter a valid number"
//       }
//       for(let i = 0; i<= num1; i++) {
//         if(num1 %i === 0 && num2 % i === 0) {

//           ebob = i
//         }
//       }

//   return ebob
// }
// console.log( ebobBul(4,12))


//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// const tamBolen =(num)=> {
//   let arr = []

//   for(let i = 0; i<= num; i++) {
//     if(num% i ===0) {
//       arr.push(i)
//     }
//   }


//   return  arr
// } 
// console.log(tamBolen(12))

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

  // const faktoriyel = (num) => {

  //     if(num<0) return -1

  //     if(num ===0) {
  //       return 1
  //     } else {
  //       return num* faktoriyel(num-1)
  //     }

    
  // }

  // console.log( faktoriyel(6))
//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

const divisible = () => {
  let arr = []

  for(let i = 100; i<1000 ; i++) {
    if(i%3 === 0 && i % 5 === 0) {
      arr.push(i)
    }
  }
  return arr
}
 console.log( divisible())

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.


//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game. 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.



// 2. Bölüm Functions

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.


//! Q-5
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);
