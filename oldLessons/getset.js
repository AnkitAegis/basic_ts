var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, email) {
        this.name = name;
        this.email = email;
        this.city = "delhi";
    }
    return Human;
}());
var SubHuman = /** @class */ (function (_super) {
    __extends(SubHuman, _super);
    function SubHuman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubHuman.prototype.declareCourse = function (course) {
        this.courses = course;
    };
    return SubHuman;
}(Human));
var one = new Human("hellbrum", "h@gmail.com");
