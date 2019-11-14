"use strict";
// Make sure inherited properties can be overwritten and also be accessed in new methods.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var TestClass = /** @class */ (function () {
    function TestClass() {
        this.prop1 = 1;
        this.prop2 = 2;
    }
    TestClass.prototype.doThis = function () {
        return this.prop1 + this.prop2;
    };
    return TestClass;
}());
exports.TestClass = TestClass;
var TestSubclass = /** @class */ (function (_super) {
    __extends(TestSubclass, _super);
    function TestSubclass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop3 = _this.prop1 + _this.prop2; // 3
        _this.prop4 = _this.prop1 + _this.prop3; // 4
        return _this;
    }
    return TestSubclass;
}(TestClass));
exports.TestSubclass = TestSubclass;
var TestSubSubclass = /** @class */ (function (_super) {
    __extends(TestSubSubclass, _super);
    function TestSubSubclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestSubSubclass;
}(TestSubclass));
exports.TestSubSubclass = TestSubSubclass;
var objToModify = new TestSubSubclass();
var obj = index_1.getObjectCopy(objToModify);
// Make sure copy is instanceof the most distant parent:
if (obj instanceof TestClass)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Make sure copy is instanceof its immediate class:
if (obj instanceof TestSubSubclass)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Make sure the copy is not just a reference to the original:
if (obj === objToModify)
    console.log('test 3 FAILED');
else
    console.log('test 3 passed');
// Make sure it contains the inherited method:
if (obj.doThis)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
