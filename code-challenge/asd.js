// const myCar = {
//     make:"ford",
//     model:"Mustang",
//     year:1965,
//     color:"black",
//      age:function(num) {
//         return num -this.year
//      }
// }
// console.log( myCar.age(2022))

// let fullStack = {
//   languages: ["JavaScript", "React", "HTML"],
//   jira: true,
//   gitHub: true,
//   difficulty: 8,
// };
//     for(let item of Object.keys(fullStack)) {
//         console.log(item)
        
//     }

    function degisim(num) {
        const romanNum = {
           1:I,
           5: V,
           10: X,
           50:L,
          100:C,
           500: D,
          1000: M
        };
        const a = Object.keys(romanNum);
        console.log(a);
        let empty = []
        let empty1 =""
        for(let i= 0; i<a.length; i++) {
            if(num<a[i]) {
                 num -= a[i-1]
                empty.push(romanNum.a[i-1])
            }
        }
     
    }
    console.log( degisim(5))
    
        
    





