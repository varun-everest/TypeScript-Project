import { getLastItem, myType } from "./utils" ;
//import { myType } from "./utils" ;



type courses = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React" | "Angular" | "Machine Learning" ; 

interface Address {
    city : string;
    state : string;
    pincode : number
}

interface Student_interface {
    name : string;
    age : number;
    email : string;
    course_list : courses[];
    address : Address
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
console.log(student2);

class Student {
    name : string ;
    age : number ;
    email : string ;
    course_list : courses[] ;
    address : Address;

    constructor(name: string, age: number, email: string, course_list: courses[], address: Address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.course_list = course_list;
        this.address = address;
    }
    private getName = (): string  => {
        return this.name;
    }

    private getAge = (): number => {
        return this.age;
    }

    private getEmail = () : string => {
        return this.email;
    }

    private getCourseList = () : courses[] => {
        return this.course_list;
    }

    private getAddress = () => {
        return this.address;
    }


    getDetails =  () : void => {
        console.log("Name : ", this.getName());
        console.log("Age : ", this.getAge());
        console.log("Email : ", this.getEmail());
        console.log("Interested Courses : ", this.getCourseList());
        console.log("Address : ", this.getAddress());

    }
}

let student_1 = new Student("Varun", 20, 'varunkumar.martha@gmail.com', ["Angular","React"], {city : "Warangal", state : "Telangana", pincode : 506006});
student_1.getDetails();

let student_2 = new Student("Alice", 25, "alice@gmail.com", ["Machine Learning"], {city: "codechef", state: "google", pincode: 123456});
student_2.getDetails();

let allStudents : Student[] = [student_1, student_2];
console.log(getLastItem(allStudents));

let student1 : Student_interface = {
    name : "varun",
    age : 20,
    email : "varunkumar.martha@everest.engineering",
    course_list : ['JavaScript', 'Machine Learning'],
    address : {city: "warangal", state: "telangana", pincode : 506006}
}
type ReadonlyStd<Type> = {
    readonly [P in keyof Type]: Type[P];
};


type ReadonlyStudent = ReadonlyStd<Student_interface>;

let newVariable : myType<string, number> = {
    value1 : "Sample one",
    value2 : 100
}
console.log(newVariable);
