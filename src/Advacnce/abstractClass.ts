// class Department {
//     static fiscalYear = 2024;
//     protected employee: string[] = []; //in protected, subclasses can also access this, the class whose extends this class.
  
//       constructor(protected readonly id: string, public name: string) {
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

//     //overriding the methods of base class that is Department class
//     describe() {
//         console.log('Accouting Department - ID '+ this.id)
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
//     // const employee1 = Department.createEmployee('Max');
//     // console.log(employee1, Department.fiscalYear) 
//     // const it = new ITDepartment("ID1",['Max']);
    
//     // it.addEmployee("Tarun");
//     // it.addEmployee("Tavishi");
//     // it.describe();
//     // it.printEmployeeInformation();
//     // console.log(it);

//     const accounting = new AccountingDepartment('ID2', []);
//     accounting.mostRecentReports = 'Year End Report';
//     accounting.addReport('Something went wrong..');
//     accounting.mostRecentReports;

//     accounting.addEmployee('Max');
//     accounting.addEmployee('Manu');
//     // accounting.printEmployeeInformation();
//     // accounting.getReport();
//     // console.log(accounting);
//     accounting.describe();

////////////// Abstract class //////////////////
// abstract class Department { // can not create the object of this class now, as it is abstract
//     static fiscalYear = 2024;
//     protected employee: string[] = []; //in protected, subclasses can also access this, the class whose extends this class.
  
//       constructor(protected readonly id: string, public name: string) {
//       }

//       static createEmployee(name:string){
//         return {name: name};
//       }

//       abstract describe(this: Department):void; //force subclass to implement this method

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
//     public admins: string[];
//         constructor(id:string, admins:string[]){
//         super(id,'IT');
//         this.admins = admins;
//     }
//     //overriding the abstract method
//     describe() {
//         console.log('IT Department - ID: '+ this.id)
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

//     //overriding the methods of base class that is Department class
//     describe() {
//         console.log('Accouting Department - ID '+ this.id)
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

//     const accounting = new AccountingDepartment('ID2', []);
//     accounting.mostRecentReports = 'Year End Report';
//     accounting.addReport('Something went wrong..');
//     accounting.mostRecentReports;

//     accounting.addEmployee('Max');
//     accounting.addEmployee('Manu');
//     accounting.describe();


///////////////////////////// Private Constructor //////////////
abstract class Department { 
    static fiscalYear = 2024;
    protected employee: string[] = []; //in protected, subclasses can also access this, the class whose extends this class.
  
      constructor(protected readonly id: string, public name: string) {
      }

      static createEmployee(name:string){
        return {name: name};
      }

      abstract describe(this: Department):void; //force subclass to implement this method

      addEmployee(employee: string) {
        // this.id = 'Id2' // can not do this,as id is readonly
        this.employee.push(employee);
      }
      printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
      }
    }

class ITDepartment extends Department {
    public admins: string[];
        constructor(id:string, admins:string[]){
        super(id,'IT');
        this.admins = admins;
    }
    //overriding the abstract method
    describe() {
        console.log('IT Department - ID: '+ this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport :string;
    private static instance:AccountingDepartment;
    get mostRecentReports(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReports(value:string){
        if(!value){
        throw new Error('Please paas in a valid value')
        }
        this.addReport(value);
    }

    private constructor(id:string, private reports :string[]){
        super(id,'Accouting');
        this.lastReport = reports[0];
    }
    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance; // or below one
            // return AccountingDepartment.instance
        }
        this.instance = new AccountingDepartment('d2', []); // we are calling private constructor here.
        return this.instance;
    }

    //overriding the methods of base class that is Department class
    describe() {
        console.log('Accouting Department - ID '+ this.id)
    }

    addEmployee(name: string) {
        if(name ==='Max'){
            return;
        }
        this.employee.push(name);
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    getReport(){
        console.log(this.reports);
    }
}

    // const accounting = new AccountingDepartment('ID2', []);
    const accounting = AccountingDepartment.getInstance();
    const accounting2 = AccountingDepartment.getInstance();
    console.log(accounting);
    console.log(accounting2);

    // accounting.mostRecentReports = 'Year End Report';
    // accounting.addReport('Something went wrong..');
    // accounting.mostRecentReports;

    // accounting.addEmployee('Max');
    // accounting.addEmployee('Manu');
    // accounting.describe();

