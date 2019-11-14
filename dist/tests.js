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
        this.prop0 = { propA: { propB: { propC: { propD: 'value' } } } };
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
        _this.prop3 = _this.doThis(); // 3
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
var original = new TestSubSubclass();
var copy = index_1.getObjectCopy(original);
// Make sure copy is instanceof the most distant parent:
if (copy instanceof TestClass)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Make sure copy is instanceof its immediate class:
if (copy instanceof TestSubSubclass)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Make sure the copy is not just a reference to the original:
if (copy !== original)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Make sure it contains the inherited method:
if (copy.doThis && (copy.doThis() === copy.prop3))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Make sure deeply nested properties are included in the copy:
if (copy.prop0.propA.propB.propC.propD === 'value')
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
