//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor

function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book1 = new Book("Kasagi", "omer seyfettin", 1920,"ali")
const book2 = new Book("sinekli bakkal","H.edip adıvar",1990)

console.log(book1.getSummary())

// book1.price =100
console.log(book1)

Book.prototype.getAge = function () {
    return new Date().getFullYear() -this.year
}
console.log(book1,book2)
console.log(book1.getAge())

Book.prototype.price = 100

console.log(Book.prototype)
console.log(book1.__proto__)

