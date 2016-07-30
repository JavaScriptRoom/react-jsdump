import React from 'react';

import ArrayValue from './types/array';
import BooleanValue from './types/boolean';
import CircularValue from './types/circular';
import DateValue from './types/date';
import FunctionValue from './types/function';
import NoValue from './types/noval';
import NumberValue from './types/number';
import ObjectValue from './types/object';
import RegExpValue from './types/regexp';
import StringValue from './types/string';

function determineType (value) {
    const TypedArray = Int8Array.__proto__;

    switch (true) {

        case value === null: return NoValue;
        case value === undefined: return NoValue;

        case Number.isNaN(value): return NoValue;

        case typeof value === 'number': return NumberValue;
        case typeof value === 'boolean': return BooleanValue;
        case typeof value === 'string': return StringValue;

        case value instanceof Date: return DateValue;
        case value instanceof RegExp: return RegExpValue;
        //case value instanceof Map: return MapValue;
        //case value instanceof Set: return SetValue;

        case Array.isArray(value): return ArrayValue;

        case value instanceof TypedArray: return ArrayValue;
        //case value instanceof File: return FileValue;
        //case value instanceof Blob: return BlobValue;
        //case value instanceof ArrayBuffer: return BufferValue;

        case typeof value === 'object': return ObjectValue;
        case typeof value === 'function': return FunctionValue;

        default: throw new TypeError(`Unknown Type: ${ value }`);
    }
}

export default function Value ({ value, theme, referenceTracker, path }) {
    const isCircular = referenceTracker.addReference(value, path);

    if (isCircular) {
        return <CircularValue value={ value } theme={ theme } path={ path } referenceTracker={ referenceTracker } />;
    }

    const Type = determineType(value);

    return <Type value={ value } theme={ theme } path={ path } referenceTracker={ referenceTracker } />;
}
