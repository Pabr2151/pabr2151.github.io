//NOTE
//I couldn't get my js file to fetch data from ny JSON files. So I wrote the JSON info in here.

//Problem 1
const sam = {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true
    }
    
const mary = {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true
    }
    
const bill = {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false
    }

    
// Problem 2
const company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [sam, mary, bill]
    }
    
// Problem 3
const anna = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false
    }

company.employees.push(anna);
    
// Problem 4
function getTotalSalary(company){
    let totalSalary = 0;
    for(let i = 0; i < company.employees.length; i++){
        totalSalary += company.employees[i].salary;
    }
    return totalSalary;
    }
console.log(getTotalSalary(company));
    
// Problem 5
function giveRaises(company){
    for (let i = 0; i < company.employees.length; i++){
        const employee = company.employees[i];
        if(employee.raiseEligible){
            employee.salary *= 1.1;
            employee.raiseEligible = false;
        }
    }
    }
giveRaises(company);
console.log(company);
    
// Problem 6
const wfhEmployees = ['Anna', 'Sam'];
for (let i = 0; i < company.employees.length; i++){
    const employee = company.employees[i];
    employee.wfh = wfhEmployees.includes(employee.firstName);
    }
console.log(company);
    
    
    
    