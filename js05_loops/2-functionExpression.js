// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
// const tekCift1 = function (sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// };

// console.log(tekCift1(5));

// const tekMi = function(x) {
//   return x % 2 ? "tek" : "cift"
// }
// console.log(tekMi(5))




//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

// const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
//   let enBuyuk;
//   if (n1 >= n2 && n1 >= n3) {
//     enBuyuk = n1;
//   } else if (n2 >= n1 && n2 >= n3) {
//     enBuyuk = n2;
//   } else if (n3 >= n1 && n3 >= n2) {
//     enBuyuk = n3;
//   }
//   return enBuyuk;
// };

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));
// console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
// console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9));

// console.log("Girilen sayilarin en buyugu:", buyukBul(9, 10));

// //* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
// //**************************************************/
// const topla = function (s1, s2) {
//   return s1 + s2;
// };

// const cikar = function (s1, s2) {
//   return s1 - s2;
// };
// const bol = function (s1, s2) {
//   return s1 / s2;
// };
// const carp = function (s1, s2) {
//   return s1 * s2;
// };

// const hesapla = function (s1, s2, islem) {
//   let sonuc = 0;
//   switch (islem) {
//     case "+":
//       sonuc = topla(s1, s2);
//       break;
//     case "-":
//       sonuc = cikar(s1, s2);
//       break;
//     case "/":
//       sonuc = bol(s1, s2);
//       break;
//     case "*":
//       sonuc = carp(s1, s2);
//       break;
//     default:
//       break;
//   }
//   console.log("SONUC:", sonuc);
//   return sonuc;
// };

// hesapla(3, 5, "+");
// console.log(hesapla(4, 3, "/"));


// ***
// function yazdir () {
//   console.log("merhaba")
// }
// yazdir()
// yazdir()

// **

// function selamla (ad ,soyAd = "") {
//   console.log(`benim adım ${ad} ve soyadım ${soyAd}`)
// };


// selamla("can","öztürk");
// selamla("canan","öz");
// selamla("canan");

// ** örrnek

// function yasHesapla(isim,tarih) {
//   const sonuc = `${isim} in yasi ${new Date().getFullYear()-tarih}`;
//   return sonuc;
// }
// const mesaj1 = yasHesapla("elif", "1990")
// console.log(mesaj1);
// console.log(yasHesapla("ali",1453))

// ** örenek

// function tekMi(sayi) {
//   return sayi % 2 ? `${sayi} tek` : `${sayi} cift`;
// }
// const sayi = prompt("bir sayı gir");
// console.log((tekMi(sayi)))
// console.log(tekMi(5));  
// console.log(tekMi(6));  

// *** 


// const tekCift = function(sayi) {
//   return sayi % 2 ? `${sayi} tek` : `${sayi} cift`
// }
// console.log(tekCift(4))


// ** örnek 3 sayi en büyüğünü bul

// const a = prompt("sayi 1 bir gir")
// const b = prompt("sayi 2 bir gir")
// const c = prompt("sayi 3 bir gir")

// let enBuyuk = a;
// if(enBuyuk <b) {
//   enBuyuk = b;

// }
// if (enBuyuk < c) {
//   enBuyuk = c
// }
// console.log(`en buyuk sayı ${enBuyuk}`)

// const buyukBul = function(n1,n2,n3) {
//   let enBuyuk;
//   if(n1 >= n2 && n1 >= n3) {
//     enBuyuk = n1;
//   }else if(n2 >= n1 && n2 >= n3) {
//     enBuyuk = n2;
//   } if(n3 >= n2 && n3 >= n1) {
//     enBuyuk = n3;
//   }
//   return enBuyuk
// }
// console.log("girilen sayıların en buyugu", buyukBul(1,2,3))
// console.log("girilen sayıların en buyugu", buyukBul(1,2,""))

// ***
// const hesapla = function(s1,s2,islem) {
//   let sonuc;
//     switch (islem) {
//       case "+":
//       sonuc = topla(s1,s2)
//         break;
//       case "-":
//       sonuc = cıkar(s1,s2)
//         break;
//       case "*":
//       sonuc = carp(s1,s2)
//         break;
//       case "/":
//       sonuc = bol(s1,s2)
//         break;
    
//     }
//     return sonuc
// }

// const topla = function(s1,s2) {
//   return s1 + s2;
// }
// const cıkar = function(s1,s2) {
//   return s1 - s2;
// }
// const carp  = function(s1,s2) {
//   return s1 * s2;
// }
// const bol = function(s1,s2) {
//   return s1 / s2;
// }



// console.log(hesapla(3,5,"/"))

// ***

// for(let i = 0; i <=10; i++) {
//   console.log(i);
// }

// **
// let sum = 0
// for(let num = 10; num <100; num +=5) {
//   console.log(num);
//   sum +=num;
// }
// console.log(sum ,"toplam değeri")

// ***

// let fruits = ["mango","banana", "apple","cherry", "ali"];

// for(let i = 0; i<fruits.length; i++) {
//  console.log(fruits[i])
// } 

// ***
// let data = {
//   name:"johm",
//   age:28,
//   matitalStatus:true
// }

// console.log(data["age"])
// for(let elem in data) {
//   console.log(elem, data[elem])
// }
// ******

// let num = 20;
// if(num>0) {
//   console.log("the number positive")
// }
// if(num<0) {
//   console.log("the number is negative")
// }

// let num = 3
// if(num>0) {
//   console.log("the number positive")
// } else if (num<0) {
//    console.log("negative")
// }
// else {
//  console.log("zero")
// }

// ***
// let isRaining = confirm("okey or no")
// if(isRaining == true) {
//   console.log("semsiye")
// }else {
//   console.log("alma")
// }
// ***

// let name = "ali";
// let age = 17;
// let okul = true;

// if(age>18 || okul ===true) {
//   console.log("iş")
// } else {
//   console.log("olumsuz")
// }

// **

// let sum = 0;
// for(let i = 0; i<10; i++) {
//   sum +=i;
//   console.log(sum,i)

// }
//   console.log(`total deger ${sum}`);

for(let i = 10; i>=0; i--) {
  console.log(i)
}

let sum =0;

for(let i = 100; i>=0; i--){
  sum +=i
}
console.log(sum,)