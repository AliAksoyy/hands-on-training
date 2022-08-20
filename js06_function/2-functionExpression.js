// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/

// !! Expression ile tanımlama

const tekCift1 = function (sayi) {
    return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} CIFTDIR`;
};
console.log(tekCift1(5));

// *** örnek
const byukBul = function(n1,n2,n3) {
  
    let enBuyuk;
    if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
    } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
    } else if (n3 >= n1 && n3 >= n2) {
      enBuyuk = n3;
    }
    return enBuyuk
}

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

console.log(`Girilen sayiların en buyugu: ${byukBul(n1,n2,n3)}`)
console.log(`Girilen sayiların en buyugu: ${byukBul(34,32,15)}`)