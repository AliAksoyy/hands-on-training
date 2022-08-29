// **************************
// **1
// const hello = () => "hello edabit .com"
// console.log( hello())
// ***2
// const toplam = function(n1,n2) {
//     return n1 + n2;
// }
// const a =toplam(3,2)
// console.log(a)
// ****3

// function convert(minutes) {

//     const minute = new Date().getMinutes
// console.log(minutes)
//     const seconds = minutes * 60
//     return seconds
// }
// console.log(convert(5))
// *******4
// function addition(num) {
//     let a =num;
//     a +=1;
//     return a
// }
// console.log(addition(0))
// console.log(addition(6))
// console.log(addition(7))

// const a = (num) => num + 1
// console.log(a(5))
// console.log(a(6))
// *******5
// const triArea = (base,height) => (base*height) / 2;
// console.log(triArea(3,2))
// *********6

// const circuitPower = (voltage,current) => voltage * current;
// console.log(circuitPower(230,10))
// *******7
// const enUzunKelime = function(uzun) {
//     let word = uzun.split(" ")
//     let enUzunKelime  = ""
//     // console.log(enUzunKelime)
//     // console.log(word)
//     for(let wor of word) {
//         if(wor.length >enUzunKelime.length) {
//             enUzunKelime = wor
//         }
//     }
//     return enUzunKelime
// }

// console.log(enUzunKelime("adım ali ben istemiyorum ve seni"))
// console.log(enUzunKelime("nerelerdeydin sen bu gece"))

// **********8
// const num1 = 5;
// const num2 = 3;
// const sum = num1 + num2;
// console.log(sum)

// const x = parseInt(prompt("sayı gir"))
// const  y = parseInt(prompt("sayi 2 gir"))
// const a = x + y;
// console.log(a)


// const number = prompt("sayi")
// const result = Math.sqrt(number);
// console.log(result)

// const a = 15;
// const b = "ali"
// const a1 = Math.sqrt(a);
// const b1 = Math.sqrt(b)
// console.log(`${a1} karakökü ve ${b1}`)


// const a = 5;
// const yükselik = 10;
// const alan = (a*yükselik) / 2
// console.log(alan)

// let a =5, b= 6, c = 6;
// const s = (a + b+ c) / 2
// const alan = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(alan)

// let a = 11
// let b = 14
// let sabit;
// sabit = a;
// console.log(sabit)
// a = b
// console.log(a)
// b = sabit
// console.log(`${a} ${b} ${sabit}`)
// [a,b] =[b,a,]
// console.log(a)
// console.log(b)

// let root1,root2;
// let a = 1;
// let b = 5
// let c = 7
// let disc = b*b - 4*a*c
// if(disc>0) {
//     root1 = (-b + Math.sqrt(disc)) / (2*a)
//     root1 = (-b - Math.sqrt(disc)) / (2*a)
//     console.log(`realdir ve ${root1} ve ${root2}`)
// } else if(disc === 0) {
//     root1 = root2 = -b / (2*a)
//    console.log(`equation ve ${root1} ve ${root2}`);
// } else {
//     let real = (-b/(2*a)).toFixed(2)
//     let nonreal = (Math.sqrt(-disc)/(2*a)).toFixed(2)
//     console.log(
//       `${real} + ${nonreal}  ve  ${real} - ${nonreal} ve ${real} , ${nonreal}`
//     );
// }

// const a = 10;
// const carpım = 0.621371;
// const donusum = a*carpım
// console.log(donusum)


// const a = 55;
// const sonuc = (a*1.8) +32
// console.log(sonuc)

// const a = Math.round(Math.random() *100) 
// console.log(a)

// const a =10;
// const b = 17
// const c = Math.round(Math.random() *7) +10
// console.log(c)


// const a =-70
// if(a>0) {
//     console.log("pzi")
// } else if (a === 0) {
//     console.log("esitit")
// }else {
//     console.log("nega")
// }

// const a = 10;
// console.log(a > 0 ? "po" : "neg");
// function ali(params) {
//     let a = 5
//     return a
// }
// console.log( ali())
// ******

// const donusum = function(n) {
//     n = n + "";
//     return n.split("").reverse().join("")
// }
// console.log(donusum(322433));

// ******
// const palinddrome = function(word) {

//     let kelime = word.toLowerCase().replace()

// }
// const palindrome = (w) => {

// let lw = w.toLowerCase().replace(" ","");
// let sw = lw.split("").reverse().join("");
//  if(lw ===sw) {
//      console.log("This string is a palindrome");
//  }else {
//         console.log("This string is not a palindrome");
//  }
// }
// palindrome("Eye");
// palindrome("nurses run");
// palindrome("Nose Ali ");

// *****
// const cozum = function(word) {

//     let i = 0;
//     let s = [];

//     for(let i = 0; i<word.length; i++) {

//         let yeni =[];
//         for(let j = i; j<word.length; j++) {
//             yeni.push(word[j]);
//             // console.log(yeni)
//             let enyeni = yeni.join("");
//             s.push(enyeni)
//             console.log(enyeni)
//         }
//     }
//     return s
// }
// cozum("ali")

// *****

// const sıralama = function(x) {
//     let a = x.split("").sort().join("")
//    return a
// }
// console.log( sıralama("abewrgs"))
// ******

// const donusum = function(str) {
// let a = str.split(" ")
// let newa = []
//     for(let i = 0; i<a.length; i++) {
//         newa.push(a[i].charAt(0).toUpperCase() + a[i].slice(1))
//         console.log(newa)
//     }

// return newa.join(" ")

// }
// console.log( donusum("the quick brown fox"))

// **********
// const uzun = function(str) {

//     let a = str.match(/\w[az]{0,}/gi); 
//     // console.log(a)
//     let sonuc =a[0];
//     for (let i = 1; i<a.length; i++) {
//         if(sonuc.length < a[i].length) {
//             sonuc = a[i]
//         }
//     }

//     return sonuc
// }
// console.log( uzun("sen ve ben develepor olabildik"))







