// class Department {
//     static fiscalYear = 2024;
//     protected employee: string[] = []; //in protected, subclasses can also access this, the class whose extends this class.
  
//       constructor(private readonly id: string, public name: string) {
//         // console.log(this.fiscalYear) // will not work as this points to instance
//         // console.log(Department.fiscalYear);// this will work 
//       }

//       static createEmployee(name:string){
//         return {name: name};
//       }

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
//     private lastReport :string;
    
//     get mostRecentReports(){
//         if(this.lastReport){
//             return this.lastReport;
//         }
//         throw new Error('No report found');
//     }

//     set mostRecentReports(value:string){
//         if(!value){
//         throw new Error('Please paas in a valid value')
//         }
//         this.addReport(value);
//     }

//     constructor(id:string, private reports :string[]){
//         super(id,'Accouting');
//         this.lastReport = reports[0];
//     }
//     addEmployee(name: string) {
//         if(name ==='Max'){
//             return;
//         }
//         this.employee.push(name);
//     }
//     addReport(text:string){
//         this.reports.push(text);
//         this.lastReport = text;
//     }
//     getReport(){
//         console.log(this.reports);
//     }
// }
//     const employee1 = Department.createEmployee('Max');
//     console.log(employee1, Department.fiscalYear) 
//     const it = new ITDepartment("ID1",['Max']);
//     // Math.PI  // PI is property or CONST in math class
//     // Math.pow(5,2);// dont need to create Math instace new Math()    
    
//     it.addEmployee("Tarun");
//     it.addEmployee("Tavishi");
//     it.describe();
//     it.printEmployeeInformation();
//     console.log(it);

//     const accounting = new AccountingDepartment('ID2', []);
//     accounting.mostRecentReports = 'Year End Report';
//     accounting.addReport('Something went wrong..');
//     accounting.mostRecentReports;
//     accounting.addEmployee('Max');
//     accounting.addEmployee('Manu');
//     accounting.printEmployeeInformation();
//     accounting.getReport();
//     console.log(accounting);
