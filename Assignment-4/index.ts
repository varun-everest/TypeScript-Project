type Address = {
    city ? : string;
    state ?: string;
    pincode : number;
}

interface Student {
    name : string;
    age : number;
    email : string ;
    address : Address;
}

type changeProp = Pick<Student, "name" | "email">

let changeValues: changeProp = {
    name : "VarunKumar",
    email: "varunmartha@gmail.com"
}

let newStudent : Student = {
    name : "varun",
    age : 20,
    email:"varun@gmail.com",
    address : {
        city : "Warangal",
        state: "Telangana",
        pincode: 506006
    }
}
console.log(newStudent);

function changeNameAndEmail(student: Student, changingProp: changeProp) {
    
    for(const k in changingProp) {
        student[k] = changingProp[k];
    }
    console.log(student);
}
changeNameAndEmail(newStudent, changeValues);


//Task - 2; ---->   Create a type which takes input type and returns Yes if passed type is string otherwise No.....
type isString<Type> = Type extends string ? "Yes" : "No" ;

//Task - 3 ; --> Create an employee lead relationship with example
interface Employee {
    empName : string;
    empId : number;
    empLead ? : Employee ;
    isLead ?: boolean ;
}

let cto: Employee = {
    empName : "Ranga",
    empId : 1
}

let emp1 : Employee = {
    empName : "Suresh",
    empId : 11,
    empLead : cto
}

let emp2: Employee = {
    empName : "Anjali",
    empId : 26,
    empLead : cto
}

let emp3 : Employee = {
    empName : "Syamala",
    empId : 24,
    empLead : cto
}

let intern1 : Employee = {
    empName : 'varun',
    empId : 101,
    empLead : emp1
}

let intern2 : Employee = {
    empName : "Deepak",
    empId : 102,
    empLead : emp2
}

let intern3 : Employee = {  
    empName : "Lavan",
    empId : 103,
    empLead : emp3
}

let allEmp: Employee[] = [cto, emp1, emp2, emp3, intern1, intern2, intern3];

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


function checkLead(emp: Employee): boolean {
  return allEmp.some((lead) => lead.empLead === emp);
}

function printEmployee(allEmp: Employee[]): void {
  allEmp.forEach((emp) => {
    if (checkLead(emp)) {
      console.log(`${emp.empName} is Lead`);
    } else {
      console.log(`${emp.empName} is not Lead`);
    }
  });
}

printEmployee(allEmp);