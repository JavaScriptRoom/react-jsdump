import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { StyleSheet, css } from 'aphrodite';

import * as Themes from './themes';
import Value from './value';
import CircularReferenceTracker from './crt';

export default class JSDump extends Component {

    render () {
		const { value, theme = 'cfdump' } = this.props;
        const referenceTracker = new CircularReferenceTracker();
        const path = Immutable.List();
		const chosenTheme = theme in Themes ? Themes[theme] : Theme.cfdump;
		const style = StyleSheet.create(chosenTheme);

        return <div className={ css(style.valueInspector) }>
            <Value value={ value } theme={ chosenTheme } referenceTracker={ referenceTracker } path={ path } />
        </div>;
    }
}
