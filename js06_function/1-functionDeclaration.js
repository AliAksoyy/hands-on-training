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