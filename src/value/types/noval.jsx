import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function NoValue ({ value, theme }) {
    const style = StyleSheet.create(theme.noval);

    return <div className={ css(style.novalContainer) }>
        <div className={ css(style.novalValue) }>{ String(value) }</div>
    </div>;
}
