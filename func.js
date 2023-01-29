"use strict";
exports.__esModule = true;
function add(a, b) {
    return a + b;
}
function print(yourname) {
    console.log("hey ".concat(yourname), "i don't return anything");
}
//can't re-open a 'type'
var userOne = {
    name: 'ritz',
    role: "hr",
    birthDate: "30/08/2022",
    email: "ritz@gmail.com",
    userId: 234,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (cou) {
        return 8989;
    }
};
