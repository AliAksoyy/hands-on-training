interface Person {
    firstName:string;
    lastName:string;

}

interface Employee {
    id:number;
    salary : number;
    deparment:string

}

class Ali implements Person, Employee {
    constructor(public firstName:string)
}