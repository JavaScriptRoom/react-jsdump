import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function StringValue ({ value, theme }) {
    const style = StyleSheet.create(theme.string);

    return <div className={ css(style.stringContainer) }>
        <div className={ css(style.stringLabel) }>String</div>
        <div className={ css(style.stringValue) }>{ value }</div>
    </div>;
}
