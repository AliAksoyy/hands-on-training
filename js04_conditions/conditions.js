// // * ===============================================
// // *                  KARAR YAPILARI
// // * ===============================================

// //**************** IF-ELSE *******************

// console.log("****** CONDITIONS *******");

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

// const yas = 20;
// const cinsiyet = "erkek";
// const saglikli = true;

// yas >= 18 && cinsiyet === "erkek" && saglikli
// ? console.log("askerlik yapmali")
// : console.log("Askerlik yapmasına gerek yok");


// let a = +prompt("Bir sayı giriniz",100);
// alert(`Bu yasndasin  ${a} `);

// let isLegit = confirm("are you legit");
// alert(isLegit);

// let aValue = null
// console.log(aValue, typeof aValue);

// var x = (0.2*10 + 0.1*10) / 10;
// console.log(x);

// let num = 0o34;
// console.log(num)


// const myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = "1991";
// console.log(myCar)

// const myCar = {
//     make:"Ford",
//     model:"Mustang",
//     year: 1991,
// };
// console.log(myCar.model)

// let aNumber  = 3;
// aNumber  *= 3
// console.log(aNumber)

// let a = 9;
// let b = 2;
// console.log("a % b =", a%b)

// let a = 5;
// let b = --a;
// console.log(a)
// console.log(b)

// const a = 5, b = 2, c = "Clarusway";
// console.log(a !== 5)
// console.log(b == '2')
// console.log(c == "clarusway")

// const a = 2, b = true, c = false;
// console.log((a>2) || (a<4) )

// let a = 6, b = 7, c = 12;
// let d = a && b && c;
// let e = a || b || c;
// console.log(d)
// console.log(e)

// console.log('clarus' + 'way');
// let a = "Full-Stack"
// a += ' Develepoer';
// console.log(a);
// let b = '55'
// let c = +b;
// console.log(b, typeof b);
// console.log(c, typeof c);

// const user = {
//     firstName: "ali",
//     lastName: "Aksoy",
// };
// console.log(user);
// delete user.lastName;
// console.log(user)

// const number = prompt("Enter your number?", 100);
// if (number>0) {
//     console.log("The number is positive");
// } else if (number == 0){
//     console.log("The number is  0")
// } else {
//     console.log("The number is negative")
// }
// console.log("The number is statement is easy");

// const number = +prompt("Enter your number?", 100);
// if (number >= 0) {
//     if (number == 0) {
//         console.log("This number is 0")
//     }else {
//         console.log("sıfırdan büyüktür")
//     }
// } else {
//     console.log("sıfırdan kücüktür ve eksi bir sayıdır")
// }

// let grade = prompt("Enter your score?", 100);
// let result = (grade >= 50) ? 'passed' : 'failed';
// console.log(`you ${result}, ${grade} the exam.`);

// const age = prompt("Enter your number")
// let result;
// if (age >= 18) {
//     result = "You are legal."
// } else {
//     result = "you are not legal yet."
// }
// console.log(result);

// const age = 20;

// let result = (age >= 18) ? "You are legal" : "You are not legal yet"
// console.log(result)

// let a = 0;
// let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
// console.log(result)

// let day = 5;
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;

//     default:
//         dayName = "Invalid day";
// }
// console.log(dayName);

// let a = 3;

// switch (a) {
//     case "3":
//         a = 33;
//         break;
//     case 2:
//         a = "two";
//         break;
//     case 3:
//         a = 'three';
//         break;
//     default:
//         a = 'not found';
//         break;
// };
// console.log(`The value is ${a}`);

// const sayi = prompt(`Bir sayi giriniz`,100);
// if (sayi > 0) {
//     alert(`Girilen sayı ${sayi}'tür ve 0 dan büyüktür`)
// }
// if (sayi == 0) {
//     console.log(`Girilen sayı ${sayi}  dır`);
// }
// if (sayi < 0) {
//     console.log(`Girilen sayı ${sayi}  dır ve sıfırdan küçüktür`);
// }

// const sayi = prompt(`Bir sayi giriniz`);
// if (sayi >= 0) {
//     console.log("pozitifdir")
// }else {
//     console.log("negatiftir")
// };


// const a = +prompt("1. sayi giriniz");
// const b = +prompt("2. sayi giriniz");
// const c = Number(prompt("3. sayi giriniz"));
// if ((a > b) && (a > c)) {
//     alert(`sayıların en büyüğü ${a}'dır`)
// }
// if ((b > a) && (b > c)) {
//     alert(`sayıların en büyüğü ${b}'dır`)
// }
// if ((c > a) && (c > b)) {
//     alert(`sayıların en büyüğü ${c}'dır`)
// }

// const a = +prompt("1. sayi giriniz");
// const b = +prompt("2. sayi giriniz");
// const c = Number(prompt("3. sayi giriniz"));

// let enBuyuk = a;
// if ( b >= enBuyuk) {
//     enBuyuk = b;
// }
// if (c >= enBuyuk) {
//     enBuyuk =c;
// } console.log(`en büyük sayım ${enBuyuk}'tür`)

// const age = prompt("sayi :");
// const gender = "erkek";
// const healty = true;

// const condition = (age >= 18 && gender == "erkek" && healty);
// if (condition) {
//     console.log("Askerlik yapmalı");
// } else {
//     console.log("Askerli yapması gerekmez")
// }

// let a = 3;

// switch (a) {
//     case "3":
//         a = 33;
//         break;
//     case 2:
//         a = "two";
//         break;
//     case 3:
//         a = 'three';
//         break;
//     default:
//         a = 'not found';
//         break;
// };
// console.log(`The value is ${a}`);

// let a = 5;
// switch (a) {
//     case "3":
//         a = 33;
//         break;
//     case 2:
//         a = "two";
//         break;
//     case 3:
//         a = "Ali Aksoy"
//         break;
//     default:
//         a = "not found";
//         break;

// }
// console.log(a)


// let day = 5;
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;

//     default:
//         dayName = "Invalid day";
// }
// console.log(dayName);

// let day = 1;
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "pazartesi"
//         break;
//     case 2:
//         dayName = "Salı"
//         break;

//     default:
//         dayName = "geçersizgün"
//         break;
// }
// console.log(dayName);

// const hız = 90;
// const mesaj = hız >= 120 ? "Hızlı" : "Yavaş";
// console.log(mesaj);

// const not = +prompt("not gir");
// let sonuc = not >= 50 ? "geçti" : "kaldı";
// // console.log(sonuc);
// console.log(not >= 50 ? "geçti" : "kaldı");

// const hız = 60;
// const mesaj = hız >=120 ? "Hızlı" : (hız >=90 ? "orta" : "yavaş");
// console.log(mesaj)


// ? Dört işlem hesap makinesi Projesi

// let num1 = +prompt("1'inci sayiyi giriniz:");
// let oparator = prompt("dört işlemdan herhangi birini giriniz")
// let num2 = +prompt("2'inci sayiyi giriniz:");
// let toplam = (num1 + num2)
// let cikarma = (num1 - num2)
// let carpma = (num1 * num2)
// let bolme = (num1 / num2)




// if(oparator == "+") {
//     console.log(`${toplam} num1 + num2 'nin toplamdır`)
// } else if (oparator == "-") {
//     console.log(`${cikarma} num1 - num2 'nin çıkarımıdır`)
// } else if (oparator == "*") {
//     console.log(`${carpma} num1*num2 'nin çarpımıdır`)
// }else if (oparator == "/") {
//     console.log(`${bolme} num1 / num2 'nin bölümüdür`)
// }else {
//     console.log("Dört işlem haricinde başka bir işlem olduğu için hesaplanamaz")
// }

// ! Swtich Case çalışması projemezi yapıyoruz

// let day = +prompt("7'ye kadar bir sayı giriniz")
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "InClass";
//         break;
//     case 2:
//         dayName = "InClass";
//         break;
//     case 3:
//         dayName = "InClass";
//         break;
//     case 4:
//         dayName = "InClass";
//         break;
//     case 5:
//         dayName = "Teamwork";
//         break;
//     case 6:
//         dayName = "InClass + Workshop";
//         break;
//     case 7:
//         dayName = "Self-study";
//         break;
    
//     default:
//         dayName = "Geçersiz ";
//         break;
       
// } console.log(dayName);

// ? ödev 3 asgari ücret maas projesi

// let asgariUcret = 5000;
// let maas = Number(prompt("Maas degerinizi giriniz"));
//  if(maas >= asgariUcret)  {
//     maas *=1.10;
//     console.log(`${maas}`); 
//  }else {
//     maas *=1.50;
//     console.log(`${maas}`);
//  };

// !  Kredi Riski Programı Projesi

// const asgariUcret = 5000;
// const gelir = +prompt("Aylik gelir degerinizi giriniz");
// const gider = +prompt("Aylık gider degerinizi giriniz");

// const kalanMiktar = (gelir - gider);
// let kredi = kalanMiktar >= asgariUcret ? "Kredi verilebilir" :"Kredi Verilmez";
// console.log(kredi);


//* Assignment-1
// const num1 = +prompt("Enter a number:");
// const num2 = +prompt("Enter another number:");
// const calc = +prompt("Choose one of them and enter the relevant number: 1.Sum , 2.Subtract , 3. Multiply , 4.Divide");
// let result;
// switch(calc){
//     case 1:
//         result= num1 + num2;
//         break;
//     case 2:
//         result = num1 - num2;
//         break;
//     case 3:
//         result = num1 * num2;
//         break;
//     case 4:
//         result = num1 / num2;
//         break;
//     default:
//         console.log(`${calc} is not valid option💥`)
//         break;
// }
// console.log(`The calculation result is ${result}`)

const num1 = +prompt("sayi giriniz");
const num2 = +prompt("ikinci sayi giriniz");
const islem = prompt("1 degeri toplama, 2 degeri cıkarma, 3 degeri carpma ve 4 degeri de bolme anlamına gelmektedir");
let sonuc;
switch (islem) {
    case(1):
        sonuc = num1 + num2;
        break;
    case(2):
        sonuc = num1 - num2;
        break;
    case(3):
        sonuc = num1 * num2;
        break;
    case(4):
        sonuc = num1 / num2;
        break;
    default:
        console.log(`${islem} istenilen deger degildir`)
        break;

} console.log(`${sonuc}`);
    




