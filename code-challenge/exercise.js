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
        
    //     // console.log(b)
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
//     // console.log(newStr)
//     for (j = word.length - 1; j > 0; j--) {
//       let word1 = word.slice(0, j);
//       newStr.push(word1);
//     }
//   }
//   // console.log(newStr)
//   // for(k=0; k < newStr.length;k++){
//   //     final = final.concat(newStr[k] , ',');
//   // }
//   return (final = newStr.join(","));
// };
// console.log(wordComb("kitap"));


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


// *********9*************
// 9. soru Array deki en büyük sayıları bulma ekrana yazdırma
// [
//   [4, 5, 1, 3, 7],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ];


// **************10**********

// 10. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// *********10*************
// 11. Write a JavaScript function which returns the n rows by n columns identity matrix. 

// ******11*****************


// const donusum = (str) => str.split("").reverse().join("")
 


// console.log( donusum("clarusway Rocks!"))

// ********12************
// const donusum = (str) => str.split(" ").reverse().join(" ");

// console.log(donusum("clarusway Rocks!"));
// console.log(donusum("clarusway"));
// console.log(donusum("Little things make big days"));

// ************13*************

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

// ************14****************
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

// ****************15****************
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

// **************************16*******************
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

// ************************17****************
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

// ****************18****************





