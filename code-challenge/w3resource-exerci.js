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
//     for(let i = 0 ;i<a.length ;i++) {
//         let b = a[i].split("").reverse()
//         console.log(b)
//         let c = "";
//         for(let j = 0; j<b.length; j++) {
//              if(j==0) {
//                 c += b[0].toUpperCase();
//              } else {
//                   c += b[j];
//              }
//              console.log(c)
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
//     console.log(newStr)
//     for (j = word.length - 1; j > 0; j--) {
//       let word1 = word.slice(0, j);
//       newStr.push(word1);
//     }
//   }
//   console.log(newStr)
//   for(k=0; k < newStr.length;k++){
//       final = final.concat(newStr[k] , ',');
//   }
//   return (final = newStr.join(","));
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


// ****************15*******************

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor
// Click me to see the solution.
// 1 çözüm



// const hesapla =(b,n) => b**n
// console.log( hesapla(4,2))
// 2 çözüm
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
//       unique += str[i];
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
// *******************18*********

// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Click me to see the solution.



// ***************19**************

// 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor

function ex17(arr, nr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > nr) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(ex17([1, 2, 3, 4, 5, 6, 7], 3));

// *****************20************



// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Click me to see the solution.

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

// // 2 çözüm
// let x = [1, 2, 3, 4];
// console.log("Original array:");
// console.log(x);
// let y = [...x];
// console.log("Clone of the said array:");
// console.log(y);

// let a = [1,2,3]
// let b =[...a]
// console.log(b)
// diger yöntemler
// let y = x.map.((i) => i)
// let y1 = Array.from(x)
// let y2 = [...x]



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

// *******************6********************
// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor

// const dashedNum = (num) => {
//     const arr =("0" + num.toString()).split("");
//     console.log(arr)
//     for(let i=0; i<arr.length; i++){
//          if(Number(arr[i])%2 ===0 && Number(arr[i+1])%2===0){
//             arr.splice(i+1,0,'-')
//          }
//      }
//       return arr.join("")
// }
// console.log(dashedNum(025468))




// *******************7********************
// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// const sortNum = (arr) => {
//   return arr.sort((a, b) => a - b).join();
// };
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// console.log(sortNum(arr1));


// *******************8********************
// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// const mostFreq = (arr) => {
//   let cnt = 0;
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
    
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         cnt++;
//       }
//     }
//     newArr.push(cnt);
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
//   return newPhrase.join(" ");
// }

// console.log(swapCase("The Quick Brown Fox"));



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

// const a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// for (const i in a) {
//   console.log(`row ${i}`);
//   for (const j in a[i]) {
//     console.log(` ${a[i][j]}`);
//   }
// }


// *******************11********************

// 11 Write a JavaScript program to find the sum of squares of a numeric vector.

//    function ex11(arr) {
//      var res = 0;
//      for (var i = 0; i < arr.length; i++) {
//        res += arr[i] * arr[i];
//      }
//      return res;
//    }
//    console.log(ex11([1, 2, 3, 4]));


// 2 yöntem
// function sumOfSquares(vector) {
//   return vector.reduce((sum, num) => (sum += num * num), 0);
// }
// console.log(sumOfSquares([1, 2, 3, 4]));

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
// //   returns only unique values
//   return [...new Set(resultArr)];
// }
// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// function find_duplicate_in_array1(arr) {
//   const x = [...new Set(arr)];
//   console.log(x);
// }

// find_duplicate_in_array1([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);