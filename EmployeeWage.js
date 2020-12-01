console.log("Welcome to Employee Wage Program")

// UC-Attendance
{
    const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT){
    console.log("Employee is ABSENT.");
}
else {
    console.log("Employee is PRESENT.");
}
}

// UC2-DailyEmployeeWage

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
console.log(empCheck);
switch (empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOURS;
console.log("Employee Wage : "+empWage);

// UC3-WorkingHours

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;  
    }
}
empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck); 
console.log(empHrs);
empWage = empHrs * WAGE_PER_HOURS;
console.log("Employee Wage : "+empWage);

// UC4-MonthlyEmpWage

const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    empCheck = Math.floor(Math.random() * 10 ) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hrs : "+empHrs+ " Employee Wage for a Month "+empWage);

// UC5-EmpWagewithCondition

const MAX_HRS_IN_MONTH = 80;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10 ) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("Total Days : "+totalWorkingDays+" Total Hours : "+totalEmpHrs+" Employee Wage : "+empWage);