import Immutable from 'immutable';

export default class CircularReferenceTracker {

	constructor () {
        // should contain { value: Any, path: Immutable.List }
        this.references = Immutable.Map();
    }

    addReference (value, path) {
        // check for circular references on non-date
        const isObject =
            !(value === null || value === undefined) //not null or undefined
            && !(value instanceof Date) //not a date (which are objects)
            && !(value instanceof RegExp) //not a regex (which are objects)
            && typeof value === 'object'; //all other 'object's

        if (isObject) {
            const existingPath = this.references.get(value);

            if (!existingPath) {
                this.references = this.references.set(value, path);
                return false; //not a dupe
            }
            else if (existingPath.equals(path)) {
                return false; //exact match, not a dupe (was pre-registered)
            }
            else {
                return true; // duplicate
            }
        }

        return false;
    }
}
