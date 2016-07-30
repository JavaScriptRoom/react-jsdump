import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Value from '../';

export default function ArrayValue ({ value, theme, referenceTracker, path }) {
    // pre-register our children at their depth
    value.forEach((v, index) => referenceTracker.addReference(v, path.push(index)));

    const array = Array.isArray(value) ? value : Array.from(value);
    const arrayType = value.constructor.name;
    const style = StyleSheet.create(theme.array);

    return <div className={ css(style.arrayContainer) }>

        <div className={ css(style.arrayLabel) }>{ arrayType }</div>
        <div className={ css(style.arrayItems) }>

            { array.map((x, i) =>
                <div key={ i } className={ css(style.arrayItem) }>

                    <div className={ css(style.arrayIndex) }>{ i }</div>

                    <div className={ css(style.arrayValue) }>
                        <Value value={ x } theme={ theme } referenceTracker={ referenceTracker } path={ path.push(i) } />
                    </div>

                </div>
            ) }

        </div>

    </div>;
}
