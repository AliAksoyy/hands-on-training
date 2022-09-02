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


// !111111111111111111111 DERS 7 FUNCTİON-2 STRİNG METHOD 111111111


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

