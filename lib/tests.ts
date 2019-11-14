// Make sure inherited properties can be overwritten and also be accessed in new methods.

import { getObjectCopy } from './index';


export class TestClass {
	prop1 = 1;
	prop2 = 2;


	doThis() {
		return this.prop1 + this.prop2;
	}
}


export class TestSubclass extends TestClass {
	prop3 = this.prop1 + this.prop2; // 3
	prop4 = this.prop1 + this.prop3; // 4
}


export class TestSubSubclass extends TestSubclass {
}


let objToModify = new TestSubSubclass();

let obj: TestSubSubclass = getObjectCopy(objToModify);

// Make sure copy is instanceof the most distant parent:
if (obj instanceof TestClass) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Make sure copy is instanceof its immediate class:
if (obj instanceof TestSubSubclass) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Make sure the copy is not just a reference to the original:
if (obj === objToModify) console.log('test 3 FAILED');
else console.log('test 3 passed');

// Make sure it contains the inherited method:
if (obj.doThis) console.log('test 4 passed');
else console.log('test 4 FAILED');
