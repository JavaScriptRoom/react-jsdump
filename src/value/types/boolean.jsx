import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function BooleanValue ({ value, theme }) {
    const style = StyleSheet.create(theme.boolean);

    return <div className={ css(style.booleanContainer) }>
        <div className={ css(style.booleanLabel) }>Boolean</div>
        <div className={ css(style.booleanValue) }>{ value.toString() }</div>
    </div>;
}
