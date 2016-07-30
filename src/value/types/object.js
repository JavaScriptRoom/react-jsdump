import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Value from '../';

export default function ObjectValue ({ value, theme, referenceTracker, path }) {
    // pre-register our children at their depth
    Object.keys(value).forEach((key, index) => referenceTracker.addReference(value[key], path.push(key)));

    if (path.length > 1) return null;

    const objectName = value.constructor ? value.constructor.name : Object.name;
	const style = StyleSheet.create(theme.object);

    return <div className={ css(style.objectContainer) }>

        <div className={ css(style.objectLabel) }>{ objectName }</div>
        <div className={ css(style.objectProperties) }>

            { Object.keys(value).map((key, i) =>
                <div key={ key } className={ css(style.objectProperty) }>

                    <div className={ css(style.objectKey) }>{ key }</div>

                    <div className={ css(style.objectValue) }>
						<Value value={ value[key] } theme={ theme } referenceTracker={ referenceTracker } path={ path.push(key) } />
					</div>

                </div>
            ) }

        </div>

    </div>;
}
