function printByConcatenatingProperties(item) {
    var details = "";
    for (var key in item) {
        var k = key;
        //console.log(k);
        if (typeof item[k] === "string") {
            details += String(k) + ": ".concat(item[k], ", ");
        }
    }
    details = details.slice(0, details.length - 2);
    console.log(details);
}
var Util;
(function (Util) {
    function concatAllProperties(item) {
        var allDetails = '';
        function concat(ele) {
            for (var property in ele) {
                var value = ele[property];
                if (typeof value === 'object') {
                    concat(value);
                }
                else {
                    allDetails += "".concat(property, " : ").concat(value, ", ");
                }
            }
        }
        concat(item);
        allDetails = allDetails.slice(0, allDetails.length - 2);
        return allDetails;
    }
    Util.concatAllProperties = concatAllProperties;
})(Util || (Util = {}));
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
console.log(Util.concatAllProperties(person2));
