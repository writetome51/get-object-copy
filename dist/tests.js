// Make sure inherited properties can be overwritten and also be accessed in new methods.
import { getObjectCopy } from './index';
export class TestClass {
    constructor() {
        this.prop0 = { propA: { propB: { propC: { propD: 'value' } } } };
        this.prop1 = 1;
        this.prop2 = 2;
    }
    doThis() {
        return this.prop1 + this.prop2;
    }
}
export class TestSubclass extends TestClass {
    constructor() {
        super(...arguments);
        this.prop3 = this.doThis(); // 3
    }
}
export class TestSubSubclass extends TestSubclass {
}
let original = new TestSubSubclass();
let copy = getObjectCopy(original);
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
