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

    // const hesapla = function(a,b,c = -Number.MAX_VALUE) {

    //     let enBuyuk;
    //      if (a > b && a > c) {
    //         enBuyuk = a
    //      } else if (b > a && b > c) {
    //         enBuyuk = b
    //      } else if (c > a && c > b) {
    //         enBuyuk = c
    //      }
    //         return enBuyuk
    //     }   

    // const a =1
    // const b =11
    // const c =4
    // console.log(`girlen sayıların en buyugu ${hesapla(a,b,c)}`)
    // console.log(`girlen sayıların en buyugu ${hesapla(-8,-9)}`)
// ****
   

// const hesapla = function(n1,n2,islem) {
//     let sonuc;
//     switch (islem) {
//         case "+":
//         sonuc = toplam(n1,n2)
//         break;
//     }
//     switch (islem) {
//         case "-":
//         sonuc = cıkart(n1,n2)
//         break;
        
//     }
//     switch (islem) {
//         case "/":
//         sonuc = bol(n1,n2)
//         break;
//     }
//     switch (islem) {
//         case "*":
//         sonuc = carp(n1,n2)
//         break;
//     }
//     return sonuc;
// }

// const toplam = function(n1,n2) {
// return n1 + n2
// }
// const cıkart = function(n1,n2) {
// return n1 - n2
// }
// const bol = function(n1,n2) {
// return n1 / n2
// }
// const carp = function(n1,n2) {
// return n1 * n2
// }
// console.log(hesapla(12,3,"*"))
// console.log(hesapla(12,3,"/"))


// const hesapMakinesi = function(n1,n2,islem) {
//     let sonuc;
//     switch(islem) {
//         case "+":
//             sonuc = n1+n2;
//             break;
//         case "-":
//             sonuc = n1-n2;
//             break;
//         case "*":
//             sonuc = n1*n2;
//             break;
//         case "/":
//             sonuc = n1/n2;
//             break;
//     }
//     return sonuc
// }
// console.log(hesapMakinesi(12,34,"/"))
// ****

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// for(let i =7; i>=0; i--) {
//     console.log(`${i}`)
// }
// console.log(Boolean(""))

// const n = 7
// let toplam = 0
// for(let i=1; i<=n; i++) {
//     toplam +=i
//     console.log(toplam,i)
// }
// console.log("sonuc",toplam)


// for(let i = 0; i<10; i++) {
//     const rs = Math.round((Math.random()*100))
//     console.log(rs)
// }

// const sayi = Number(prompt("bir sayi giriniz",100));
// let asal = true;
// if(sayi <=1) {
//     alert("sayi 1'den büyük olmaldıdır")
// } else {
//     for(let i = 2; i<sayi; i++) {
//         if(sayi % i === 0) {
//          asal = false;
//          break;   
//         }

//     }
//     const sonuc = asal ===true ? "asal" : "asal değildir"
//     console.log(`${sayi} ${sonuc}`)
// }

// ***
// let i = 6;
// while(i<=10) {
//     console.log(i,"merhaba")
//     i++;
// }

// ****
// let not = Number(prompt("sayi gir"));

// while(not<0 || not>100) {
// console.log("not 0-100 arasında olmalıdır")
// not = prompt("yeni sayı gir")
// }
// console.log("girdiğiniz not:",not)

// ****
// let not;
// do {
//     not = Number(prompt("sayi gir"));
//     if(not < 0 || not > 100) {
//         console.log("not 0 ila 100 arası")
//     }
// } while (not < 0 || not > 100)
// console.log("girilen sayı", not)
// ****

// let hak = 5;
// const rastgele = Math.round(Math.random()*100);
// console.log(rastgele)
// let tahmin;
// do {
// let tahmin = Number(prompt("sayi tahmin et"))
// hak -=1;
// if(tahmin ===rastgele) {
//     console.log(`tebrikler ${5-hak} kerede bildiniz`);
//     break;
// } else if (tahmin<rastgele) {
//     console.log("arttır")
// } else {
//     console.log("azalalt")
// }
// }while(hak>0)
// if(rastgele !== tahmin) {
// console.log("üzgünüz kaybettiniz");
// }
// *****
// const a = -72;
// const b = -54;
// const c = -52

// enBuyuk = a;
// if(enBuyuk<b) {
//     enBuyuk = b;
// } 
//  if (enBuyuk <c) {
//     enBuyuk = c
// }
// console.log(`${enBuyuk} `, typeof enBuyuk)
// *******
// const hız = 60;
// const mesaj = hız >90 ? "hızlı":(hız >70 ? "yavas" : "cokyavas")
// console.log(mesaj,typeof mesaj)


// const a =26;
// const cins = "erkek"
// const sa = true;


//  console.log(a>26 && cins === "erkek" && sa ? "askerlik yapmalı" : "yapmamalı") 

// ***
// let a = 5;
// let b = 5;
// console.log(a*b)
// console.log(a/b)
// ****
// let a = 10
// let b = 12
// let c = 14

// const yarı = (a+b+c)/2
// const area = Math.sqrt(
//     yarı *((yarı-a) * (yarı-b)* (yarı-c)))
//     console.log(area)
// ***
// let a =80
// const f =  (80*9) / 5 +32
// console.log(f)

// let b = 176
// const c = (b-32) *5 / 9
// console.log(c)
// *****
// const today = new Date()
// console.log(today)
// console.log(today.getHours())
// console.log(today.getMonth() +1)
// console.log(today.getFullYear())
// console.log(today.getDay()+20)
// ***
// let a =34; b = 34; c = 35
// const sonuc = (a%10 === b%10) || (b%10 === c%10)
//  || (a%10 === c%10)
// console.log(sonuc)

// *************array ler


// const friends = ["ali", "veli", "ayse",1991, true]
// console.log(friends);

// const years = new Array(1991,2004,2020,1964)
// console.log(years)
// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length)
// console.log(friends[friends.length-1])

// friends[2] = "Ahmet"
// console.log(friends);


// const firsName = "ali"
// const ali = [firsName, "aksoy", 2037-1991, "engenieer",friends, years]
// console.log(ali)
// console.log(ali.length)
// console.log(ali[4])

// // ************* örnek

// const hesapla = (yas) => 2037-yas

// const tarih = [1990, 1967, 2002, 2010, 2018]
// const zaman = 1991


// console.log(hesapla(1991))

// const age1 = hesapla(tarih[0])
// const age2 = hesapla(tarih[1])
// const age3 = hesapla(tarih[tarih.length-1])
// console.log(age1,age2,age3)


// const ages = [hesapla(tarih[0]), hesapla(tarih[1]), hesapla(tarih[tarih.length-1])]
// console.log(ages)

// console.log(hesapla(tarih[3]))
// console.log(hesapla(tarih[tarih.length -1]))

// **** array exercise

// const friends = ["ali","ayse","beyda","feyza"]

// const new1 =friends.push("Jay","celil","halil")
// console.log(new1)
// console.log(friends)

// const b =friends.unshift("Canan")
// console.log(b)
// console.log(friends);

// const c =friends.pop()
// console.log(c)
// friends.pop()
// friends.pop()
// console.log(friends)

// const d =friends.shift()
// console.log(d)
// console.log(friends)

// console.log(friends.indexOf("ali"))
// console.log(friends.indexOf("Ali"))

// friends.push("23")
// console.log(friends.includes("ali"))
// console.log(friends.includes("Ali"))
// console.log(friends.includes(23))
// if(friends.includes("ali")) {
//     console.log("okey")
// }

// **** exercise arrays


// const calcTip = function (bill) {
//     return bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2
// }
// const bill = [125,555,44]
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// const toplam = [bill[0] + tip[1], bill[0] + tip[1], bill[1] + tip[1]];
// console.log(bill,tip,toplam)

// ***************object issue

const ali = [
    "ali",
    "aksoy",
    2037-1991,
    "teacher",
    ["ayse", "beyda", "feyza"]
]
console.log(ali)

const ali1 = {
  firstName: "ali",
  lastName: "aksoy",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["ayse", "beyda", "feyza"]
}
console.log(ali1)

console.log(ali1.lastName)
console.log(ali1["lastName"]);

const nameKey = "Name"
console.log(ali1[`first` + nameKey])
console.log(ali1[`last` + nameKey])

