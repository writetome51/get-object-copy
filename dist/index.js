"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modify_object_1 = require("@writetome51/modify-object");
// Returns independent copy of `obj` with same prototype chain.
function getObjectCopy(obj) {
    var prototype = Object.getPrototypeOf(obj);
    var copy = Object.create(prototype);
    modify_object_1.modifyObject(copy, obj);
    return copy;
}
exports.getObjectCopy = getObjectCopy;
