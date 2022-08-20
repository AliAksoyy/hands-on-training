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
console.log(tekCift1(5))