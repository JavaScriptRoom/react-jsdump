import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function DateValue ({ value, theme }) {
    const style = StyleSheet.create(theme.date);

    return <div className={ css(style.dateContainer) }>
        <div className={ css(style.dateLabel) }>Date</div>
        <div className={ css(style.dateValue) }>{ value.toString() }</div>
    </div>;
}
