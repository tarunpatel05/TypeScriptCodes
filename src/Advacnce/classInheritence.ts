// class Department{
//     private id:string;
//     private name:string;
//     private employee: string[] = [];

//     constructor(id:string, n:string){
//         this.id = id;
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log('Department: '+this.name)
//     }
//     addEmployee(employee:string){
//         this.employee.push(employee);
//     }
//     printEmployeeInformation(){
//         console.log(this.employee.length);
//         console.log(this.employee)
//     }
// }
// const accounting = new Department("ID1","Accounting");
// // console.log(accounting)
// accounting.addEmployee('Tarun');
// accounting.addEmployee('Tavishi');
// // accounting.employee[2] = "DUmmy" // can access here, should avoid this case, make the employee private
// // accounting.name = "New Name" // can access public variable

// accounting.describe();
// accounting.printEmployeeInformation();
// // const accountingCopy = {name :'DUMMY', describe:accounting.describe}
// // accountingCopy.describe();

///++++++++++++++++++++++++++++++++++++Improved Code here ++++++++++++++
// class Department {
//   private employee: string[] = [];

//   constructor(private id: string, public name: string) {}

//   describe(this: Department) {
//     console.log(`Department: (${this.id}): ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     this.employee.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employee.length);
//     console.log(this.employee);
//   }
// }
// const accounting = new Department("ID1", "Accounting");

// accounting.addEmployee("Tarun");
// accounting.addEmployee("Tavishi");


// accounting.describe();
// accounting.printEmployeeInformation();

//+++++++++++++++++++++++++++++++Radd only modifiers +++
// class Department {
//     //   private readonly id:string; // can add here as well => readonly
//       private employee: string[] = [];
    
//       constructor(private readonly id: string, public name: string) {}
    
//       describe(this: Department) {
//         console.log(`Department: (${this.id}): ${this.name}`);
//       }
//       addEmployee(employee: string) {
//         // this.id = 'Id2' // can not do this,as id is readonly
//         this.employee.push(employee);
//       }
//       printEmployeeInformation() {
//         console.log(this.employee.length);
//         console.log(this.employee);
//       }
//     }
//     const accounting = new Department("ID1", "Accounting");
    
//     accounting.addEmployee("Tarun");
//     accounting.addEmployee("Tavishi");
    
    
//     accounting.describe();
//     accounting.printEmployeeInformation();

////////////////////////////// +++Inheritence+++ //////////////////
// class Department {
//     //   private readonly id:string; // can add here as well => readonly
//     //   private employee: string[] = []; // in private, subclasses will not be able ot access this.
//     protected employee: string[] = []; //in protected, subclasses can also access this, the class whose extends this class.

    
//       constructor(private readonly id: string, public name: string) {}
    
//       describe(this: Department) {
//         console.log(`Department: (${this.id}): ${this.name}`);
//       }
//       addEmployee(employee: string) {
//         // this.id = 'Id2' // can not do this,as id is readonly
//         this.employee.push(employee);
//       }
//       printEmployeeInformation() {
//         console.log(this.employee.length);
//         console.log(this.employee);
//       }
//     }

// class ITDepartment extends Department {
//     public admins: string[]; //can define it in constructor only
//     // constructor(id:string, public admins:string[]){
//         constructor(id:string, admins:string[]){
//         super(id,'IT');
//         this.admins = admins;
//     }
// }

// class AccountingDepartment extends Department{
//     constructor(id:string, private reports :string[]){
//         super(id,'Accouting');
//     }
//     addEmployee(name: string) {
//         if(name ==='Max'){
//             return;
//         }
//         this.employee.push(name);
//     }
//     addReport(text:string){
//         this.reports.push(text);
//     }
//     getReport(){
//         console.log(this.reports);
//     }
// }
//     // const accounting = new Department("ID1", "Accounting");
//     // const accounting = new ITDepartment("ID1", "Accounting"); if the sublcass constructor is not defined it will by default call the parent constructor
//     const it = new ITDepartment("ID1",['Max']);    
//     it.addEmployee("Tarun");
//     it.addEmployee("Tavishi");
//     it.describe();
//     it.printEmployeeInformation();
//     console.log(it);

//     const accounting = new AccountingDepartment('ID2', []);
//     accounting.addReport('Something went wrong..');
//     accounting.addEmployee('Max');
//     accounting.addEmployee('Manu');
//     accounting.printEmployeeInformation();
//     accounting.getReport();
//     console.log(accounting);
