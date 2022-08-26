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


// *********7*************
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


// *********8*************
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


// *********9*************
// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// *********10*************
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

// ***********11***********

//11 .Reverse String


