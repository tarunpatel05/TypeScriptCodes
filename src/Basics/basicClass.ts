/*
class Department{
    name:string; //field of the class
}


*/

class Department1{
    name:string;
    constructor(n:string){
        this.name = n;
    }
    describe(this:Department1){
        console.log('Department: '+this.name)
    }
}
const accounting1 = new Department1("Accounting");
// console.log(accounting)
accounting1.describe();

const accountingCopy1 = {name :'DUMMY', describe:accounting1.describe}
accountingCopy1.describe();

