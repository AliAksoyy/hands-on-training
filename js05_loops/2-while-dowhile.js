// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// const not = prompt("Lütfen 0-100 arasında bir not giriniz");

// while (not < 0 || not > 100) {
//     console.log("Not 0-100 arasinda olmalidir") ;
//     not = prompt("Lütfen 0-100 arasında bir not giriniz")   
// }
// console.log("girdiginiz not:", not)

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz

// let not1;
// do {
//     not1 = +prompt("Lütfen 0-100 arasında bir not giriniz");
//     if(not1 < 0 || not1 > 100) {
//         console.log("not 0-100 arasında olmalıdır")
//     }
// }
// while (not1 < 0 || not1 > 100) 
// console.log("girdiginiz not:", not1);

//! ************** ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

// ****let-var-const ***


// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let age = 30;
// age = 31;
// console.log(age);
// let yas;
// console.log(yas);
// yas = 12;
// console.log(yas);

// const yıl = 1991;
// yıl = 1990;
// console.log(yıl);

// var lastName = "aksoy";
// console.log(lastName);


// *** oparators***

// **math oparetors
// const now = 2037
// const age = now - 1991;
// const ageAyse = now- 1971;
// console.log(age, ageAyse);

// console.log(age *2, age / 2,  2 ** 3);

// const firstName = "ali";
// const lastName = "aksoy";
// console.log(firstName + " " + lastName);
//  ***assigment toparatörs
// let x = 10 + 5; 
// x *=10;
// x++;
// x--;
// --x;
// ++x;
// console.log(x)
// ****comparison operators

// console.log(ageAyse > age);

// console.log(ageAyse >=18)
// const isFullAge = ageAyse  >=18;

// console.log(now-1991 > now-2018)


// const now = 2037;
// const age = now - 1991;
// const ageAyse = now - 1971;

// const averageAge = (age + ageAyse) / 2
// console.log(age, ageAyse, averageAge)

// ** code challenge -1

// const markMass = Number(prompt("değer giriniz mark için"));
// const johnMass = Number(prompt("değer giriniz john için"));
// const markHeight = 1.64;
// const johnHeight = 1.93;

// let markBmı = markMass / (markHeight ** 2);
// console.log(markBmı);
// let johnBmı = johnMass / (johnHeight ** 2);
// console.log(johnBmı);
// console.log(markBmı > johnBmı)

// ** strings and templste's


// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + " !";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
// console.log(`I'm ${firstName}, a ${year - birthYear} year old ${job} !`);

// console.log(`ali
// aksoy
// 1991`)

// *** if else 

// const age = +prompt("bir sayı gir")
// // const isOldEnough = age >=18;
// if(age >= 18) {
//     console.log(`ehliyet alabilir `)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`sarah is oo young. Wait another ${yearsLeft} years : 👨🏽‍🤝‍👨🏽`);
// }

// const birthYear = 2012;
// let centruy;
// if(birthYear < 2000) {
//     centruy = 20;
// } else {
//     centruy = 21;
// }
// console.log(centruy)

// **** coe challenge -2
// const markMass = Number(prompt("değer giriniz mark için"));
// const johnMass = Number(prompt("değer giriniz john için"));
// const markHeight = 1.64;
// const johnHeight = 1.93;

// let markBmı = markMass / markHeight ** 2;
// console.log(markBmı);
// let johnBmı = johnMass / johnHeight ** 2;
// console.log(johnBmı);
// console.log(markBmı > johnBmı);

// if(markBmı > johnBmı) {
//     console.log(`Mark's BMI is higher than John's`);
//     console.log(`Mark's BMI ${markBmı} is higher than John's ${johnBmı}`);
// } else {
//      console.log(`John's BMI is higher than Mark's`);
//      console.log(`John's BMI ${johnBmı} is higher than Mark's ${markBmı}`);
// }


// ***** Type Conversion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);


// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23)

// let n = "1" + 1;
// n = n-1;
// console.log(n)

// ***thurty and Falsy Vlaues

// ***falsy values

// 0, undefined, null, "", false, NaN

// console.log(Boolean (0))
// console.log(Boolean (null))
// console.log(Boolean (""))
// console.log(Boolean (undefined))
// console.log(Boolean (NaN))
// console.log(Boolean("ali"))
// console.log(Boolean({}))

// const money = 0;
// if(money) {
// console.log("Don't spend it all")
// } else {
//     console.log("All things take")
// }
// console.log(Boolean(0))

// let height;
// if(height) {
//     console.log("YAY! Height is defined")
// } else {
//     console.log("Height is UNDEFİNED")
// }

// **equality operators

// let age = 18;
// if(age === 18) console.log("You just became an adult (strict)")
// if(age == 18) console.log("You just became an adult (loose)")

// const favourite = Number(prompt("What's your favourite number?"))
// console.log(favourite, typeof favourite);

// if(favourite === 23) {
//     console.log("Cool 23 is an amazing number")
// } else if (favourite === 7) {
//     console.log("7 is also a cool number")
// } else if (favourite === 9) {
// console.log("9 is also a cool number");
// }
//  else {
//     console.log("Number is not 23 or 7")
   
// }
//  if (favourite !== 23) console.log("Why not 23?");

// ****Boolean Logic,Logical operations

// const a =  true;
// const b = true;
// console.log(a && b);
// console.log(a && !b);
// console.log(!a || b);

// if(a && b) {
//     console.log("sarah is able to drive");
// } else {
//     console.log("Someone else should drive")
// }

// const c = false;
// console.log(a && b && c );
// if(a && b && !c) {
//         console.log("sarah is able to drive");
// }else {
//       console.log("Someone else should drive");
// }

// *** code 3 challenge

// const a1 = (97 + 112 + 80) / 3;
// const b1 = (109 + 95 + 106) / 3;
// console.log(a1,b1)

// if(a1 > b1) {
//     console.log("Dolphin wins");
// } else if (a1 === b1) {
//     console.log("beraber")
// } else {
//     console.log("koalo wins")
// }

// // **bonus-1 
//  const a = (97 + 112 + 95) / 3;
//  const b = (109 + 95 + 30) / 3;
//  console.log(a, b);

// if(a >b && a>=100) {
//     console.log("dolphins win");
// } else if (b > a && b >=100) {
//     console.log("koalas win")
// } else if (a === b && a >=100 && b >=100) {
//     console.log("both wins")
// }else {
//     console.log("No one wins the trophy")
// }


// ***** The swtich statement

// const day = prompt("gün giriniz")

// switch (day) {
//     case 'monday':
//         console.log("Plan course structure");
//         console.log('Go to coding meetup');
//         break;
//     case 'thuesday':
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday" :
//         console.log("Write code examples")
//         break;
//     case "friday":
//         console.log("record videos");
//         break;
//     case "saturday":
//     case  "sunday":
//     console.log("Enjoy the weekend :D")
//         break;
//     default:
//         console.log("not a valid day")

// }

// if(day === "monday") {
//     console.log("a");
// } else if (day === "thuesday") {
//     console.log("b")
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("c")
// }
//  else if (day === "wfriday") {
//    console.log("e")
// }
//  else if (day === "saturday" || day === "sunday") {
//     console.log("f")
// }
//  else {
//     console.log("not a valid day")
// }
// *****statements and expressions

// **** Ternary Statement

const age = 23;

// age >= 18 ? console.log("drink wine") : console.log("drink water")

const drink = age >=18 ? "wine" : "water";
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water"
}
console.log(drink2)