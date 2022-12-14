//----------------------------------OUESTION 1--------------------------------------------

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : const myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red, Green, White, Black"

// const myColor = ["Red", "Green", "White", "Black"];
// const arrString = (arr) => {
//   // return Array.toString()
//   return arr.join(", ");
// };
// console.log(arrString(myColor));

//* split() ==> string to array
//* join() ==> array to string

//----------------------------------OUESTION 2--------------------------------------------

// Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.
// For example, if you accept 025468 the output should be 0-254-6-8.

// const number = "025468";
// const insertDash = (num) => {
//   let dashed = "";
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0 && num[i + 1] % 2 == 0) {
//       dashed += num[i] + "-";
//     } else {
//       dashed += num[i];
//     }
//   }
//   return dashed;
// };

// console.log(insertDash(number));
// console.log(insertDash("4136817886"));

//----------------------------------OUESTION 3--------------------------------------------

// Write a JavaScript program to sort the items of an array.
// Sample array : const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// const sortedArry = (arr) => {
//   // let arr2 = arr.sort((a, b) => a - b);
//   // return arr2
//   return arr.sort((a, b) => a - b);

//   // return arr.sort().reverse()      // stringleri sıralamak, tersten sıralamak için
// };
// console.log(sortedArry(arr1));

//* sort orjinal diziyi değiştirir

//----------------------------------OUESTION 4--------------------------------------------

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// const mostFrequent = (arr) => {
//   let most;
//   let repetition = 0;
//   let count;
//   arr = arr.sort(); // aynı elemanlar yanyana gelmesi için sıraladık.
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     count = 0;
//     for (let k = i; k < arr.length; k++) {
//       if (arr[i] == arr[k]) {
//         count++;
//       }
//     }
//     if (count > repetition) {
//       repetition = count;
//       most = arr[i];
//     }
//   }
//   return `${most} en çok tekrar eden sayıdır. ${repetition} kere tekrar etmiştir`;
// };
// console.log(mostFrequent(arr1));
 

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

//----------------------------------OUESTION 5--------------------------------------------

// Write a JavaScript program that accepts a string as input and swap the case of each character.
// For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//----------------------------solution 1-------------------------------

let sentence = "The Quick Brown Fox";

const swapCase = (str) => {
  let swap = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      swap += str[i].toLowerCase();
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      swap += str[i].toUpperCase();
    } else {
      swap += str[i];
    }
  }
  return swap;
};

console.log(swapCase(sentence));

//----------------------------solution 2-------------------------------
//****** map ile çözüm
const swapCase = (str) => {
  let arr = str.split("");
  return arr
    .map((x) =>
      x === x.toLowerCase() ? (x = x.toUpperCase()) : (x = x.toLowerCase())
    )
    .join("");
};


//---------------------------------------------------solution 3---------------------------
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