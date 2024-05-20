type courses = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React" | "Angular" | "Mchine Learning" ; 

interface Address {
    city : string;
    state : string;
    pincode : number
}

interface Student {
    name : string;
    age : number;
    email : string;
    course_list : courses[];
    address : Address
}

let student1 : Student = {
    name : "varun",
    age : 20,
    email : "varunkumar.martha@everest.engineering",
    course_list : ['JavaScript', 'Mchine Learning'],
    address : {city: "warangal", state: "telangana", pincode : 506006}
}

type Address_type = {
    city : string;
    state : string;
    pincode : number
}

type Student_type = {
    name : string;
    age : number;
    email : string;
    course_list : courses[];
    address : Address_type
}

let student2 : Student_type = {
    name : "Alice",
    age : 23,
    email : "alice.chef@everest.engineering",
    course_list : ['TypeScript', 'React'],
    address : {city: "codechef", state: "Google", pincode : 123456}
}
console.log(student1);
console.log(student2);