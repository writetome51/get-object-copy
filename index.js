import {modifyObject} from '@writetome51/modify-object';


// Returns independent copy of `obj` with same prototype chain.

export function getObjectCopy(obj) {
	let prototype = Object.getPrototypeOf(obj);
	let copy = Object.create(prototype);
	modifyObject(copy, obj);
	return copy;
}
