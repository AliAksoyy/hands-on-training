// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// const not = prompt("Lütfen 0-100 arasında bir not giriniz");

// while (not < 0 || not > 100) {
//     console.log("Not 0-100 arasinda olmalidir") ;
//     not = prompt("Lütfen 0-100 arasında bir not giriniz")   
// }
// console.log("girdiginiz not:", not)

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz

// let not1;
// do {
//     not1 = +prompt("Lütfen 0-100 arasında bir not giriniz");
//     if(not1 < 0 || not1 > 100) {
//         console.log("not 0-100 arasında olmalıdır")
//     }
// }
// while (not1 < 0 || not1 > 100) 
// console.log("girdiginiz not:", not1);

//! ************** ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

// ****let-var-const ***


// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let age = 30;
// age = 31;
// console.log(age);
// let yas;
// console.log(yas);
// yas = 12;
// console.log(yas);

// const yıl = 1991;
// yıl = 1990;
// console.log(yıl);

// var lastName = "aksoy";
// console.log(lastName);


// *** oparators***


const now = 2037
const age = now - 1991;
const ageAyse = now- 1971;
console.log(age, ageAyse);

console.log(age *2, age / 2,  2 ** 3);

const firstName = "ali";
const lastName = "aksoy";
console.log(firstName + lastName);