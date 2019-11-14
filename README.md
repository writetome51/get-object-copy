# getObjectCopy(object): object

Returns independent copy of `object` with same prototype chain.  
`object` can be class instance or literal object.  The copy will  
contain all properties/methods, including inherited ones.

## Examples
```
// These are tests you can run:

export class TestClass {
    prop0 = {propA: {propB: {propC: {propD: 'value'}}}};
    prop1 = 1;
    prop2 = 2;

    doThis() {
        return this.prop1 + this.prop2;
    }
}

export class TestSubclass extends TestClass {
    prop3 = this.doThis(); // 3
}

export class TestSubSubclass extends TestSubclass {
}

let original = new TestSubSubclass();
let copy = getObjectCopy(original);

// Make sure copy is instanceof the most distant parent:
if (copy instanceof TestClass) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Make sure copy is instanceof its immediate class:
if (copy instanceof TestSubSubclass) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Make sure the copy is not just a reference to the original:
if (copy !== original) console.log('test 3 passed');
else console.log('test 3 FAILED');

// Make sure it contains the inherited method:
if (copy.doThis && (copy.doThis() === copy.prop3)) console.log('test 4 passed');
else console.log('test 4 FAILED');

// Make sure deeply nested properties are included in the copy:
if (copy.prop0.propA.propB.propC.propD === 'value') console.log('test 5 passed');
else console.log('test 5 FAILED');
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/get-object-copy
```

## Loading
```
// If using TypeScript:
import {getObjectCopy} from '@writetome51/get-object-copy';
// If using ES5 JavaScript:
let getObjectCopy = require('@writetome51/get-object-copy').getObjectCopy;
```
