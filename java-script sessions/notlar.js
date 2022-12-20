 //*Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.


//** pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);


//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2000;
console.log("PERSON:", person);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.



//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));


//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

//? HRML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.


//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordu

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.


//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)


//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.


//? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'da hayat bulmus olur.

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

//! Prototipleri miras almak icin Object.create() metodu kullanabilir.
Magazine.prototype = Object.create(Book.prototype);

//? Magazine objesinin yeni bir instance
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1);

//! Prototipler dogrudan miras olarak gelmez.
console.log(mag1.getSummary());

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)


// class Book {
//     constructor(title, author, year) {
//       this.author = author;
//       this.title = title;
//       this.year = year;
//  //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
//  this.getTitle = function () {
//     return this.title;
//   };
// }

//! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
// getAge() {
//   return new Date().getFullYear() - this.year;
// }
// getSummary() {
//   return `${this.title} was writtten by ${this.author} in ${this.year}`;
// }
// }

//? Sub-Class tanimlamasi (Inheritance)

// class Magazine extends Book {
//     constructor(title, author, year, month) {
//       //! Book'un constructor'i cagrildi
//       super(title, author, year); //! Book'un prototpye kopyalnmis
//       this.month = month;
//     }
//   }
  
  //? Magazine objesinin yeni bir instance
//   const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
//   console.log(mag1);
  
  //* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.


// //? Sub-Class tanimlamasi (Inheritance)
// class Magazine extends Book {
//     constructor(title, author, year, month) {
//       //! Book'un constructor'i cagrildi
//       super(title, author, year); //! Book'un prototpye kopyalnmis
//       this.month = month;
//     }
//     //! Overrided Metot (Parent class'daki bir metodun farkli
//     //! fonksiyonellikle  ve ayni parametre listesi ile yeniden tanimlanmasi)
//     getSummary() {
//       return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
//     }
  
//     //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
//     getSummaryParent() {
//       return super.getSummary();
//     }
//     //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
//     setPrice(price, taxRate = 1.1) {
//       this.price = Math.trunc(price * taxRate);
//     }
//   }
  

//? Sub-Class tanimlamasi (Inheritance)
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     //! Book'un constructor'i cagrildi
//     super(title, author, year); //! Book'un prototpye kopyalnmis
//     this.month = month;
//   }
//   //! Overrided Metot (Parent class'daki bir metodun farkli
//   //! fonksiyonellikle  ve ayni parametre listesi ile yeniden tanimlanmasi)
//   getSummary() {
//     return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
//   }

//   //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
//   getSummaryParent() {
//     return super.getSummary();
//   }
//   //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
//   setPrice(price, taxRate = 1.1) {
//     this.price = Math.trunc(price * taxRate);
//   }
// }


//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

// class Book {
//     //!Private degisken tanimlamasi
//     #id;
  
//     //! static property tanimlamasi
//     static counter = 0;
  
//     constructor(title, author, year) {
//       this.author = author;
//       this.title = title;
//       this.year = year;
  
//       //? Private property
//       this.#id = 44;
//       this.getTitle = function () {
//         return this.title;
//       };
  
//       //* static degiskenin degerini degistirdik
//       Book.counter++; //! ClasName.propertyName
//     }
  
//     //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
//     //? Bu tip metotlara getter metot denilir.
//     //! getter metotlari class icerisinde tanimlanmalidir.
//     getId() {
//       return this.#id;
//     }
  
//     //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
//     //? Bu tip metotlara setter metot denilir.
//     //! setter metotlar class icerisinde tanimlanmalidir.
//     setId(id) {
//       this.#id = id;
//     }
  
//     getSummary() {
//       return `${this.title} was writtten by ${
//         this.author
//       } so its age is ${this.#computeAge()} `;
//     }
  
//     //!private metot tanimlanmsi
//     #computeAge() {
//       return new Date().getFullYear() - this.year;
//     }
  
//     //? static method
//     static compareAge(b1, b2) {
//       return `Books age difference: ${b1.year - b2.year}`;
//     }
//   }
  
//   const book1 = new Book("Simyaci", "Poelho Coelgo", 1988);
//   console.log(book1.title);
  
//   //? Private bir degiskenin degeri class disindan dogrudan okunamaz.
//   // console.log(book1.#id);
  
//   //? Private bir degiskenin degeri class disindan dogrudan degistirilemez
//   // book1.#id = "11111";
  
//   //! Private field '#id' must be declared in an enclosing class (at 5-static-private.js:42:18)
//   //? Private degiskeni okuma
//   console.log(book1.getId());
  
//   //? Private degiskene deger atama
//   book1.setId("00000");
//   console.log(book1.getId());
  
//   //!Private metotlar class disirasindan erisilemezler.
//   //! Ancak class icerisindeki bir metottan erilebilrler.
//   // console.log(book1.#computeAge());
  
//   console.log(book1.getSummary());
  
//   const book2 = new Book("ABC", "Ali Veli", 1988);
//   const book3 = new Book("XYZ", "Ahmet Can", 1988);
//   const book4 = new Book("XYZ", "Ahmet Can", 1920);
  
//   //! Static degiskenlere sadece class uzerinden erisilebilir
//   console.log(Book.counter);
  
//   //! instance'lar üzerinden static degiskenlere erilemez.
//   console.log(book1.counter);
  
//   //? Static metot cagrilmasi
//   console.log(Book.compareAge(book2, book4));
  