"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function printByConcatenatingProperties(item) {
    var details = "";
    for (var key in item) {
        var k = key;
        //console.log(k);
        if (typeof item[k] === "string") { //It only prints whose values are of string type....
            details += String(k) + ": ".concat(item[k], ", ");
        }
    }
    details = details.slice(0, details.length - 2);
    console.log(details);
}
var person1 = {
    name: "Varun",
    email: "varunmartha@gmail.com",
    phoneNumber: 6303522765
};
printByConcatenatingProperties(person1);
var person2 = {
    name: "Riya",
    age: 21,
    email: "riya@gmail.com",
    phoneNumber: 9106543344,
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506006
    }
};
printByConcatenatingProperties(person2);
console.log(utils_1.Util.concatAllProperties(person2));
