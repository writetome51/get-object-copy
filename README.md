# getProperty(property: string,  object): any

Why would you use this to get a property value instead of simply writing  
`object[property]` or `object.property` ?  
Because this function allows `property` to be a string that can include dot notation  
( i.e,  'property.subproperty.subsubproperty' ) .

Note:  even if you are getting the value of an array item, here you need to use  
dot-notation and not square braces.  
Example:  if getting the first item of the first item of an array, write:  
`getProperty('0.0', array);  // instead of array[0][0]`

## Examples
```
let officer = {name: {first: 'Tom', last: 'Arnold'}, rank: 'sergeant'};
let lastName = getProperty('name.last', officer);
// lastName === 'Arnold'

let city = {
	name: 'San Francisco', 
	cityCouncil: {
		members: [
			{name: {first: 'Megan', last: 'Trainor'}, age: 26},
			{name: {first: 'Justin', last: 'Bieber'}, age: 85}
		]
	}
};

let ageOfMeganTrainor = getProperty('cityCouncil.members.0.age',  city);
// ageOfMeganTrainor === 26
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
