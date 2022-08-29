// *******1******************

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// const donusum = function(number) {
//     let a = number.split("").reverse().join("")

//     return a
// }
// console.log(donusum("32243"))

// *********2*************
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const palindrome = function(word) {

//     let a = word.toLowerCase()
//     let c =a.split("")
//     let b = c.reverse().join("")

    // console.log(b)
//     if(b===a) {
//         console.log("palindrome");

//     }else {
//         console.log("not palindrome")

//     }

// }

// palindrome("iTopiNonAvevanoNipoti");
// palindrome("madam");

//    const isPalindrome = (str) => {
//      str = str.toLowerCase();
//      let cnt = 0;
//      if (str.length <= 1) {
//        return true;
//      } else {
//        for (let i = 0; i < Math.ceil(str.length / 2); i++) {
//          if (str.charAt(i) == str.charAt(str.length - (i + 1))) {
//            cnt++;
//          }
//        }
//        if (str.length % 2 == 0) {
//          return cnt === Math.floor(str.length / 2) ? true : false;
//        } else {
//          return cnt - 1 === Math.floor(str.length / 2) ? true : false;
//        }
//      }
//    };

//    console.log(isPalindrome("aiTopiNonAverevanoNipotia"));

// *********3*************
// 3. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// const enUzun = function(sentence) {

//     let a = sentence.split(" ");
//     console.log(a)
//     let enUzunKelime = ""
//     let hafiza = 0
//     for(let i = 0; i<a.length; i++) {

//         if(a[i].length > enUzunKelime) {
//             enUzunKelime = a[i].length
//             hafiza = i;
//         }

//     }
//     return a[hafiza]

// }
// console.log(  enUzun("Web Development Tutorial"))

// *********4*************
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// const sırala = function(word) {

//     return word.split("").sort().join("")
// }
// console.log(  sırala("webmaster"));

// *********5*************
// 5. Write a JavaScript function that accepts a string as a parameter and converts the last letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'thE quicK browN foX '

// const buyuk = function(sentence) {

//     let a= sentence.split(" ");
//     for(let i = 0 ;i<a.length ;i++) {
//         let b = a[i].split("").reverse()
//         let c = "";
//         for(let j = 0; j<b.length; j++) {
//              if(j==0) {
//                 c += b[0].toUpperCase();
//              } else {
//                   c += b[j];
//              }
//         }
//         c = c.split("").reverse().join("")
//         a[i]= c
//     }

//     console.log(a.join(" "))
// }
// buyuk("the quick brown fox");

// *********6*************
// 6. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g


// const combinations = (str= '') => {
// let temp='';
// for (let i = 0; i < str.length; i++) {
// let int = '';
// for (let j=i; j < str.length; j++) {
// int += str[j];
// temp += int + ',' ;
// }
// }
// return temp;
// }

// console.log( combinations('dog')) 

// 2 çözüm

// const comb = (str) => {
//     let newStr= ""
//     for(let i= 0; i<str.length; i++) {
//         let a = str.slice(i,str.length)
//         newStr += a + " ,"
//         console.log(newStr)
//         for(let j=i; j<newStr.length; j++) {
//             newStr.slice()

//         }
//     }
// }
// comb("dog")
// 2 çözüm
// const wordComb = (str) => {
//   let newStr = [];
//   let final = "";
//   for (let i = 0; i < str.length; i++) {
//     let word = str.slice(i, str.length);
//     newStr.push(word);
    // console.log(newStr)
//     for (j = word.length - 1; j > 0; j--) {
//       let word1 = word.slice(0, j);
//       newStr.push(word1);
//     }
//   }
  // console.log(newStr)
  // for(k=0; k < newStr.length;k++){
  //     final = final.concat(newStr[k] , ',');
  // }
//   return (final = newStr.join(","));
// };
// console.log(wordComb("kitap"))



// *********7*************
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// const numVowel = function(str) {
    
    //     const vowel= "aeiou"
    //     let cnt =0
    //     for(let i = 0; i<str.length ;i++) {
    //         if(vowel.includes(str[i])) {
    //             cnt++
    //         }
    //     }
    //     return cnt
    // }
    // console.log( numVowel("The quick brown fox"));

    // 2çözüm

//     const a = (str) => {
//         let arr = [];
//         arr = str.match(/[aeiou]/gi);
//         return arr.length
//     }
// console.log(a("The quick brown fox"));


// *********8*************
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Asal Sayı BUlma

// const asalSayi =function(num) {

//       if(num<=1) {
//         return false;
//       }
        
//     else {
//         for(let i = 2; i<num; i++) {
//             if(num % i  ===0 ) {
//                 return false;
                
//             }
//         } return true;
//     }
      
    

// }
// console.log(asalSayi(23) ? "asaldır" : "asal değildir")
// console.log(asalSayi(2) ? "asaldır" : "asal değildir")
// console.log(asalSayi(27) ? "asaldır" : "asal değildir")



// *********9*************
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// tip belirleme yazma

// const arg = (str) =>  typeof str;

// console.log(arg(12))
// console.log(arg(true))
// console.log(arg("ali"))
// console.log(arg([]))
// console.log(arg())
// console.log(arg( function abc() {return 2}))


// let fonk = function(str) { return str

// }
// console.log(arg(fonk("str")))



// *********10*************
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// dizi içerisinde aynı index değerlerini bulma

// const identity = function(x) {
//     let arr = [];
//     for(let i= 0 ;i<x ;i++){
//         let newArr = [];
//          for(let j = 0; j<x ;j++) {
//             if(i===j) {
//                 newArr.push(1)
//             }else {
//                 newArr.push(0)
//             }
            
//          }
//          arr.push(newArr)
//     }
//     return arr

// }
// console.log(identity(3))
// console.log(identity(5))

// ***********11***********

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

//Dizi de ki enbüyük 2 inci ve en kücük 2 elemanı bul

// const sirala =function(arr) {
//     arr.sort((a,b) => {
//         if(a>b) return 1;
//         if(a<b) return -1;
//         return 0   ;     
//     })

//     const newArr = [];
//     newArr.push(arr[1], arr[arr.length-2])
//     return newArr
// }
// console.log( sirala([3,5,12,56,31,9]))

// ****************12**************
//  Write a JavaScript function which says whether a number is perfect. Go to the editor
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// perfect number bölenleriini toplamı kendisine eşit olan sayı

// const perfectNum = function(num) {
        

//     let sum = 0;
//     for(let i= 1; i<num ;i++){
//         if(num%i ===0) {
//             sum+=i
//         }
//         console.log(sum)
//     }
//     if(sum===num) return `${sum} perfect num'dır`
//     else return `${num} perfect num değildir`;
        
// }
// console.log( perfectNum(6))
// console.log( perfectNum(11))
// console.log( perfectNum(28))
// console.log( perfectNum(496))



// ***********11***********

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
