//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

const arabalar = new Object()
arabalar.marka = "BMW"
arabalar.motor = "1.3"
arabalar.model = 2022
arabalar.lpg = true
console.log(arabalar)
console.log(arabalar.lpg)
console.log(arabalar["model"])
