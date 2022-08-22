// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK:
//************************************************/

// const r = Number(prompt("yarıcap giriniz"))
// const h = Number(prompt("yukseklik giriniz"))

// const silindirHacmi = (r,h) => Math.PI*r*r*h;
// console.log(`${r},${h} olan silindir hacimi = ${silindirHacmi(r,h).toFixed(2)}`)


const tarih = Number(prompt("Dogum Tarihini giriniz:"));

//! Arrow Func yontemi ile tanimlama
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

// console.log("YASINIZ:" + yasHesapla2(tarih));
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//! Func Expression yontemi ile tanimlama
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

console.log("YASINIZ:" + yasHesapla(tarih));
