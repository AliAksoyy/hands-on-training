export {};
console.log("Hello TypeScript!");

let myVar:any="cw"
myVar=77
console.log(myVar);

let arr:number[] = []; //[1,2,3]

arr.push(3)
console.log(arr);

let b1:unknown =5

let b2:number =b1 as number

let fruits:string[] = ["1","2"]
let number:Array<number> =[1,2,3]

var employee:[string,number] = ["1",1]

const RoundUp = (n: (string | number)) => {

    if(typeof n ==="number") {
        console.log("number");
        
    }
    else {
        console.log(n.toUpperCase());
        
    }

}
RoundUp(5)
RoundUp("ali aksoy")


const ali = function(message:string, person:string) :string{
    return message + " " + person + " !"

}
console.log(ali("ali","s"));
