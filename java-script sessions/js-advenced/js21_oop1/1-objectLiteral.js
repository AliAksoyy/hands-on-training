//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
    title: "The Kramazow Brothers",
    author : "Dostoevski",
    year:1880,
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}
const book2 = {
    title: "The Ali Aksoy",
    author : "Beyda",
    year:1980,
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}
console.log(book1)
console.log(book1.hasOwnProperty("author"))
console.log(book2.getSummary)
