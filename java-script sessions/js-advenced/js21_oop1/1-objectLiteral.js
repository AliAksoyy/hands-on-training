

const book1 = {
  title: "ali aksoy",
  author: "dostyesvki",
  year:1880,
  getSummuray: function() {
    return `${this.title} was written ${this.author} in ${this.year}`
  }
}
console.log(book1.hasOwnProperty("author"))
console.log(book1.getSummuray())

const book2 = {
  title: "beyda",
  author: "feyza",
  year: 1980,
  getSummuray: function () {
    return `${this.title} was written ${this.author} in ${this.year}`;
  },
};

console.log(book2.getSummuray())






































// !11111

// //* ======================================================
// //*                     (OOPS)
// //* ======================================================

// //* Object Literals
// console.log("**** Object Literals ****");

// const book1 = {
//   title: "The Kramazov Brothers",
//   author: "Dostoevski",
//   year: 1880,
//   getSummary: function () {
//     return `${this.title} was writtten by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.hasOwnProperty("author")); //? true
// //! Object nesnesinden miras yoluyla geldi.

// const book2 = {
//   title: "The Lily of the valley",
//   author: "Honere de Balzac",
//   year: 1888,
//   getSummary: function () {
//     return `${this.title} was writtten by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book2);
// console.log(book2.getSummary());

// //? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
// //? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
// //? Cozum: Object Oriented Programming (ES5 and ES6)
