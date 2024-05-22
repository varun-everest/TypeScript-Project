"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var student2 = {
    name: "Alice",
    age: 23,
    email: "alice.chef@everest.engineering",
    course_list: ['TypeScript', 'React'],
    address: { city: "codechef", state: "Google", pincode: 123456 }
};
console.log(student2);
var Student = /** @class */ (function () {
    function Student(name, age, email, course_list, address) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getCourseList = function () {
            return _this.course_list;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.getDetails = function () {
            console.log("Name : ", _this.getName());
            console.log("Age : ", _this.getAge());
            console.log("Email : ", _this.getEmail());
            console.log("Interested Courses : ", _this.getCourseList());
            console.log("Address : ", _this.getAddress());
        };
        this.name = name;
        this.age = age;
        this.email = email;
        this.course_list = course_list;
        this.address = address;
    }
    return Student;
}());
var student_1 = new Student("Varun", 20, 'varunkumar.martha@gmail.com', ["Angular", "React"], { city: "Warangal", state: "Telangana", pincode: 506006 });
student_1.getDetails();
var student_2 = new Student("Alice", 25, "alice@gmail.com", ["Machine Learning"], { city: "codechef", state: "google", pincode: 123456 });
student_2.getDetails();
var allStudents = [student_1, student_2];
console.log((0, utils_1.getLastItem)(allStudents));
var student1 = {
    name: "varun",
    age: 20,
    email: "varunkumar.martha@everest.engineering",
    course_list: ['JavaScript', 'Machine Learning'],
    address: { city: "warangal", state: "telangana", pincode: 506006 }
};
var newVariable = {
    value1: "Sample one",
    value2: 100
};
