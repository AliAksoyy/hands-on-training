// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

// ! 1 inci proje

// console.log("****** FOR *******");

// const n = +prompt("bir sayi giriniz")

// let toplam = 0;
// for ( let i=1; i<=n; i++) {
//     toplam +=i;
//     console.log(toplam, i)
// }
// console.log("sonuc:", toplam);


// ? 2 nci proje 0-100 arasında 10 ader rastgele tam sayı üreten kodu yazın

//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam 

// for(let i = 1; i <= 10; i++) {
//     const rastgele = Math.round(Math.random() * 100);
//     console.log(rastgele)
// }

// ? girilen sayının asal sayıp olup olmadıgını yazdıran kodu yaz for döngüsünü kullanarak

const sayi = prompt("Pozitif bir sayi giriniz");
let asal = true;

if(sayi <= 1) {
    alert("sayi 1'den buyuk olmalidir")
} else {
    for(let i=2 ; i<sayi ; i++) {
        if(sayi % i == 0) {

        }
    }
}
