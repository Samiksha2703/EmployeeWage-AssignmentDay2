//UC 11 Employee Payroll Class

class EmployeePayrollData {
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // get name() {
    //     return this.name
    // }
    // set name(name) {
    //     this.name = name;
    // }

    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());

// UC 12 -EmployeePayRoll with Gender

class EmployeePayrollDataNew {
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // get name() {
    //     return this.name;
    // }
    // set name(name) {
    //     this.name = name;
    // }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ",salary=" + this.salary + ", " + "gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayrollDataNew = new EmployeePayrollDataNew(1, "Mark", 30000);
console.log(employeePayrollDataNew.toString());
employeePayrollDataNew.name = "john";
console.log(employeePayrollDataNew.toString());
let newEmployeePayrollDataNew = new EmployeePayrollDataNew(1, "Terissa", 30000, "F", new Date());
console.log(newEmployeePayrollDataNew.toString());

// UC 13 - EmployeeWagewithRegex

class EmployeePayRoll {

    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // get name() {
    //     return this.name;
    // }
    // set name(name) {
    //     let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    //     if (nameRegex.test(name))
    //         this.name = name;
    //     else throw 'Name is Incorrect!';
    // }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + ", " + "gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayRoll = new EmployeePayRoll(1, "Mark", 30000);
console.log(employeePayRoll.toString());
try {
    employeePayRoll.name = "john";
    console.log(employeePayRoll.toString());
}
catch (e) {
    console.error(e);
}
let newEmployeePayRoll = new EmployeePayRoll(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayRoll.toString());

// // UC 14 - 