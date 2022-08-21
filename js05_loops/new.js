// let randomStuff = ["apple", 312, 555, true,false, undefined, ["appşe","ball","cat"],2,4,"lastobject"]
// let x = 0;
// while(x<=randomStuff.length) {
//   console.log(x)
//   x++;
  
 
//   console.log(randomStuff[x]);
// }

// ***
// let randomStuff = [
//   "apple",
//   312,
//   555,
//   true,
//   false,
//   undefined,
//   ["appşe", "ball", "cat"],
//   2,
//   4,
//   "lastobject",
// ];

// let num = randomStuff.length
// while(num>=10) {
//     console.log(num)
//     console.log(randomStuff[num]);
//     num -=1
// }
    // ***
    // function ali() {
    //     console.log("beyda")
    // }
    // ali()

    // function ali1(isim) {
    //     console.log(`${isim}`)
    // }
    // ali1("ali")

    // function ali2(a,b,c,d) {
    //     console.log(a+b+c+4)
    // }
    // ali2(1,2,3,4)

    // function ali3Array(mango) {
    //     for(let i = 0; i<mango.length; i++) {
    //         console.log(mango[i])
            
    //     }
    // }
    // ali3Array(["cat","wer","redbull","ayse","are","dfdsf","ere"])
    // ***
    // function adder(num1,num2) {
    //     return num1 + num2;
    // }
    // adder(2,4)
    // let result = adder(2,4)*32
    // console.log(result)
    // console.log(adder(2,4))
    // *****

    // function doesExit(nums,num) {
    //     for(let i = 0; i<nums.length; i++) {
    //         if(nums[i] ===num) {
    //             return true;
    //         }
    //     }
    // return false
    // }
    // console.log(doesExit([2,3,4,5],4))
    // **
    // function yazdir(){
    //     console.log("merhaba")
    // }
    // yazdir()

    // function selamlama(ad,soyAd) {
    //     console.log(`merhabalar benim adım ${ad} ${soyAd}`)
    // }
    // selamlama("ali","aksoy")

    // function yasHeasapla(isim,tarih) {
    //     // const sonuc = `${isim} ${new Date().getFullYear()-tarih}`
    //     // return sonuc
    //     return `${isim}, ${new Date().getFullYear()-tarih}`
    // }
    // const a =yasHeasapla("ayse",1873)
    // console.log(a)
    // console.log(yasHeasapla("ali",1998)) 
    // console.log(yasHeasapla("feyza",12))

    // *****

    // function tekMi(sayi) {
    //     const sonuc =sayi % 2 ? `${sayi} tektir` : `${sayi} ciftir`
    //     return  sonuc
    // }
    // console.log(tekMi(5))
    // console.log(tekMi(6))
    // ***
    
    // const tekMi = function(sayi) {
    //     return sayi % 2 ? "tek" : "cift"
    // }
    // console.log(tekMi(4))

    const hesapla = function(a,b,c = -Number.MAX_VALUE) {

        let enBuyuk;
         if (a > b && a > c) {
            enBuyuk = a
         } else if (b > a && b > c) {
            enBuyuk = b
         } else if (c > a && c > b) {
            enBuyuk = c
         }
            return enBuyuk
        }   

    // const a =1
    // const b =11
    // const c =4
    // console.log(`girlen sayıların en buyugu ${hesapla(a,b,c)}`)
    console.log(`girlen sayıların en buyugu ${hesapla(-8,-9)}`)
