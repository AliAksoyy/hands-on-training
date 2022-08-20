// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//* ORNEK:
//************************************************/



yazdir();
// !fonksiyonun tanımlanması (declaration)
function yazdir () {
    console.log("merhaba");
}
yazdir ()    //!!invoke called
yazdir ();


// *** örenek -2
//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

function selamlama(ad,soyAd = "") {
    console.log(`Merhaba ${ad} ${soyAd}`)
}
selamlama("Can", "Yılmaz");
selamlama("Canan", "Ozturk");
selamlama("Ayse", );

// *** örenek-3


function yasHesapla(isim,dogumTarihi) {
    // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir`;
    // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir`;
    // return sonuc;
    return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir`;

}
const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("veli Canan",1980))