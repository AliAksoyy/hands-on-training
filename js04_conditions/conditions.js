// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

// const sayi = +prompt("Bir sayi giriniz:");
// if (sayi > 0) {
//     console.log(`${sayi} pozitifdir.`);
// } else if (sayi == 0) {
//     console.log(`${asyi} 0'a esittir.`);
// } else {
//     console.log(`${sayi} negatiftir.`)
// }
// console.log(sayi, typeof sayi);

// const n1 = +prompt("Sayi1:")
// const n2 = +prompt("Sayi2:")
// const n3 = +prompt("Sayi3:")

// // *1.Yöntem

// if(n1 >= n2 && n1 >= n3) {
//     console.log(`${n1} en buyuk sayidir.`);
// } else if (n2 >= n1 && n2 >= n3) {
//     console.log(`${n2} en buyuk sayidir.`);
// } 
//  else if (n3 >= n1 && n3 >= n3) {
//     console.log(`${n3} en buyuk sayidir.`);
// } 

// // *2. Yöntem
// let enBuyuk = n1;
// if (n2 >= enBuyuk) {
//     enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//     enBuyuk = n3;
// }
// alert(`${enBuyuk} en buyuktur`);


// const not = +prompt("Notunuzu Giriniz");
// let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// console.log(sonuc);

// const yas = 20;
// const cinsiyet = "erkek";
// const saglikli = true;

// yas >= 18 && cinsiyet === "erkek" && saglikli
// ? console.log("askerlik yapmali")
// : console.log("Askerlik yapmasına gerek yok");


// let a = +prompt("Bir sayı giriniz",100);
// alert(`Bu yasndasin  ${a} `);

// let isLegit = confirm("are you legit");
// alert(isLegit);

// let aValue = null
// console.log(aValue, typeof aValue);

// var x = (0.2*10 + 0.1*10) / 10;
// console.log(x);

// let num = 0o34;
// console.log(num)

// 
// const myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = "1991";
// console.log(myCar)

// const myCar = {
//     make:"Ford",
//     model:"Mustang",
//     year: 1991,
// };
// console.log(myCar.model)

// let aNumber  = 3;
// aNumber  *= 3
// console.log(aNumber)

// let a = 9;
// let b = 2;
// console.log("a % b =", a%b)

// let a = 5;
// let b = --a;
// console.log(a)
// console.log(b)

// const a = 5, b = 2, c = "Clarusway";
// console.log(a !== 5)
// console.log(b == '2')
// console.log(c == "clarusway")

// const a = 2, b = true, c = false;
// console.log((a>2) || (a<4) )

// let a = 6, b = 7, c = 12;
// let d = a && b && c;
// let e = a || b || c;
// console.log(d)
// console.log(e)

// console.log('clarus' + 'way');
// let a = "Full-Stack"
// a += ' Develepoer';
// console.log(a);
// let b = '55'
// let c = +b;
// console.log(b, typeof b);
// console.log(c, typeof c);

// const user = {
//     firstName: "ali",
//     lastName: "Aksoy",
// };
// console.log(user);
// delete user.lastName;
// console.log(user)

// const number = prompt("Enter your number?", 100);
// if (number>0) {
//     console.log("The number is positive");
// } else if (number == 0){
//     console.log("The number is  0")
// } else {
//     console.log("The number is negative")
// }
// console.log("The number is statement is easy");

// const number = +prompt("Enter your number?", 100);
// if (number >= 0) {
//     if (number == 0) {
//         console.log("This number is 0")
//     }else {
//         console.log("sıfırdan büyüktür")
//     }
// } else {
//     console.log("sıfırdan kücüktür ve eksi bir sayıdır")
// }

// let grade = prompt("Enter your score?", 100);
// let result = (grade >= 50) ? 'passed' : 'failed';
// console.log(`you ${result}, ${grade} the exam.`);

// const age = prompt("Enter your number")
// let result;
// if (age >= 18) {
//     result = "You are legal."
// } else {
//     result = "you are not legal yet."
// }
// console.log(result);

// const age = 20;

// let result = (age >= 18) ? "You are legal" : "You are not legal yet"
// console.log(result)

let a = 0;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(result)