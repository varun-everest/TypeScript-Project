"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
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
})(Util || (exports.Util = Util = {}));
