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

// ?99999999999999999999999999999999   29.agusts dersi ***********************
// Write a JavaScript code to find the area of a triangle.

// pseudocode:
// a, b and c sides of a triangle
// assume bottom = c
// semiperimeter = s
// s = (a + b + c) / 2
// (s(s-a)(s-b)(s-c))**0.5

// const areaOfTriangle = (a, b, c) => {
//     let s = (a + b + c) / 2;
//     return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
// };

// console.log(areaOfTriangle(3, 4, 5));

// Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.

// pseudode:
// if given number is greater than 20 or not.
// if false 20 - given number
// if true abs((20 - given number) * 2) or multiply * (-1)

// const absoluteResult = (num) => {
//     if (num < 20) {
//         return 20 - num;
//     } else {
//         return Math.abs((20-num) * 2);
//     }
// };

// console.log(absoluteResult(15));
// console.log(absoluteResult(35));

// Write a JavaScript program that takes two integers from a user and displays the larger.

// pseudocode:
// get two numbers
// compare them with if first greater than second one 
// compare them with else first equals or smaller than second one 

// let number1 =  5;//prompt('pls enter a number');
// let number2 =  6;//prompt('pls enter second number');

// const largerNumOfTwo = (number1, number2) => {
//     if (number1 > number2) {
//         return `${number1} is greater than ${number2}`;
//     } else if (number1 === number2) {
//         return `${number1} equals ${number2}`;
//     } else {
//         return `${number2} is greater than ${number1}`;

//     }
// };

// console.log(largerNumOfTwo(5, 6));


// Write a JavaScript program that takes 3 integers from a user and displays the largest.

// const largestNumOfThree = (number1, number2, number3) => {  // array ise spread ile açmak gerekir
//     // return Math.max(...[number1, number2, number3]);
//     let largest;


//     if (number1 > number2 && number1 > number3) {
//         largest = number1;
//     }

//     else if (number2 > number1 && number2 > number3) {
//         largest = number2;

//     }
//     else {
//         largest = number3;
//     }
//     return `${largest} is the largest`;
// };

// console.log(largestNumOfThree(2, 6, 9));


// Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.
// Example1: 
// number1 = 5, number2 = -4, number3 = 2 ⇒ product is -40. Then the sign is “-”
// Example2: 
// number1 = -5, number2 = -4, number3 = 2 ⇒ product is 40. Then the sign is “+”

// pseudocode:
// if product is greater than zero sign is + else -

// const multiplyOfThreeNum = (numee1, numee2, numee3) => {
//     let product = numee1 * numee2 * numee3;
//     return product > 0 ? "the sign is +" : "the sign is -";
// };

// console.log(multiplyOfThreeNum(1, -8, 75));

// Write a JavaScript program to check whether a given integer is in the range 50 to 100.

// pseudocode:
// if num is greater than 50 && is smaller than 100 => num is in the range 50 to 100;
// else num is not in the range 50 to 100;

// const isInTheRange50To100 = (numberee) => {
//     if (numberee > 50 && numberee < 100) {
//         return `${numberee} is in the range 50 to 100`;
//     } else {
//         return `${numberee} is NOT in the range 50 to 100`;
//     }
// };

// console.log(isInTheRange50To100(51));
// console.log(isInTheRange50To100(49));

// Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

// Example:
// number1 = 5, number2 = 6, operand = * ⇒ result is 5 * 6 = 30
// pseudocode:
// parameters a, b, operand
// switch case

// const calc = (a, b, operand) => {
//     let result;

//     switch (operand) {
//         case '+':
//             result = a + b;    
//             break;
//         case '-':
//             result = a - b;
//             break;
//         case '/':
//             result = a / b;    
//             break;
//         case '*':
//             result = a * b;    
//             break;
    
//         default:
//             return 'invalid process'; 
//     }
//     return result;
// };

// console.log(calc(2, 9, '+'));
// console.log(calc(2, 9, '-'));
// console.log(calc(2, 9, '/'));
// console.log(calc(2, 9, '*'));
// console.log(calc(2, 9, 'ğ'));


// Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.
// Example1:
// input = Tuesday ⇒ output: Tuesday is a weekday
// Example2:
// input = Saturday⇒ output: Saturday is not a weekday

// const isWeekday = (day) => {
//     let res;

//     switch (day.toLowerCase()) {
//         case "monday":
//         case "tuesday":
//         case "wednesday":
//         case "thursday":
//         case "friday":
//             res = `${day} is a weekday`;

//             break;
//         case "saturday":
//         case "sunday":
//             res = `${day} is NOT a weekday`;

//             break;

//         default:
//             return 'invalid process';
//     };
//     return res;
// };

// console.log(isWeekday('MONDAY'));
// console.log(isWeekday('Saturday'));
// console.log(isWeekday('osman'));


// Write a JavaScript program that tells the user provided number is odd or even.

// pseudocode: 
// num % 2

// const oddOrEven = (x) => {
//     // return x % 2 === 0 ? 'even' : 'odd';
//     return x % 2 ? 'odd' : 'even';
// };

// console.log(oddOrEven(2));
// console.log(oddOrEven(3));
// console.log(oddOrEven(-1));


// Write a JavaScript program to find a value that is nearest to 100 from two different given integer values.

// pseudocode:
// smaller result difference from 100 is the nearest

// const nearestNum = (y, z) => {
//     let diffY = Math.abs(100 - y);
//     let diffZ = Math.abs(100 - z);

//     if (diffY > diffZ) {
//         return `${z} is the nearest to 100`;
//     } else if (diffY === diffZ) {
//         return `they are equally close`;
//     } else {
//         return `${y} is the nearest to 100`;
//     }
// };

// console.log(nearestNum(25, -96));
// console.log(nearestNum(95, 105));
// console.log(nearestNum(98, 99));




// Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year)

// pseudocode:

// (0-99) only divisible by 4 --> leap year
// (100-400) divided by 4 and  if not divisible by 100 --> leap year
// if divisible by 100 and divisible by 400 --> leap year


// first way:
// const isLeapYear = (year) => {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(`${year} is a leap year.`);
//         } else {
//             console.log(`${year} is not a leap year.`);
//         }
//     } else {
//         if (year % 4 === 0) {
//             console.log(`${year} is a leap year.`);
//         } else {
//             console.log(`${year} is not a leap year.`);
//         }
//     }
// }

// isLeapYear(64);
// isLeapYear(1900);
// isLeapYear(2000);
// isLeapYear(1912);

// // second way:
// function leapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);


//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// const validNumber = () => {
//     let num = prompt("Enter a valid number")

//     if (Number(num)){
//         console.log("It is a valid number") 
//     } else {
//         return validNumber()              // recursion
//     }
// }

// console.log(validNumber());


//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

// const findGcd = (num1, num2) => {
//     let gcd;

//     if (num1 === 0 || num2 === 0){
//         return 'Please enter a valid number'
//     }

//     for (let i = 1; i <= num1 && i <= num2; i++){
//         if (num1 % i === 0 && num2 % i === 0){
//             gcd = i;
//         }
//     }

//     return gcd
// }

// console.log(findGcd(3,6));

//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// const factor = (num) => {
//     let arr = []

//     for (let i = 1; i <= num; i++){
//         if (num % i === 0){
//             arr.push(i, -i)
//         }
//     }

//     return arr;
// }

// console.log(factor(12));
// console.log(factor(13));

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

// const factorial = (num) => {
//     if (num < 0) return -1;

//     if (num === 0){
//         return 1
//     } else {
//         return num * factorial(num - 1)
//     }
// }

// console.log(factorial(3));

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

// const divisible = () => {
//     let arr = []

//     for (let i =100; i <= 1000; i++){
//         if (!(i % 3) && !(i % 5)){
//             arr.push(i)
//         }
//     }

//     return arr
// }

// console.log(divisible())

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.

// const multiplication = () => {
//     let arr = []
    
//     for (let i = 1; i <= 10; i++){
//         arr.push(`multiplication table of ${i}`)
//         for (let k = 0; k <= 10; k++){
//             arr.push(`${i} * ${k} = ${i*k}`)
//         }
//     }

//     return arr
// }

// console.log(multiplication())

//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game. 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

// const powerball = () => {
//     let powerball = Math.floor(Math.random() * 26) + 1
//     let whiteball = []

//     for (let i = 1; i <= 5; i++){
//         let random = Math.floor(Math.random() * 69) + 1
//         whiteball.push(random)
//     }

//     return `${whiteball.join(', ')}, ${powerball}`
// }

// console.log(powerball())

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.
// ?Examples Amount 1000 ve rate = 1.5

// const currency = (amount,rate) => {
//   return amount*rate
// }
// console.log( currency(1000,1.5))

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

// const type = (x) => {
//   return typeof x
// }
// console.log( type("ali"))
// console.log( type(2))
// console.log( type(true))

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

// const times = (str,char) => {

//     let count = 0;
//     for(let i = 0 ;i<str.length; i++) {
//       if(str[i] === char) {

//         count++
//       }

//     }
//     return `${char} occurs ${count} times in ${str}`
// }
// console.log(times("Clarusway", "a"))

// 2 çözüm

// const times = (str,char) => {

//   return str.split(char).length -1
// }
// console.log(times("Clarusway", "a"))


//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.
//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

// const perfectNums = () => {
//     let arr = []

//     for (let i = 1; i <= 1000; i++){
//         sum = 0;

//         for (let k = 1; k < i; k++){
//             if (!(i % k)) {
//                 sum += k;
//             }
//         }

//         if (sum === i){
//             arr.push(i)
//         }

//     }

//     return arr
// }


// console.log(perfectNums());

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

// ********************************************************
// !2222222222222222222222222222222222222222222222222222
// ? 01 .09 ders challenge çalışması*******************

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];


// Expected Output :
// "Red, Green, White, Black"

// const arrToString = (arr)=>{
//     // return arr.toString()
//     return arr.join(", ")
// }

// console.log(arrToString(["Red", "Green", "White", "Black"]));
// console.log(arrToString(["2","44","999"]));

//**********************************SORU 2************************************** */


// Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers. 
// For example, if you accept 025468 the output should be 0-254-6-8.
// let num="025468"
// num=num.split("")
// console.log(num);
// const insertDash=(num)=>{
//     console.log(num)
//     let result=""
//     for(let i=0;i<num.length;i++){
//         if(num[i]%2==0 && num[i+1]%2==0){
//             result+=num[i]+ "-"
//         }else{
//             result+=num[i]
//         }
//     }
//     return result
// }

// console.log(insertDash("025468"));
// // console.log(insertDash("669754462"));


//***********************************SORU3************************************ */

// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// const sortArr=(arr)=>{
//     // console.log(arr)
//     // arr.sort((a,b)=>b-a)
//     // console.log(arr);
//     return arr.sort().reverse()
// }

// // console.log(sortArr([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]))
// console.log(sortArr([ "aa","bb","bc","dd","ad" ]))

//********************************SORU 4**************************************** */

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// console.log(arr1.sort());

// const mostFrequent=(arr)=>{
//     let most;
//     let repetition=0;
//     let count;
//     arr=arr.sort()
//     console.log(arr)
//     for(let i=0;i<arr.length;i++){
//         count=0
//         for(let k=i;k<arr.length;k++){
//             if(arr[i]==arr[k]){
//                 count++
//             }
//         }
//         if(count>repetition){
//             repetition=count
//             most=arr[i]
//         }
//     }
//     return `${most} en çok tekrar eden sayıdır. ${repetition} kere tekrar etmiştir`
// }

// console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))


//-------------------------------------------------solution 2-----------------------------------
// const mostFrequent=(arr)=>{
//     // console.log(arr)
//     let dict={}
//     for(let i=0;i<arr.length;i++){
//         if(!dict.hasOwnProperty(arr[i])){
//             dict[arr[i]]=1
//         }else{
//             dict[arr[i]]++
//         }
//     }
//     // console.log(dict)
//     let result=Object.entries(dict)
//     // console.log(result)
//     result.sort((a,b)=>a[1]-b[1])
//     // console.log(result[result.length-1])
//     return `${result[result.length-1][0]} en çok tekrar eden sayı.${result[result.length-1][1]}  kere tekrar etmiştir`

// }

// console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))


//----------------------------solution 3-------------------------------
// arr2 = [3, "a", "a", 3, "a", 3, 3, "a", "a", "b"];
// arr2.sort();

// let count = 1;
// let most = 0;
// let mostItem = "";
// for (i = 0; i < arr2.length; i++) {
//   if (arr2[i] === arr2[i + 1]) {
//     count += 1;
//   } else {
//     if (count > most) {
//       most = count;
//       mostItem = arr2[i];
//     }
//     count = 1;
//   }
// }
// console.log(`${mostItem} : (${most} times)`);


//***********************************SORU 5******************************************* */

// Write a JavaScript program that accepts a string as input and swap the case of each character. 
// For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// toLowerCase()
// toUpperCase()

// const swapCase= (str)=>{
//     let arr=str.split(" ")
//     console.log(arr)
//     let result =""
//     for(let item of arr){
       
//         for(let k=0;k<item.length;k++){
//             if(item[k]==item[k].toLowerCase()){
//                 result+=item[k].toUpperCase()
//             }else{
//                 result+=item[k].toLowerCase()
//             }
//         }
//         result+=" "
        
//     }
// // console.log(result)
// return result

// }

// console.log(swapCase('The Quick Brown Fox'));

//---------------------------------------------------solution 2---------------------------
// let str1="The Quick Brown Fox"
// const swapCase1=(str)=>{
//     let result=""
//     for(let i=0;i<str.length;i++){
//         if(str[i]==str[i].toLowerCase()){
//             result+=str[i].toUpperCase()
//         }else{
//             result+=str[i].toLowerCase()
//         }
//     }
//     return result
// }

// console.log(swapCase1(str1))

///////////////////////////solution 3


// let str="The Quick Brown Fox"
// const swapCase2=(str)=>{
//     // console.log(str[3].charCodeAt())
//     let result=""
//     for(let i=0;i<str.length;i++){
//         if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90){
//             result+=str[i].toLowerCase()
//         }else if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
//             result+=str[i].toUpperCase()
//         }else{
//             result+=str[i]
//         }
//     }
// return result
// }

// console.log(swapCase2(str))


//****************************solution 4 */********************************* */
// let str1="The Quick Brown Fox"
// const swapCase=(str)=>{
//     let result=""
//     for(let i=0;i<str.length;i++){
//         if(str[i].match(/[A-Z]/)){
//             result+=str[i].toLowerCase()
//         }else if(str[i].match(/[a-z]/)){
//             result+=str[i].toUpperCase()
//                     }else{
//                         result+=str[i]
//                     }
//     }
// return result
// }

// console.log(swapCase(str1))


//-----------------------------------------solution 5----------------------------
// const swapCase=(str)=>{
//     let arr = str.split('')
//     console.log(arr);
//     return arr.map(x => x === x.toLowerCase() ? x = x.toUpperCase() : x = x.toLowerCase()).join('')
// }
// console.log(swapCase('The Quick Brown Fox'))



// !111111111111111111111 DERS 10 ARRAY2-1111111111111111

// //?-------------- ÖRNEK -------------------
// const dizi = [-5, 15, 22, -4, 45, 78];

// const negatifler = []
// const pozitifler = []

// const dizilereAyır = (n) => {
//     for(let i = 0; i<n.length; i++) {
//         if(n[i] <0) {
//             negatifler.push(n[i])
//         } else {
//             pozitifler.push(n[i])
//         }
//     }
//     return dizi
// }
// console.log( dizilereAyır(dizi))
// console.log(negatifler)
// console.log(pozitifler)



// //?-------------- ÖRNEK -------------------
// //? Dizideki notlarin ortalamasini hesaplayiniz.
// const notlar = [55, 77, 23, 89, 100];

// let toplam = 0



// for(let i= 0; i<notlar.length; i++) {

//     toplam += notlar[i]
// }
// console.log("ORTALAMA :" + " " +toplam / notlar.length)

// //*-------------------------------------------------------
// //* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
// //* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
// //* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
// //* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
// //* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
// //*--------------------------------------------------------

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (arr,search) => {
//     let counter = 0
//     for(let i in arr) {
//         if(search === arr[i]) {
//             counter++
//         }
//     }
//     if(!counter) {
//         return `${search} can not be found`
//     } else {
//         return `${search} found ${counter} times`
//     }
// }
// const name = prompt("Please enter a name").toLowerCase()
// console.log( findStudents(students,name))

// //?-------------- ÖRNEK -------------------
// ? For of ile yukarida ki soruyu çözme

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (arr,search) => {
//     let counter = 0
//     for(let item of arr) {

//         search === item && counter++
//     }
//     return  !counter ?
//     `${search} can not be found`
//     : `${search} found ${counter} times`

// }

// const name = prompt("Please enter a name ?").toLowerCase()
//  console.log(    findStudents(students,name))

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const prices = [100, 250, 50, 89];
// prices.forEach((p) => console.log(p))

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
// const prices = [100, 250, 50, 89];
// let sum = 0
// prices.forEach((a) => sum +=a)
// console.log("SUM : " ,sum)

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// const prices = [100, 250, 50, 89];
// let total = 0
// prices.forEach((price,index,arr) => {
//     total +=price
//     console.log(`${index +1} iteration value : ${total} `)
//     const newArr =arr[index] = Math.trunc(price *1.1)
//     console.log(newArr)

// })
// console.log(prices)


//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const bigNames = names.map((name) => name.toUpperCase())
// console.log(names,bigNames)


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

// const euro = 18.23;
// const dolar = 18.19;
// const tlPrices = [100, 150, 100, 50, 80];

// console.log(tlPrices.map((tl) => Number((tl / dolar).toFixed(2))))
// const a =tlPrices.map((ali) => Number((ali /euro).toPrecision(3)))
// console.log(a)


//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

// const products = [
//   "Iphone12",
//   "samsungS20",
//   "lenovo",
//   "macbook pro",
//   "mac air",
//   "Galaxy tablet",
//   "macbook",
//   "Iphone12",
//   "mac air",
//   "lenovo",
//   "macbook pro",
//   "samsungS20",
// ];
// //?For UpperCase
// // products.map((p,i,a) => (a[i] = p.toUpperCase()))
// // console.log(products)
// //?For Capitilize
// const c =products.map((p,i,arr) => arr[i] =p[0].toUpperCase() + p.slice(1))
// console.log(c)


// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// //?-------------- ÖRNEK -------------------
// //? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

// const bigThan = salaries.filter((s) => s>10000)
// console.log(bigThan);
// console.log(salaries)

// const range = salaries.filter((a) => a>=6000 && a<10000)
// console.log(range)


//?----------------Ornek
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const less9000 = salaries
// .filter((m) => m<9000)
// .map((a) => a*1.1)
// .forEach((s) => console.log(s))
 
//?----------------Karışık Array Ornekleri
// !111111111111111111111 DERS 9 ARRAY-1111111111111111


// const isimler = ["ahmet", "ismet", "can", "canan", "matheww"];
// const a = new Array(1,2,3)
// console.log(a[a.length -1])
// a[a.length -1]++
// console.log(a)
// console.log(isimler)
// console.log(isimler.at(-1))
// console.log(isimler[isimler.length-1])
// console.log(typeof isimler,isimler)
// console.log(isimler.length)
// const arabalar = new Array("tofaş","BMW")
// console.log(arabalar)
// const esyalar = Array.of("a","b")
// console.log(esyalar)

// console.log(esyalar[0])
// esyalar[0] ="c"
// console.log(esyalar)
// const karısık =["a", "b", a, isimler]
// console.log(karısık)
// console.log(karısık[2][2])
// karısık[2][2]++
// console.log(karısık)

//?---------------- Ornekleri


// const arabalar = ["BMW", "Mercedes", "Fiat", "Anadolu"];

// const a = arabalar.pop()
// console.log(a,arabalar)

// const b = arabalar.push("12")
// console.log(b,arabalar)
// arabalar.unshift("11")
// console.log(arabalar)
// const c = arabalar.shift()
// console.log(c)

// arabalar.reverse()
// console.log(arabalar)

// arabalar.splice(0,0,"ali","beyda")

// console.log(arabalar)
// arabalar.splice(0, 1, "ali", "beyda");
// console.log(arabalar);

// const x = [1,4,7,3,9,0]
// console.log(arabalar)
// x.sort((a,b) => b-a)
// console.log(x)

// const array1 = [1,2,3,4]
// array1.fill(0)
// console.log(array1)
// array1.fill(2,2,4)
// console.log(array1)


//?---------------- Ornekleri

// const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];


// console.log(sayilar1.includes(3))
// console.log(sayilar1.includes(5))
// console.log(sayilar1.indexOf("2"))
// console.log(sayilar1.indexOf(2))
// console.log(sayilar1.lastIndexOf(2))

// console.log(sayilar1.join(" "))
// console.log(sayilar1.slice(-2))
// console.log(sayilar1)

// console.log(sayilar1.concat(1,2,"2", [1,2]))

// !111111111111111111111 DERS 8 STRİNG METHOD 1111111111111


//?---------------- Ornekleri


// const yasArray = [18, 22, 78, 34, 78, 79, 15];

// const b =  yasArray.every((a) => a>18)
// b ? console.log("doğru") : console.log("yanlış")
// console.log( yasArray.some((a) => a>18))

// console.log( yasArray.find((a) => a>=30))
// console.log( yasArray.findLast((a) => a>=30))
// console.log( yasArray.findIndex((a) => a>=30))

// const a = "ali aksoy ali"

// console.log(a.charAt(6))
// console.log(a.charAt())
// console.log(a.charAt(a.length-1))
// console.log(a.includes("ali"))
// console.log(a.indexOf("a"))

// console.log(a.search("l"))
// console.log(a.replace("ali", "ayse"))
// console.log(a.replaceAll("ali","bwyda"))
// console.log(a.replace(/ali/gi, "feyza"))

// console.log(a.slice(2,8))
// console.log(a.substring(1,3))

// console.log(a.split(" "),typeof a)

// let oku = "Oku Baban gibi, saf olma, saf olma";

// console.log(oku.replace("saf olma", "basarili ol"))

// console.log(oku.replace(/saf olma/gi, "basarili ol"))

// console.log(oku.replace(/BAsarılı/gi , "saf olma"))

// let degistir = "daglar daglar yol ver gecem..";

// console.log(degistir.replaceAll("daglar", "yollar"))

// let degistir2 =
//   "No woman, no cry" +
//   " No woman, no cry, eh, yeah" +
//   " Little darling, don't shed no tears" +
//   " No woman, no cry, eh";

//   console.log(degistir2.replace(/no/gi, "hayırr"))

// const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";
// console.log(veysel.slice(1))
// const tarkan = "Gel gunduzle gece olalim";
// const a = tarkan.split(" ",)
// console.log(a)
// console.log(tarkan)

// const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

// arabalar.splice(3, 1, "Honda", "Toyota");
// console.log(arabalar);


// !111111111111111111111 DERS 7 FUNCTİON-2 111111111


// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hesapla = (r,h) => r*r*h*Math.PI
// console.log(`${r} ve ${h} değeri =>> ${hesapla(r,h)}` )


//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//  1 çözüm

// const fibonacci =(num) => {
//     let toplam = 0
//     let fib1 = 1
//     let fib2 = 1
    
//     for(let i = 2; i<num; i++) {
//         toplam = fib1 + fib2
//         fib1 = fib2
//         fib2 =toplam

//     }
//     return fib2
// }
// console.log("fibonancı" + " " + fibonacci(8))

// 2çözüm recursive

// const fibo =(n) => {

//     if(n<=0) {
//         return 0
//     } else if(n ===1 || n===2) {
//         return 1
    
//     } else {
//         return fibo(n-1) + fibo(n-2)
//     }
// }
// const n = +prompt("n gir")
// console.log(`FİBO(${n}) = ${fibo(n)}`)


// !111111111111111111111 DERS 6 FUNCTİON- 111111111


/* ORNEK4:
//*****************************************************/

// function tekCift(n) {
//     return n %2 ? " tektir" : " cift"
// }


// console.log(tekCift(5));
// console.log(tekCift(2));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

// const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {

//     let enBuyuk= 0
//     if(n1>n2 && n1>n3) {
//         enBuyuk = n1
//     }else if (n2>n1 && n2>n3) {
//         enBuyuk = n2
//     }else {
//         enBuyuk = n3
//     }
//    return enBuyuk
// }

// console.log( buyukBul(-13,-5,-6))

// !111111111111111111111 DERS 5 LOOPS- 111111111

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

// const n = Number(prompt("Bir sayi girniz:"));
// let t = 0
// for(let i = 1; i<=n; i++) {
//   t += i
// }
// console.log(t)

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

// for(let i = 0; i<10; i++) {

//     const rast = Math.round(Math.random() *100)
//     console.log(rast);

// }

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
// let asal = true;

// if (sayi <= 1) {
//   alert("Sayi 1'den buyuk olmalidir.");
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       asal = false;
//       break;
//     }
//   }

//   const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
//   console.log(`${sayi} ${sonuc}`);
// }


//?ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.




// const not = +prompt("sayı gir")
//  while(not<0 || not>100) {
//     alert("aralık yanlış")
//     not = +prompt("yeniden gir")
//  }
//  console.log("girdiğibiz not :",not)

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

// let not1;
// do {
//   not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
//   if (not1 < 0 || not1 > 100) {
//     console.log("Not 0-100 arasinda olmaldir.");
//     alert("Not 0-100 arasinda olmaldir.");
//   }
// } while (not1 < 0 || not1 > 100);

// console.log("Giridiginiz Not:", not1);

//? Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.


// let hak = 5;
// const rastgele = Math.round(Math.random() * 100);
// console.log(rastgele);

// let tahmin;
// do {
//   tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
//   hak -= 1;
//   if (tahmin === rastgele) {
//     console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
//     break;
//   } else if (tahmin < rastgele) {
//     console.log("ARTTIR ⬆️");
//   } else {
//     console.log("AZALT ⬇️");
//   }
// } while (hak > 0);

// if (tahmin !== rastgele) {
//   console.log("Uzgunuz oyunu kaybettiniz 😔😔");
// }

// !111111111111111111111 DERS 4 CONDITIONS 111111111

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayi = Number(prompt("Bir sayi giriniz:"));
// if(sayi>0) {
//     console.log(`${sayi} pozitif`)
// }else {
//     console.log(`${sayi} negaitif`);
    
// }

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// let enByuk = n1
// if(n2>enByuk) {
//     enByuk = n2
// }else if (n3>enByuk) {
//     enByuk = n3
// }
// console.log(enByuk)

//? ORNEK5: Kaldi-Gecti
// const not = +prompt("Notunuzu giriniz:");
// let sonuc = not >= 50 ? "geçti" : "kaldı"

// !111111111111111111111 DERS 3 OPERATORS 111111111


//?1. Write a JavaScript code to calculate multiplication and division of two numbers (input from user). : 5min

// let num = 4
// let num1 = 6
// console.log(`${num} x ${num1} is ${num*num1}, \n ${num} ${num1} is divide ${num / num1}}`)


//? 2. area calculation: 7min  area of any triangle (given only sides) ---area of rectangle (given only sidesarea of circle (given only radiusperimeter of circle (given only radius)pi sayisi olarak :  Math.PI / 3.141592653589793


// let side1 = +prompt('Enter first side');
// let side2 = +prompt('Enter second side');
// let side3 = +prompt('Enter third side');

// const perimeter = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(
//   perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)),
// );

// console.log(`Area of triangle is ${area}, perimeter is ${perimeter}.`);


//? 3. temperature convertion : 8min celcius to fahrenheit fahrenheit to celcius



// let cTemp = +prompt('Enter celcius temperature');
// const cToFahr = (cTemp * 9) / 5 + 32;
// console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

// let fTemp = +prompt('Enter fahrenheit temperature');
// const fToCel = ((fTemp - 32) * 5) / 9;
// console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);


//?  * 4. print today's date separately :8min
//?  * day of month is 11
// ? * month of year is 8
//?  * year is 2022
 
// const today = new Date();
// console.log(today);

// console.log(today.getFullYear());
//? * use today (.) for needed functions

// console.log(`day of month is ${today.getDate()}`);
// console.log(`month of year is ${today.getMonth() + 1}`);
// console.log(`year is ${today.getFullYear()}`);

//?  5. check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. : 10min

// ? 22 32 42 => true
// ? 15 24 45 => true
// ? 33 34 35 => false


//? stage is yours
// ?There are at least 2 numbers having same first digit: true/false



// let p = +prompt('Enter first number');
// let q = +prompt('Enter second number');
// let r = +prompt('Enter third number');

// const result = p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;

// console.log(`There are at least 2 numbers having same first digit: ${result}`);

// **********************************************05.09  ders challenge***********************************

//? 1) - verilen sayının basamak değerlerini birbiri ile çarpacağız. kaç defada tek haneli basamağa ulaşıyor?
//? 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//? 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//? 4 --> 0 (because 4 is already a one-digit number)

// 1çözüm

// let tekhane = (sayi) => {
//   sayi = "" + sayi;
//   sayi = sayi.split("");
//   let toplam = 1;
//   let counter = 0;
//   while (sayi.length > 1) {
//     for (let i = 0; i < sayi.length; i++) {
//       toplam *= sayi[i];
//     }
//     sayi = ("" + toplam).split("");
//     toplam = 1;
//     counter++;
//   }
//   return counter;
// };
// console.log(tekhane(999));

//? 2) - verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.

//? input                   output
//? 15     =>   (1111)  =>    4 
//? 14     =>   (1110)  =>    3


// 1.çözüm

// let binary = (sayi) => {

//     sayi = sayi.toString(2)
//     console.log(sayi)
//     sayi = ("" + sayi).split("")
//     let counter =0
//     for(let item of sayi){
//         console.log("item :", item)
//         if(item == "1") {
//             counter++
//         }
//     }
//     return counter
// }

// console.log(binary(20))

// 2.çözüm

// countBits = (n) => n.toString(2).split("0").join("").length
// countBits(20)

// 3çözüm

// function persistence(num) {
//   var times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a * b)
//       .toString();
//   }

//   return times;
// }


// ? 3)) aradaki farkı bul


// function findMissing(normal, missing) {
//   sumNormal = (normal.length * (normal.length + 1)) / 2;
//   const sumWithInitial = missing.reduce((a, b) => a + b);
//   return sumNormal - sumWithInitial;
// }
// console.log(findMissing([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]));

// 1 çözümt bul = (array) => {
//     array = array.sort((a,b) => a-b)
//     console.log(array)
//     for(let i in array) {
//         if(array[i+1] - array[i] != 1){
//             return array[i] +1
//         }
//     }
// }
// console.log(bul(1,2,3,4,6,7));



// let bul2 = (array) => {
//   array = array.sort((a, b) => a - b);
//   console.log(array);
//   if (array[0] != 1) {
//     return 1;
//   } else {
//     for (let i in array) {
//       if (array[Number(i) + 1] - array[Number(i)] != 1) {
//         return Number(array[i] + 1);
//       }
//     }
//   }
// };
// console.log(bul2([10, 2, 3, 5, 6, 8, 7, 9, 4]));




//? 4) verilen dizide hangi elemanın kaç defa geçtiğini çıktı veren fonksiyon?


// let count = (dizi) => {
//   let ilk = [];
//   let son = [];
//   dizi.forEach((element) => {
//     let count = 0;
//     let eleman = "";
//     for (let item of dizi) {
//       if (element === item) {
//         count++;
//         eleman = item;
//       }
//     }
//     ilk = [eleman, count];
//     if (!son.length) {
//       son = son.concat(ilk);
//     } else {
//       let counter = 0;
//       for (let i = 0; i < son.length; i += 2) {
//         if (son[i] !== eleman) {
//           counter++;
//         }
//       }
//       if (counter * 2 == son.length) {
//         son = son.concat(ilk);
//       }
//     }
//   });
//   return son;
// };
// let dizi1 = ["ali", "veli", "ali", "veli", "veli", "2", 2, 2, 2];
// console.log(count(dizi1));