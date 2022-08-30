//!1 ***********************************

//11 .Reverse String

// const reverseString = function(str) {

// return str.toLowerCase().split("").reverse().join("") //**1 çözüm */

// *2çözüm
//     let result =""
//     for(let i = str.length-1; i>=0; i--) {
//         result +=str[i]
//         console.log(result,i)
//     }
//     return result
// }
// console.log(reverseString("Aksoy"))

// ****************12**********

// 12. faktoriyel sorusu

// const faktor =(num) => {
//     let newNum=1
//     for(let i = 1; i<=num ;i++ ) {

//         newNum = newNum *i
//         // console.log(newNum,i)
//     }
//     return newNum
// }
// console.log( faktor(5))

// *********13**************

// 13 .Palindromes

// const palidnrome = function(str) {

//     return str === str.split("").reverse().join("") ? `${str} Palindrome` : `${str} NOT Palidnrome`

// }
// console.log( palidnrome("kazak"))
// console.log( palidnrome("ayse"))

// const palidnrome = function(str) {
//     const reg= /[\W]/g;

//     const newStr = str.toLowerCase().replace(reg, "")
//     console.log(newStr)
//     const c = newStr.split("").reverse().join("")
//     if(c === newStr) {
//         return true
//     }else {
//         false
//     }

// }
// console.log( palidnrome("123A32*1"))

// ************14*************

//14 soru Find Longest Word

//  const uzun = function(sentence) {
//     const newWord = sentence.split(" ");
//     let enUzun = "";
//     let hafiza = 0
//     for(let i = 0; i<newWord.length; i++) {

//         if(newWord[i].length>enUzun) {
//             enUzun = newWord[i].length;
//             hafiza = i
//             console.log(newWord,i)
//         }

//     }
//     return newWord[hafiza]

//  }
// console.log(uzun("ali aksoy"))

// function enUzun (str) {
//     return str.split(" ").sort(function(a,b) {return b.length -a.length})[0]
//     console.log(a)

// console.log(enUzun("ali aksoy"));
// ********************15***********

// 15 soru Titlecase yani başlık Upper yap

// const baslık = function(sentece){
//      const word = sentece.split(" ")

//     for(let i = 0; i<word.length; i++) {
//         word[i] =word[i][0].toUpperCase() +word[i].slice(1)
//     }
//     let a =word.join(" ")
// return a
// }

// console.log( baslık("ali ve ayse aksoy"))

// const baslık1 = function(str) {

//     const a = str.toLowerCase().split(" ").map(function(elem) {
//      return   elem[0].toUpperCase() + elem.slice(1)
//     })
//     return a.join(" ")
// }
// console.log( baslık1("aLi ve aYse"))

// ******************16*********

// 16 soru Array deki en büyük sayıyı bulma

// const enBuyuk = function (arr) {
//   let newDeger = [];

//   for (let i = 0; i < arr.length; i++) {
//     let buyuk = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       let mevcut = arr[i][j];
//       if (mevcut >= buyuk) {
//         buyuk = mevcut;
//       }
//     }

//     newDeger.push(buyuk);
//   }
//   return newDeger;
// };
// console.log(
//   enBuyuk([
//     [4, 5, 1, 3, 7],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// ****************17***************

//17 soru  Confirm the Endding

// const confrimEnd = function(str, n){

//     const word = str.split("")
//     const word1 = word.slice(word.length-1).join("")
//     console.log(word1)

//     if(word1 === n){
//         return true
//     }

//     return false
// }
// console.log( confrimEnd("Ayse", "e"))
// console.log( confrimEnd("Ali", "i"))
// console.log( confrimEnd("Aliy", "i"));

// 2. çözüm

// const son = function(word,x) {
//     if(word.endsWith(x)){
//         return true
//     }
//     return false

// }
// console.log( son("Ayse", "e"))
// console.log( son("Ali", "i"))
// console.log( son("Aliy", "i"));

// ************18*********
//  Repeat a string Num Times ??

// const repeatTimes = function(str,num){
//     let final = ""
//     if(num<0) return ""
//     for(let i = 0; i<num; i++) {
//         final +=str

//     }
//     return final

// }
// console.log( repeatTimes("abcd",7))

// 2 çözüm

// const repeatTimes = function(str,num){

//     if(num<0) return ""
//     return str.repeat(num)
// }
// console.log(repeatTimes("abcd", 7));

// ************19*************

// Truncate String yani kesmek

// function truncatestring (str,num) {
//   return str.slice(num,15) + " ....."

// }
// console.log( truncatestring("ali aksoy ve beyda kızım",10))

// **************20**********
// Chunky Monkey

// const chunkyArray = function(arr,size) {

//     const newGrup = []
//     while(arr.length>0) {
//         newGrup.push(arr.splice(0,size))
//         arr = arr.slice(size)
//         // console.log(newGrup)
//     }
//     return newGrup
// }

// console.log( chunkyArray(["a", "b", "c", "d"],2))

// **************21***********

// Slasher

// const slasher = function(arr,num) {

//     arr.splice(0,num)
//     return arr
// }

// console.log(slasher(["a","b","c","d"],2))

// ***************22****************

// Mutation
// const degisim = function(arr) {

//         let a = arr[0].toLowerCase()
//         let b = arr[1].toLowerCase()

//         for(let i = 0; i<arr[1].length;  i++) {
//             if(a.indexOf(b[i]) === -1) return false
//         }

//         return true
// }
// console.log(degisim(["hello","heo"]))
