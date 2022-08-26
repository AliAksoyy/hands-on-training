// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/
// yazdir();

// //! Fonksiyonun tanimlanmasi (declaration)
// function yazdir() {
//   console.log("merhaba");
// }

// yazdir(); //! invoke, call, cagirma
// yazdir();

// //* ORNEK2:
// //*************************************************/

// function selamla(ad, soyAd = "") {
//   console.log(`Merhaba ${ad} ${soyAd}`);
// }

// selamla("Can", "Yilmaz");
// selamla("Canan", "Ozturk");
// selamla("Ayse");
// selamla("John");

// //! Bir parametreyi cagirma sirasinda kullanmaz isek onun
// //! yerine default parametre atayabiliriz. Ornekteki lastName
// //! parametresi icin default değer olarak '' atanmistir.

// //* ORNEK3:
// //***************************************************/

// function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
  // return sonuc;
//   return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
// }

// const mesaj1 = yasHesapla("Elif Can", 1990);
// console.log(mesaj1);
// console.log(yasHesapla("Veli Canan", 1980));

// //* ORNEK4:
// //*****************************************************/

// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

// console.log(tekCift(5));
// console.log(tekCift(2));

// //* ORNEK4:
// //*****************************************************/
// const n = +prompt("Bir sayi giriniz:");
// console.log(tekCift(n));


// *** fonsiyon tanımlama 

// function yasYazdır() {
//   console.log(`benim adım mehmet ve ben ${2021-1978} yaşındayım`)
// }
// yasYazdır();
// yasYazdır();

// function yasYazdir(ad,tarih) {
//   console.log(`benim adım ${ad} ve ben ${2021- tarih} yasindayim`)
// }
// yasYazdir("murat",1990)
// yasYazdir("ali",1980)

// function yasYazdir(ad,tarih) {
//   const yas = 2021 - tarih;
//   console.log(`benim adım ${ad} ve ben ${new Date().getFullYear() - tarih} yasındayim`);
//   return yas;
// }
// yasYazdir("ali",1990);

// const yasAli = yasYazdir("ali",1991)
// const yasAhmet = yasYazdir("ahmet",1999)

// console.log(`yaslatın ortalamas = ${(yasAli + yasAhmet) / 2}`);

// ** tek mi çift mi çalışması

// function tekCift(sayi) {
//   return sayi % 2 ? "tektir" : "cift"
// }
// console.log(tekCift(5)) 
// console.log(tekCift(6)) 