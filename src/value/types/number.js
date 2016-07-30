import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function NumberValue ({ value, theme }) {
	const style = StyleSheet.create(theme.number);

    return <div className={ css(style.numberContainer) }>
        <div className={ css(style.numberLabel) }>Number</div>
        <div className={ css(style.numberValue) }>{ value }</div>
    </div>;
}
