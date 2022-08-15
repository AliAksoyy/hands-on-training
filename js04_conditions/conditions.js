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

const yas = 17;
const cinsiyet = "erkek";
const saglikli = true;

yas >= 18 && cinsiyet === "erkek" && saglikli
? console.log("askerlik yapmali")
: console.log("Askerlik yapmasına gerek yok");


