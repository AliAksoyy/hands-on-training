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
console.log(book1)
console.log(book1.hasOwnProperty("author"))
