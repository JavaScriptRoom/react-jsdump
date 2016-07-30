import { useHSL, darkenHSL, lightenHSL, desaturateHSL } from '../theme-utils';

// http://serennu.com/colour/hsltorgb.php
const novalHSL = [0, 0, 50];
const stringHSL = [0, 0, 50];
const numberHSL = [39, 100, 50];
const booleanHSL = [0, 59, 41];
const dateHSL = [270, 100, 59];
const regexpHSL = [34, 47, 50];
const functHSL = [180, 100, 25];
const arrayHSL = [120, 100, 30];
const objectHSL = [240, 57, 53];

const borderWidth = 2;
const padding = 3;

const layout = {
    block: {
        label: {
            padding: `${ padding }px ${ padding * 2 }px ${ padding + 1 }px`,
            color: 'white',
            fontWeight: 'bold',
            borderStyle: 'solid',
            borderWidth: `${ borderWidth }px ${ borderWidth }px 0 ${ borderWidth }px`
        },
        content: {
            padding: `${ padding * 3 }px`,
            borderStyle: 'solid',
            borderWidth: `${ borderWidth }px`
        },
        children: {
            width: '100%',
            display: 'table',
            boxSizing: 'border-box',
            borderStyle: 'solid',
            borderWidth: `${ borderWidth }px 0 0 ${ borderWidth }px`
        },
        child: {
            display: 'table-row'
        },
        childValue: {
            display: 'table-cell',
            padding: `${ padding }px`,
            borderStyle: 'solid',
            borderWidth: `0 ${ borderWidth }px ${ borderWidth }px 0`
        },
        childKey: {
            width: '1px',
            padding: `${ padding }px ${ padding * 2 }px ${ padding + 1 }px`,
            fontFamily: 'monospace'
        }
    },
    inline: {
        container: {
            borderStyle: 'solid',
            borderWidth: `${ borderWidth }px`
        },
        label: {
            display: 'inline-block',
            padding: `${ padding }px ${ padding * 2 }px ${ padding + 1 }px`,
            borderRightStyle: 'solid',
            borderRightWidth: `${ borderWidth }px`
        },
        value: {
            display: 'inline-block',
            padding: `${ padding }px ${ padding * 2 }px ${ padding + 1 }px`
        }
    }
};

export const valueInspector = {
    fontSize: '12px',
    fontFamily: 'Verdana'
};

export const noval = {
    novalContainer: { },
    novalValue: {
        ...layout.inline.value,
        color: useHSL(novalHSL),
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
};

export const string = {
    stringContainer: {
        ...layout.inline.container,
        borderColor: useHSL(stringHSL)
    },
    stringLabel: {
        ...layout.inline.label,
        borderColor: useHSL(stringHSL),
        background: useHSL(lightenHSL(stringHSL, 30))
    },
    stringValue: {
        ...layout.inline.value
    }
};

export const number = {
    numberContainer: {
        ...layout.inline.container,
        borderColor: useHSL(numberHSL)
    },
    numberLabel: {
        ...layout.inline.label,
        borderColor: useHSL(numberHSL),
        background: useHSL(lightenHSL(numberHSL, 20))
    },
    numberValue: {
        ...layout.inline.value
    }
};

export const boolean = {
    booleanContainer: {
        ...layout.inline.container,
        borderColor: useHSL(booleanHSL)
    },
    booleanLabel: {
        ...layout.inline.label,
        borderColor: useHSL(booleanHSL),
        background: useHSL(lightenHSL(booleanHSL, 20))
    },
    booleanValue: {
        ...layout.inline.value
    }
};

export const date = {
    dateContainer: {
        ...layout.inline.container,
        borderColor: useHSL(dateHSL)
    },
    dateLabel: {
        ...layout.inline.label,
        borderColor: useHSL(dateHSL),
        background: useHSL(lightenHSL(dateHSL, 20))
    },
    dateValue: {
        ...layout.inline.value
    }
};

export const regexp = {
    regexpContainer: {
        ...layout.inline.container,
        borderColor: useHSL(regexpHSL)
    },
    regexpLabel: {
        ...layout.inline.label,
        borderColor: useHSL(regexpHSL),
        background: useHSL(lightenHSL(regexpHSL, 20))
    },
    regexpValue: {
        ...layout.inline.value
    }
};

export const funct = {
    fnContainer: { },
    fnLabel: {
        ...layout.block.label,
        backgroundColor: useHSL(functHSL),
        borderColor: useHSL(darkenHSL(functHSL, 10))
    },
    fnProperties: {
        ...layout.block.children,
        borderColor: useHSL(darkenHSL(functHSL, 10))
    },
    fnProperty: {
        ...layout.block.child
    },
    fnValue: {
        ...layout.block.childValue,
        borderColor: useHSL(darkenHSL(functHSL, 10))
    },
    fnKey: {
        ...layout.block.childValue,
        ...layout.block.childKey,
        backgroundColor: useHSL(desaturateHSL(lightenHSL(functHSL, 40), 60)),
        borderColor: useHSL(darkenHSL(functHSL, 10))
    },
    fnPre: {
        margin: 0,
        padding: `${ padding * 2 }px`
    }
};

export const array = {
    arrayContainer: { },
    arrayLabel: {
        ...layout.block.label,
        backgroundColor: useHSL(arrayHSL),
        borderColor: useHSL(darkenHSL(arrayHSL, 10))
    },
    arrayItems: {
        ...layout.block.children,
        borderColor: useHSL(darkenHSL(arrayHSL, 10))
    },
    arrayItem: {
        ...layout.block.child
    },
    arrayValue: {
        ...layout.block.childValue,
        borderColor: useHSL(darkenHSL(arrayHSL, 10))
    },
    arrayIndex: {
        ...layout.block.childValue,
        ...layout.block.childKey,
        backgroundColor: useHSL(desaturateHSL(lightenHSL(arrayHSL, 40), 40)),
        borderColor: useHSL(darkenHSL(arrayHSL, 10))
    }
};

export const object = {
    objectContainer: { },
    objectLabel: {
        ...layout.block.label,
        backgroundColor: useHSL(objectHSL),
        borderColor: useHSL(darkenHSL(objectHSL, 20))
    },
    objectProperties: {
        ...layout.block.children,
        borderColor: useHSL(darkenHSL(objectHSL, 20))
    },
    objectProperty: {
        ...layout.block.child
    },
    objectValue: {
        ...layout.block.childValue,
        borderColor: useHSL(darkenHSL(objectHSL, 20))
    },
    objectKey: {
        ...layout.block.childValue,
        ...layout.block.childKey,
        backgroundColor: useHSL(desaturateHSL(lightenHSL(objectHSL, 30), 10)),
        borderColor: useHSL(darkenHSL(objectHSL, 20))
    }
};
