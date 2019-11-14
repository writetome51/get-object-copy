# getObjectCopy(object): object

Returns independent copy of `object` with same prototype chain.  
`object` can be class instance or literal object.  The copy will  
contain all properties/methods, including inherited ones.

## Examples
```
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
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/get-property
```

## Loading
```
// If using TypeScript:
import {getProperty} from '@writetome51/get-property';
// If using ES5 JavaScript:
var getProperty = require('@writetome51/get-property').getProperty;
```
