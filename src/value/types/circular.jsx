import React from 'react';

export default function CircularValue ({ value }) {
    return <div className='circularReference'>
        <div className='typeLabel'>Circular Reference!</div>
        <div className='value'>{ (value.constructor && value.constructor.name) || 'Object' }</div>
    </div>;
}
