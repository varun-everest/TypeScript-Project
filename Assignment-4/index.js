var changeValues = {
    name: "VarunKumar",
    email: "varunmartha@gmail.com"
};
var newStudent = {
    name: "varun",
    age: 20,
    email: "varun@gmail.com",
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506006
    }
};
console.log(newStudent);
function changeNameAndEmail(student, changingProp) {
    for (var k in changingProp) {
        student[k] = changingProp[k];
    }
    console.log(student);
}
changeNameAndEmail(newStudent, changeValues);
var cto = {
    empName: "Ranga",
    empId: 1
};
var emp1 = {
    empName: "Suresh",
    empId: 11,
    empLead: cto
};
var emp2 = {
    empName: "Anjali",
    empId: 26,
    empLead: cto
};
var emp3 = {
    empName: "Syamala",
    empId: 24,
    empLead: cto
};
var intern1 = {
    empName: 'varun',
    empId: 101,
    empLead: emp1
};
var intern2 = {
    empName: "Deepak",
    empId: 102,
    empLead: emp2
};
var intern3 = {
    empName: "Lavan",
    empId: 103,
    empLead: emp3
};
var allEmp = [cto, emp1, emp2, emp3, intern1, intern2, intern3];
// const empLeadArray: number[] = [];
// function findLeads(allEmp: Employee[]): void {
//     allEmp.forEach(element => {
//         if(element.empLead && !element.empLead.isLead){
//             element.empLead.isLead = true;
//             empLeadArray.push(element.empLead.empId);
//         }
//     });
// }
// function checkLead(emp: Employee) : boolean {
//     //let isLead : boolean = false;
//     // empLeadArray.forEach(id => {
//     //     if(emp.empId === id) {
//     //         isLead = true;
//     //     }
//     // });
//     for(let i=0 ; i<empLeadArray.length ; i++) {
//         if(empLeadArray[i]=== emp.empId){
//             return true;
//         }
//     }
//     return false;
// }
// function printEmployee(allEmp : Employee[]) : void {
//     allEmp.forEach(emp => {
//         if(checkLead(emp)) {
//             console.log(`${emp.empName} is Lead`);
//         }
//         else {
//             console.log(`${emp.empName} is not Lead`);
//         }
//     });
// }
// findLeads(allEmp);
// console.log(empLeadArray);
// printEmployee(allEmp);
function checkLead(emp) {
    // Use array.some to check if any employee in allEmp has this employee as their empLead
    return allEmp.some(function (lead) { return lead.empLead === emp; });
}
function printEmployee(allEmp) {
    allEmp.forEach(function (emp) {
        if (checkLead(emp)) {
            console.log("".concat(emp.empName, " is Lead"));
        }
        else {
            console.log("".concat(emp.empName, " is not Lead"));
        }
    });
}
printEmployee(allEmp);
