
// const hesapla = (arr,num) => {

//     if(arr.length<num) {
//         return `out of range`;
//     }else {
//         let newArr = arr.sort((a,b) =>a-b)
//         console.log(newArr)
//         return newArr[num-1]
//     }

// }

// console.log( hesapla([10, 50, 61, 17, 82, 95, 9, 11, 12, 13], 12,87));

// const donusum = (str) => {
//   let newArr = [];
//   if (str.includes(" ")) {
//     newArr = str.split(" ");
//     console.log(newArr);
//     let new1 = []
//     for(let i=0; i<newArr.length; i++) {
//         if (i === 0) {
//           new1.push(newArr[0][0].toLowerCase() + newArr[0].slice(1));
//           //  console.log(kelime)
//         } else {
//            ;
//            new1.push(newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase())
//         }
//         // return newArr.join();
//     }
//     return new1.join("")
//   } else if(str.includes("-")){
//     newArr = str.split("-");
//     console.log(newArr);
//     let new1 = [];
//     for (let i = 0; i < newArr.length; i++) {
//       if (i === 0) {
//         new1.push(newArr[0][0].toLowerCase() + newArr[0].slice(1));
//         //  console.log(kelime)
//       } else {
//         new1.push(
//           newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase()
//         );
//       }
//       // return newArr.join();
//     }
//     return new1.join("");


//   }else {
//     return str
//   }
// }
//   console.log(donusum("JavaScript-coding-ChAlLenge"));

