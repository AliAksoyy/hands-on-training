'use strict';

// const interface = "audio"
// console.log(interface)
// **** function

function logger () {
    console.log("My name is Ali")
}

logger()
logger()
logger()

function fruit(apples,oranges) {
console.log(apples,oranges)
const juice = `Juice with ${apples} apples and ${oranges} oranges`
return juice

}
fruit(4,5)
console.log(fruit(4,5))
const applejuice = fruit(3,0)
console.log(applejuice)

// *** function declaration
function yas(tarih) {
    // const a = new Date().getFullYear() -tarih
    return new Date().getFullYear() -tarih

}
const b = yas(1991)
console.log(b)


// **** function expression

const yas1 = function(tarih) {
    return new Date().getFullYear() - tarih
}
const c = yas(1990)
console.log(c)

// *** arrow functions
const yas2 = tarih => 2037 -tarih;
const d = yas2(1991)
console.log(d)
console.log(yas2(1991)) 