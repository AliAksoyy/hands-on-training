// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

const not = prompt("Lütfen 0-100 arasında bir not giriniz");

while (not < 0 || not > 100) {
    console.log("Not 0-100 arasinda olmalidir") ;
    not = prompt("Lütfen 0-100 arasında bir not giriniz")   
}
console.log("girdiginiz not:", not)
