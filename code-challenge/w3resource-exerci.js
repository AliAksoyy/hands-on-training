// !!!!!!!!!!!!!!!!FUNCTİONS CHALLENGE!!!!!!!!!!!!!!!!!!!!!!
// ????????????????????????????????????????????????
// *******1******************

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// const donusum = function(number) {
//     let a = number.split("").reverse().join("")

//     return a
// }
// console.log(donusum("32243"))

// 2 çözüm

// const donusum =(num) => num.toString().split("").reverse().join("")
// console.log(donusum(123456789))

// *********2*************
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const palindrome = function(word) {

//     let a = word.toLowerCase()
//     let c =a.split("")
//     let b = c.reverse().join("")

//     console.log(b)
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
//     console.log(a)
//     for(let i = 0 ;i<a.length ;i++) {
//         let b = a[i].split("").reverse()
//         console.log(b)
//         let c = "";
//         for(let j = 0; j<b.length; j++) {
//              if(j==0) {
//                 c += b[0].toUpperCase();
//                 console.log(c)
//              } else {
//                   c += b[j];
//                   console.log(c)
//              }
//              console.log(c)
//         }
//         console.log(c)
//         c = c.split("").reverse().join("")
//         console.log(c)
        
//         a[i]= c
//     }

//     return a.join(" ")
// }
// console.log( buyuk("the quick brown fox"));

//  2 çözüm

// function uppercase(str) {
//     str = str.split(" ")
//     console.log(str)
//     return str.map(function(t){
//         return t[0].toUpperCase() + t.slice(1)
//     }).join(" ")
// }

// console.log(uppercase("the quick brown fox"));

// 3 çözüm
// function capitalize(str) {
// return str.split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')

// console.log(capitalize("the quick brown fox"))

// *********6*************
// 6. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g





// const combinations = (str= '') => {
// let temp='';
// for (let i = 0; i < str.length; i++) {
// let int = '';
// console.log(temp)
// for (let j=i; j < str.length; j++) {
// int += str[j];
// temp += int + ',' ;
// console.log(int)
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
// 3çözüm
// const wordComb = (str) => {
//   let newStr = [];
//   let final = "";
//   for (let i = 0; i < str.length; i++) {
//     let word = str.slice(i, str.length);
//     console.log(word)
//     newStr.push(word);
//     console.log(newStr)
//     for (j = word.length - 1; j > 0; j--) {
//       let word1 = word.slice(0, j);
//       console.log(word1)
//       newStr.push(word1);
//     }
//   }
//   return (newStr.join())
// //   for(k=0; k < newStr.length;k++){
// //       final = final.concat(newStr[k] , ',');
// //       console.log(final)
// //   }
// //   return (final = newStr.join(","));
// };
// console.log(wordComb("kitap"))



// *********7*************
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// const numVowel = function(str) {
    
//         const vowel= "aeiou"
//         let cnt =0
//         for(let i = 0; i<str.length ;i++) {
//             if(vowel.includes(str[i])) {
//                 cnt++
//             }
//         }
//         return cnt
//     }
//     console.log( numVowel("The quick brown fox"));

// const sesli = (str) => {

//           let arr = []
//           arr=str.match(/[aeiou]/gi)
//           console.log(arr.join(","))
//           return arr.length


// }
//     console.log(sesli("The quick brown fox"));


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
//     console.log(arr)
//     for(let i= 0 ;i<x ;i++){
//         let newArr = [];
//          for(let j = 0; j<x ;j++) {
//             if(i===j) {
//                 newArr.push(1)
//             }else {
//                 newArr.push(0)
//             }
//         console.log(newArr);
            
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

// **************13*********************
// 13. Write a JavaScript function to compute the factors of a positive integer. Go to the editor
// Click me to see the solution.


// let positiveInteger = (num) => {
//   let arr = new Array();
//   for (let i = 1; i < num + 1; i++) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(positiveInteger(12));
// console.log(positiveInteger(15));
// console.log(positiveInteger(17));

// ****************14***************
// 14. Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// Click me to see the solution.

// const amountToCoins = (n, arr) => {
//   if (n === 0 || n < 0) return 0;

//   return arr.reduce((acc, cur) => {
//     while (n >= cur) {
//       acc.push(cur);
//       console.log(acc)
//       n -= cur;
//     }
//     return acc;
//   },[]);
// };
// console.log( amountToCoins(46,[25,10,5,2,1]))

// 2 çözüm

// function amountToCoins(amount, coins) {
//   var res = [];

//   for (var i = 0; i < coins.length; i++) {
//     while (amount >= coins[i]) {
//         console.log(i)

//       amount -= coins[i];
//       res.push(coins[i]);
//       console.log(res)
//     }
//   }

//   return res.join(",");
// }

// console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// ****************15*******************

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor
// Click me to see the solution.
// 1 çözüm



// const hesapla =(b,n) => b**n
// console.log( hesapla(4,2))
// // 2 çözüm
// const a = function(b,n) {
//   return Math.pow(b, n);
// }
//  console.log(a(4,2))


// *******************16*************

// 16. Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// Click me to see the solution.

// 1 çözüm

// function unique_characters(str) {
//   let unique = "";
//   for (let i = 0; i < str.length; i++) {
//     if (unique.indexOf(str[i]) === -1) {
//         console.log(unique)
//       unique += str[i];
//       console.log(unique)
//     }
//   }
//   return unique;
// }

// console.log(unique_characters("thequickbrownfoxjumpsoverthelazydog"));;

// 2 çözüm
// function checkChar(str) {
//   let str1 = Array.from(new Set(str));
//   return str1.join("");
// }
// console.log(checkChar("thequickbrownfoxjumpsoverthelazydog"));

// *********************17**********

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. Go to the editor
// Click me to see the solution.
// function countChar(s) {
  
//   let lst = new Set(s.split(""))
//   console.log(lst)
//     resoult = new Map(),
//     count = 0;
//   for (compare of lst) {
//     for (var i = 0; i < s.length; i++) {
//       if (compare === s[i]) {
//         count++;
//       }
//     }
//     resoult.set(compare, count);
//     count = 0;
//   }
//   console.log(resoult);
// }
// countChar("abacabd");

// 2 çözüm
// function ex17(str) {
//   var count = {};
//   console.log(str.split(""))
//   str.split("").forEach(function (s) {
//     count[s] = count[s] ? count[s] + 1 : 1;
//   });
//   return count;
// }

// console.log(ex17("abbcccdde"));
// *******************18*********

// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Click me to see the solution.

// function array_binarySearch(arr, elem) {
//   let start = 0,
//     end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === elem) return mid;
//     else if (arr[mid] < elem) start = mid + 1;
//     else end = mid - 1;
//   }

//   return "Element not found";
// }

// var myArray = [1, 2, 3,4,5];
// console.log(array_binarySearch(myArray,3));



// ***************19**************

// 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor

// function ex17(arr, nr) {
//   var res = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > nr) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(ex17([1, 2, 3, 4, 5, 6, 7], 3));
//  2 çözüm

// function biggerElements(arr) {
//   return arr.filter(function(k){return k>10})
// }

// console.log(biggerElements([11, 45, 4, 31, 64, 10]));

// 3 çözüm

// function limit(arr, num) {
//  return arr.filter((b) => b>num)
// }
// console.log( limit([2,3,4,5,6,5],3))
// *****************20************



// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function id(len) {
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     len = len || 32;
//     let str_id = "";

//     for (let i = 0; i < len; i++) {
//         str_id += str.charAt(Math.floor(Math.random() * str.length));
//     }
//     return str_id;
// }

// console.log(id(7));
// console.log(id(10));
// console.log(id());


// function makeId(n) {
//   let lstChar =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@#$%^&*",
//     id = "";

//   for (var i = 0; i < n; i++) {
//     let rnd = Math.floor(lstChar.length * Math.random());
//     console.log(rnd)
//     id += lstChar.charAt(rnd);
//   }
//   console.log(id);
// }
// makeId(4);


// *******************21***********

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Go to the editor
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
// Click me to see the solution.

// *********************2****************
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2
// Click me to see the solution

// ********************23***************

// 23. Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec'
// Expected output : 'e'
// Click me to see the solution

// const repeat = (str) => {
//     str = str.split("").sort()
//     console.log(str)
//    let counter = 0
//     for(let i = 0; i<str.length; i+=2) {
//       if(str[i] === str[i+1]) {
//           counter++
//           console.log(counter)

//       }

//     }
//     return str[(2*counter)]
// }
// console.log( repeat('abacddbec'))

// ******************24*****************

// 24. Write a JavaScript function to apply Bubble Sort algorithm. Go to the editor
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// Click me to see the solution

// *********************25****************

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// Click me to see the solution

// ********************26***************

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. Go to the editor
// Click me to see the solution
// *******************27***********

// 27. Write a JavaScript function that returns the longest palindrome in a given string. Go to the editor

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
// Click me to see the solution

// ********************28************

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. Go to the editor
// Click me to see the solution

// ****************29*******************

// 29. Write a JavaScript function to get the function name.



// ??????????????????????????????????????????????
// !!!!!!!!!!!!!!!!!!!!!!!ARRAY CHALLENGE!!!!!!!!!!!!!!!!!!!!

// *******************1********************

// 1.Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// const isArray = (input) => Array.isArray(input);
// console.log(isArray({ as: 112, asd: 12 }));
// console.log(isArray({ as: 112, asd: 12 }));
// console.log(isArray([1, 2, 4, 0]))


// 2 çözüm


// const a = "w3resoure"
// const b = [1,2,3]

// console.log(Array.isArray(a))
// console.log(Array.isArray(b))




// *******************2********************
// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// const cloneArray =(arr) => {

//     const newArr = arr.slice(0);
//     return newArr;
// }
// console.log(cloneArray([1, 2, 4, 0]));

// 2 çözüm
// let x =[1,2,3,4]
// let b =[...x]
// console.log(b)
// let c =x.map((a) => 1*a)
// console.log(c)
// let d = [1,2,3]
// let d1 = Array.of(d)
// console.log(d1)
// let d3 = [1,2,3]
// let d4 = Array.from(d)
// console.log(d1)

// let x = [1, 2, 3, 4];
// console.log("Original array:");
// console.log(x);
// let y = [...x]
// console.log("Clone of the said array:");
// console.log(y);

// let a = [1,2,3]
// let b =[...a]
// console.log(b)
// diger yöntemler
// let y = x.map.((i) => i)
// let y1 = Array.from(x)
// let y2 = [...x]

// 3 çözüm

// const a = [1,2,3,4,5]
// const b = a.copyWithin(0)
// console.log(b)





// *******************3********************
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// const firstArr = (arr, n =null) => {
//     if(n<0) {
//         return []
//     } else if (arr === []) {
//         return arr
//     } else if (n>0 && n<arr.length) {
//         return arr.slice(0,n)
//     } else if (n>arr.length) {
//         return arr.slice(0)
//     } else if(n === null) {
//         return arr.at(0)
//     }
// }
// console.log(firstArr([7, 9, 0, -2]));
// console.log(firstArr([7, 9, 0, -2],-3));
// console.log(firstArr([7, 9, 0, -2],3));




// *******************4********************
// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// const lastElement = (arr, n = null) => {
//     if(n<0) {
//         return []
//     } else if (arr === []) {
//         return arr
//     } else if (n>0 && n<arr.length) {
//         return arr.slice(-n)
//     } else if (n>arr.length) {
//         return arr.slice(0)
//     } else if(n === null) {
//         return arr.at(-1)
//     }
// }
// console.log(lastElement([7, 9, 0, -2],6));
// console.log(lastElement([7, 9, 0, -2]));


// 2 çözüm

// const last = (arr,n) => {

//     for(let i in arr) {
        
//         if(arr.length<n) {
//            return arr.slice(0)
//         }else if(arr.length >n) {
//             return arr.slice(0,n)
//         }else if (n === undefined) {
//             return arr.at(-1)
//         }

//     }
    
// }


// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// *******************5********************
// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// Click me to see the solution


// const a = (arr) => {
// return arr.join("+");
// }


// myColor =["Red", "Green", "White", "Black"];
// console.log(a(myColor))


// 2.çözüm

// const donusum = (arr) => {

//     return arr.join("+").split(" ")
    

// }
// console.log( donusum(["red","green", "blue","yellow"]))


// *******************6********************
// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor

// const dashedNum = (num) => {
//     const arr =("0" + num.toString()).split("");
//     console.log(arr)
//     for(let i=0; i<arr.length; i++){
//          if(Number(arr[i])%2 ===0 && Number(arr[i+1])%2===0){
//             arr.splice(i+1,0,'-')
//             console.log(arr)
//          }
//      }
//       return arr.join("")
// }
// console.log(dashedNum(025468))

// 2çözüm

// const sayı = (number) => {
    
//      const arr =("0" + number.toString()).split("")
//     console.log(arr)
//     for(let i = 0 ; i<arr.length; i++) {

//         if(arr[i] % 2 === 0 && arr[i+1] % 2 ===0) {
//             arr.splice(i+1,0,"-")
//         }

//     }
//     return arr.join("")
// }


// console.log(sayı(025468));





// *******************7********************
// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// const sortNum = (arr) =>{
//   return arr.sort((a,b) =>a-b)
//   }

// var arr1 = [-13, 8, 7, 6, 5, -4, 3, 2, 11];
// console.log(sortNum(arr1));

// 2 çözüm


// var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
 
// const newArr= arr1.sort((a,b) => a-b)
// console.log(newArr.join(" ,"))

// *******************8********************
// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// const mostFreq = (arr) => {
//   let cnt = 0;
//   let newArr = [];
//   for (let i = 0; i <arr.length; i++) {
    
//     for (let j = i; j < arr.length; j++) {
        
//       if (arr[i] === arr[j]) {
//         cnt++;
//       }
//     }
//     newArr.push(cnt)
//     console.log(newArr)
    
//     cnt = 0;
//   }
//   console.log(newArr);
//   const max = Math.max(...newArr);
 
  
//   const index = newArr.indexOf(max);
//   return `${arr[index]} , ${max} times`;
// };
// console.log(mostFreq([3, "b", 2, "a", 2, 3, 3, "a", 2, 4, 9, 2]));




   



// *******************9********************
// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. Go to the editor
// Click me to see the solution

// function swapCase(phrase) {
  
//   const newPhrase = [];
//   for (let word of phrase) {
//     if (word === word.toUpperCase()) {
//       newPhrase.push(word.toLowerCase());
      
//     } else {
//       newPhrase.push(word.toUpperCase());
    
//     }
//   }
//   return newPhrase.join("");
// }

// console.log(swapCase("The Quick Brown Fox"));

//  2 çözüm
// const wordSwap = (str) => {
//   const arr = str.toUpperCase().split(" ");
//   console.log(arr)
//   let newArr = [];
//   for (let word of arr) {
//     let newWord = "";
//     for (let i in word) {
//       if (i == 0) {
//         newWord += word[i].toLowerCase() + word.slice(i + 1);
//       }
//     }
//     newArr.push(newWord);
//     console.log(newArr)
//   }
//   return newArr.join(" ");
// };
// console.log(wordSwap("The Quick Brown Fox"));

// 3 çözüm

// const wordSwap = (arr) => {

//     let newArr= arr.toUpperCase().split(" ")
//     console.log(newArr)
    
//     for(let i in newArr) {
//     newArr = newArr.map((x) => x[0].toLowerCase() + x.slice(1))
       
//     }

//     return newArr.join(" ")
// }

// console.log(wordSwap("The Quick Brown Fox"));


// *******************10********************
// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (const i in a) {
  console.log(`row ${i}`);
  for (const j in a[i]) {
    console.log(` ${a[i][j]}`);
  }
}

// 2.çözüm

// let a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];


// a.forEach((item, index) => {
//   console.log(`row ${index}`);
//   for (let value of item) {
//     console.log(value);
//   }
// });





// *******************11********************

// 11 Write a JavaScript program to find the sum of squares of a numeric vector.

  //  function ex11(arr) {
  //    var res = 0;
  //    for (var i = 0; i < arr.length; i++) {
  //      res += arr[i] * arr[i];
  //      console.log(res)
  //    }
  //    return res;
  //  }
  //  console.log(ex11([1, 2, 3, 4]));


// 2 yöntem
// function sumOfSquares(vector) {
//   return vector.reduce(function(pre,curr){
//     return pre += curr*curr
//   })
// }
// console.log(sumOfSquares([1, 2, 3, 4]));

// 3çözüm

// let a3 = [1,2,3,4];
// let sum = 0;
// let b = a3.map((x) => {
//      sum  += x*x
    
// } )
//  console.log(sum);

// 4çözüm
// function sum_sq(array) {
//   var sum = 0,
//     i = array.length;
//   while (i--) {
//     sum += Math.pow(array[i], 2);
//   }
//   return sum;
// }

// console.log(sum_sq([0, 1, 2, 3, 4]));

// 5 çözüm

// let array = [1, 2, 1, 24, 6];
// console.log(array.reduce((sum, item) => sum + item * item),);

// *******************************12*************************

// 12. Write a JavaScript program to compute the sum and product of an array of integers. Go to the editor


// const toplam = (arr) => {
//     let toplam = 0
//     for(let i = 0; i<arr.length ;i++) {
//         toplam += arr[i]
//     }
//     return toplam
// }
// console.log(toplam([1,2,3,4]));

// const carpım = (arr) => {
//     let sonuc = 1;
//     for(let i = 0; i<arr.length ;i++) {
//       sonuc *= arr[i] 
//     }
//     return sonuc
// }
// console.log(carpım([10, 5, 3, 4]));

// 2 çözüm

// let a = [1,4,6,8,10];
// console.log(a.reduce((sum,x) => sum +x));
// console.log(a.reduce((sum,x,) => sum*x))


// *******************************13*************************

// 13. Write a JavaScript program to add items in an blank array and display the items. Go to the editor
// Sample Screen :
// add elements in an blank array




// *******************************14*************************

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). Go to the editor

// const sameStatement =(arr) => {
//         arr.sort()
//         console.log(arr)
//         const newdeger = []
//         for(let i =0 ;i<arr.length; i++) {
//             if(arr[i+1] !== arr[i]) {
//                 newdeger.push(arr[i].toString())
//             }

//         }
//         return newdeger
// }
// console.log( sameStatement([1,1,2,3,3,4,6,8,2,5,7,7]))

// 2 çözüm

// var dublicate = [1, 2, "a", 2, "a", 2, 1, "a", 2, "a", "b", "b"];
// var new_Array = [...new Set(dublicate)];
// console.log(new_Array);

// 3 çözüm

// const arr = [1, 1, 2, 3, 4, 5, 6, 6, 6, 7];

// const newArray = arr.reduce((previous, actual) => {
//   if (!previous.includes(actual)) {
//     previous.push(actual);
//   }
//   return previous;
// }, []);
// console.log(newArray);

// 4 çözüm


// const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 3, 6];

// const removeDuplicates = (arr) => {
//   let newArr = new Set(arr);
//   return Array.from(newArr).sort((item1, item2) => item1 - item2);
// };
// console.log(removeDuplicates(arr));


// 5 çözüm


// const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// const x = [...new Set(arr)].sort();
// console.log(x);

// *******************************15*************************

// 15. We have the following arrays : Go to the editor
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.
// Click me to see the solution
//1 çözüm
// color = ["Blue", "Green", "Yellow", "Orange"];
// order = ["th", "st", "nd", "rd"];
// for (i = 0; i < color.length - 1; i++) {
//   x = i + 1;
//   var output = x + order[x] + " color is " + color[i];
//   console.log(output);

//   2 çözüm

//   function getColors(clrs, suffx) {
//     for (var i = 0; i < clrs.length; i++) {
//       if (i == 0) {
//         console.log("" + 1 + suffx[1] + " choice is " + clrs[i] + ".");
//       } else if (i == 1) {
//         console.log("" + 2 + suffx[2] + " choice is " + clrs[i] + ".");
//       } else if (i == 2) {
//         console.log("" + 3 + suffx[3] + " choice is " + clrs[i] + ".");
//       } else {
//         console.log("" + (i + 1) + suffx[0] + " choice is " + clrs[i] + ".");
//       }
//     }
//     console.log("- - - - - - - - - - - - -");
//   }
//   console.log(
//     getColors(
//       ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
//       ["th", "st", "nd", "rd"]
//     )
//   );

// 3 çözüm

// let color = ["Blue ", "Green", "Red", "Orange"];
// order = ["th", "st", "nd", "rd"];

//     color.map((x,i) =>{
//         let c = `{${i +1}${order[i]} choice is ${x}}`
//     console.log(c);

//     })
   
    




// *******************************16*************************

// 16. Write a JavaScript program to find the leap years in a given range of years. Go to the editor

// (function (x, y) {
//   for (let i = x; i <= y; i++) {
//     if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
//       console.log(i);
//     }
//   }
// })(1990, 2019);


// *******************************17*************************

// 17. Write a JavaScript program to shuffle an array. Go to the editor


// (function (array) {
//   array.sort(() => 0.5 - Math.random());
//   console.log(array);
// })([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2çözüm
// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let k = arr[i];
//     arr[i] = arr[j];
//     arr[j] = k;
//   }
//   return arr;
// }
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));


   
// *******************************18*************************

// 18. Write a JavaScript program to perform a binary search. Go to the editor
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

 
// function binary_Search(items, value) {
//   const a = items.sort();
//   return a.indexOf(value);
// }

// const items = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(binary_Search(items, 1));
// console.log(binary_Search(items, 5));








// *******************************19*************************

// 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// const deger =(arr1,arr2) => {

//     let sonuc = []

//     for(let i= 0; i<(arr1.length,arr2.length); i++) {
       
//         sonuc.push(arr1[i] + arr2[i])
//     }
//     return sonuc
// }
// console.log(deger([1,0,2,3,4],[3,5,6,7,8]))


// (function (array1, array2) {
//   const result = [];

//   if (array1.length > array2.length) {
//     array1.forEach((item, index) => {
//       result[index] = item + (array2[index] || 0);
//     });
//   } else {
//     array2.forEach((item, index) => {
//       result[index] = item + (array1[index] || 0);
//     });
//   }
//   console.log(result);
// })([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);



// *******************************20*************************

// 20. Write a JavaScript program to find duplicate values in a JavaScript array. Go to the editor

// function find_duplicate_in_array(arr) {
//   var resultArr = [];
//   arr = arr.sort();

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i + 1] == arr[i]) {
//       resultArr.push("" + arr[i + 1]);
//     }
//   }
//   returns only unique value
//   return [...new Set(resultArr)];
// }
// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// function find_duplicate_in_array1(arr) {
//   const x = [...new Set(arr)];
//   console.log(x);
// }

// find_duplicate_in_array1([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);


// ********************************21*****************************



// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// function flat(arr, deep) {
//   let result = arr.flat(deep);
//   return result;
// }
// console.log(flat([1, [2], [3, [[4]]], [5, 6]], true));
// console.log(flat([1, [2], [3, [[4]]], [5, 6]], 3));




// ********************************22*****************************


// 22. Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// function union(arr1, arr2) {
//   let arr3 = arr1.concat(arr2);

//   return [...new Set(arr3)];
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));

// 2çözüm

// function union(arr1, arr2) {
//     let arr = arr1.concat(arr2)
//     return arr.filter(function (val, index) {
//       return arr.indexOf(val) === index;
//     });
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10])); //[1, 2, 3, 10, 100]



// ********************************23*****************************


// 23. Write a JavaScript function to find the difference of two arrays. Go to the editor
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


// 1 çözüm

// (function (arr1, arr2) {
//   const arr3 = [];
//   const length = arr1.length >= arr2.length ? arr1.length : arr2.length;
//   arr1 = arr1.toString().split(",");
//   console.log(arr1)
//   arr2 = arr2.toString().split(",");
//   for (let i = 0; i <= length; i++) {
//     if (arr1.indexOf(arr2[i]) === -1 && arr2[i] !== undefined)
//       arr3.push(arr2[i]);
//     if (arr2.indexOf(arr1[i]) === -1 && arr1[i] !== undefined)
//       arr3.push(arr1[i]);
//   }
//   console.log(arr3.sort((a, b) => a - b));
// })  ([1, 2, 3], [100, 2, 1, 10]);

// 2çözüm
// function difference(a, b) {
//   const arr = [...a, ...b];
  
//   const duplicate = [];

//   arr.flat(Infinity).forEach((item, index, arr) => {
//     if (arr.lastIndexOf(item) === arr.indexOf(item)) {
//       duplicate.push(item);
//     }
//   });

//   return duplicate;
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// 3 çözüm
// function ex23(a, b) {
//   var res = "";
//   let inA = a.filter((x) => !b.includes(x));
//   let inB = b.filter((y) => !a.includes(y));
//   res = inA + "," + inB.sort();
//   return res;
// }
// console.log(ex23([1, 2, 3], [100, 2, 1, 10]));



// ********************************24*****************************

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// function flt(arr) {
//   return arr.filter(function myFunction(value, index, array) {
//     return value;
//   });
// }
// console.log(flt([NaN, 0, 15, false, -22, "", undefined, 47, null]));


// 2 çözüm
// function ex24(arr) {
//   var res = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (
//       arr[i] > -23 &&
//       arr[i] < 48 &&
//       arr[i] !== false &&
//       arr[i] != null &&
//       arr[i] != 0 &&
//       arr[i] != undefined
//     ) {
//       res += arr[i] + ", ";
//     }
//   }
//   return res;
// }
// console.log(ex24([NaN, 0, 15, false, 22, "", undefined, 47, null]);

// ********************************************************************************
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!OBJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ********************************************************************************
//? 1 soru
// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// for(let key of Object.keys(student)){
//   console.log(key)
// }

//? 2 soru


// let student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(student)
// delete student["rollno"]
// console.log(student)

// //? 3 soru
// let student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// for(let value of Object.value(student)){
//   console.log(value)
// var library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }