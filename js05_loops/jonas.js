'use strict';

// const interface = "audio"
// console.log(interface)
// **** function

// function logger () {
//     console.log("My name is Ali")
// }

// logger()
// logger()
// logger()

// function fruit(apples,oranges) {
// console.log(apples,oranges)
// const juice = `Juice with ${apples} apples and ${oranges} oranges`
// return juice

// }
// fruit(4,5)
// console.log(fruit(4,5))
// const applejuice = fruit(3,0)
// console.log(applejuice)

// // *** function declaration
// function yas(tarih) {
//     // const a = new Date().getFullYear() -tarih
//     return new Date().getFullYear() -tarih

// }
// const b = yas(1991)
// console.log(b)


// // **** function expression

// const yas1 = function(tarih) {
//     return new Date().getFullYear() - tarih
// }
// const c = yas(1990)
// console.log(c)

// // *** arrow functions
// const yas2 = tarih=> 2037-tarih
// const d = yas2(1991)
// console.log(d)

// const yearsUntilRetirment = (tarih,firstName) => {
//     const age =new Date().getFullYear() - tarih;
//     const retirement = 65 -age;
//     return  `Benim adım ${firstName}'dir ${age} yaşındayım ve emekliliğime ${retirement} kaldı`
// }
// const e =  yearsUntilRetirment(1991,"ali aksoy")
// console.log(e)
// console.log(  yearsUntilRetirment(1989,"feyza"))

// // *** function callin other functions

// const  meyveParcaSayisi = fruit => fruit *10


// const meyveİslem = function(elma,armut) {

//     const e = meyveParcaSayisi(elma)

//     const f = meyveParcaSayisi(armut)
  
//     const g = `juice with ${e} elma and ${f} armut`;
//     return g;
// }
// console.log( meyveİslem(3,5))



// // **** örnek 2

// const yas3 = function(tarih) {
//     return 2037-tarih
// }

// const emeklilik = function(tarih,isim) {
//     const yas4 = yas3(tarih)
//     const emek = 65 -yas4;
    
//     if(emek >0) {
//         console.log(`${isim} emekliliğe ${emek} kaldı`)
//         return emek
//     } else {
//          console.log(`${isim} emekli oldunuz🤩`);
//          return - 1
//     }
    
// }
// console.log(emeklilik(1991,"ali"))
// console.log(emeklilik(1951,"ali"))
// *** code challenge


// const calcAverage = (n1,n2,n3) => (n1+n2+n3) / 3;
// console.log(calcAverage(3,4,5))
// let avgDolphin = calcAverage(44,23,71)
// let avgKoalas = calcAverage(65,54,49)
// console.log(avgDolphin,avgKoalas)

// const chekWinner = function(avgDolphin,avgKoalas) {
//     if(avgDolphin >=  2* avgKoalas) {
//         console.log(`Dolphins win ${avgDolphin} vs ${avgKoalas}`);
//     } else if (avgKoalas >= 2*avgDolphin)  {
//         console.log(`Koala win ${avgDolphin} vs ${avgKoalas}`);
//     }else {
//         console.log(`No teams wins`)
//     }
// }
// chekWinner(avgDolphin,avgKoalas);

// chekWinner(49,100)

//  avgDolphin = calcAverage(85,54,41);
//  avgKoalas = calcAverage(23,34,27);
//  console.log(avgDolphin, avgKoalas)
//  chekWinner(avgDolphin,avgKoalas)

// ****

// let a = 10;
// let b = 20;
// console.log(a + b);
// console.log(a.toString() + b.toString())
// ****

// let ogr1 = {
//     name:"ali",
//     dtarihi: 2012,
//     not1:70,
//     not2:70,
//     not3:80
// };
// let ogr2 = {
//     name:"ayse",
//     dtarihi: 2002,
//     not1:40,
//     not2:40,
//     not3:50
// };
// let ogr1yas = new Date().getFullYear() - ogr1.dtarihi
// let ogr2yas = new Date().getFullYear() - ogr2.dtarihi
// let ogr1ort = (ogr1.not1 + ogr1.not2 + ogr1.not3) / 3
// let ogr2ort = (ogr2.not1 + ogr2.not2 + ogr2.not3) / 3
// let ogr1basarılMı = (ogr1ort > 50)
// let ogr2basarılMı = (ogr2ort > 50)
// console.log(ogr1basarılMı)
// console.log(ogr2basarılMı)
// console.log(parseInt(ogr1ort))
// console.log(ogr2ort)

// ****

// let sayi = prompt("sayi giriniz");
// if(sayi >10 && sayi<50) {
//     console.log("doğru")
// }else {
//     console.log("yanlıs")
// }

// let sayi = prompt("sayi giriniz");
// if((sayi>0) && (sayi%2 ===1) ) {
//     console.log("sayı pozitif ve tektir")
// }else {
//     console.log("yanlıs")
// }
