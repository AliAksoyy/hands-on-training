// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
let str1 = "Clarusway";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

//!2 - Non-primitive String tanımlama
const str4 = new String("Non-Primitive");
console.log(typeof str4);

//?----------------------------------------
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // Concatination
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* --------------------------------------------------
console.log( str1.concat(str2))
console.log(str1,str2)
// ? Assiging ile degişkenin değeri değiştirilir
str1 = str1.concat(str3, " Path")
console.log(str1);


// ******
// * toUpperCase toLowerCase
// *******

const myName = "Noah Adams"
console.log(myName.toUpperCase())
console.log(myName.toLowerCase());

let yourName = "ali"
yourName = yourName.toLocaleUpperCase()
console.log(yourName)

const esitMi = function(str1,str2){
   return str1.toLowerCase() === str2.toLowerCase() ? 
   `${str1} ile ${str2} Esittir`:
    `${str1} ile ${str2} Esit degildir`
}
console.log(esitMi("Merhaba" ,"MERHABA"))
console.log(esitMi("Hello" ,"Hell"))

// ****localeCompare()

const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

// *****
// *****charAt()
// ***********

const str6 = "Full Stack Path"
console.log(str6.charAt(3))
console.log(str6.charAt()) //* ilk değeri dondurur
console.log(str6.charAt(14))

// *** Length bir property (objenin değişkendiri ve stringin karakter sayısını tutar)
console.log(str6.charAt(str6.length -1))

// *****
// *****include()  -case sentive
// ***********
const word = "To be or not to be, that is the question"
console.log(word.includes("to be"))
console.log(word.includes("That"))
console.log(word.includes(""))