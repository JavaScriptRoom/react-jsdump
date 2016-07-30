import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { js_beautify as beautify } from 'js-beautify';
import Value from '../';

export default function ObjectValue ({ value, theme, referenceTracker, path }) {
    const { name } = value;
    const style = StyleSheet.create(theme.funct);
    const isClass = value.prototype && Object.getOwnPropertyNames(value.prototype).filter(x => x !== 'constructor').length > 0;
    const prototype = {};

    if (isClass) for (const fn of Object.getOwnPropertyNames(value.prototype).filter(x => x !== 'constructor')) {
        prototype[fn] = value.prototype[fn];
    }

    return <div className={ css(style.fnContainer) }>

        <div className={ css(style.fnLabel) }>
            { isClass ? 'Class' : 'Function' }: <code>{ name || 'anonymous' }</code>
        </div>

        <div className={ css(style.fnProperties) }>

            <div className={ css(style.fnProperty) }>

                <div className={ css(style.fnKey) }>value</div>
                <div className={ css(style.fnValue) }>

                    <pre className={ css(style.fnPre) }><code>
                        { beautify(value.toString(), { indent_size: 4 }) }
                    </code></pre>

                </div>

            </div>

            { isClass && <div className={ css(style.fnProperty) }>

                <div className={ css(style.fnKey) }>prototype</div>
                <div className={ css(style.fnValue) }>
                    <Value value={ prototype } theme={ theme } referenceTracker={ referenceTracker } path={ path } />
                </div>

            </div> }

        </div>

    </div>;
}
