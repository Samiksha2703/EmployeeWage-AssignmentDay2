console.log("Welcome to Employee Wage Program")

// UC-Attendance
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT.");
}
else {
    console.log("Employee is PRESENT.");
}

// UC2-DailyEmployeeWage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
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
console.log("Employee Wage : " + empWage);

// UC3-WorkingHours
function getWorkingHours(empCheck) {
    switch (empCheck) {
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
empWage = empHrs * WAGE_PER_HOURS;
console.log("Employee Wage : " + empWage);

// UC4-MonthlyEmpWag
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hrs : " + empHrs + " Employee Wage for a Month " + empWage);

// UC5-EmpWagewithCondition
{
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    empWage = totalEmpHrs * WAGE_PER_HOURS;
    console.log("Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " Employee Wage : " + empWage);
}

// UC6-StoreDailyWage
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOURS;
}

const NUM_OF_WORKING_DAYS_OF_MONTH =20;
const MAX_HRS_IN_A_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyHrsAndWageArr = new Array();
let empDailyHrsMap = new Map();
let empDailyWageMap = new Map();
while (totalEmpHrs <= MAX_HRS_IN_A_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS_OF_MONTH) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyHrsAndWageArr.push(empHrs,  calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " Employee Wage : " + empWage);

// UC7-ArrayFunctionUse
// UC 7A - Calc total Wage using Array forEach traversal or reduce method.
let totEmpWage = 0;
empDailyWageArr;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " Employee Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B -Show the day along with Daily Wage using Array map helper function.
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show Days when full time wage of 160 were earned.
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when full Time Wage was earned using find function.
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First Time Fulltime wage was earnedon Day : " + mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if every element of full time wage is truly holding full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Check All Elements have Full Time Wage : " + mapDayWithWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check If Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
        return numOfDays;
}
let numOfDays = 0;
console.log("Number of Days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

//UC 8 - EmployeeWageMape 

console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }
  console.log(
    "Emp Wage Map totalHrs : " +
      Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
  );
