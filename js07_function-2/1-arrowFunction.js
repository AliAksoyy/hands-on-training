// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK:
//************************************************/

const r = Number(prompt("yarıcap giriniz"))
const h = Number(prompt("yukseklik giriniz"))

const silindirHacmi = (r,h) => Math.PI*r*r*h;
console.log(`${r},${h} olan silindir hacimi = ${silindirHacmi(r,h).toFixed(2)}`)
