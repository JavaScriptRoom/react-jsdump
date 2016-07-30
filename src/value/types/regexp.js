import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function RegExpValue ({ value, theme }) {
	const style = StyleSheet.create(theme.regexp);

    return <div className={ css(style.regexpContainer) }>
        <div className={ css(style.regexpLabel) }>RegExp</div>
        <div className={ css(style.regexpValue) }>
			<code>{ value.toString() }</code>
		</div>
    </div>;
}
