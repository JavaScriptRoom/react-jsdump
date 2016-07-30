export function useHSL (array) {
    return `hsl(${ array[0] }, ${ array[1] }%, ${ array[2] }%)`;
}

export function darkenHSL (array, percentage) {
    return [array[0], array[1], array[2] - percentage];
}

export function lightenHSL (array, percentage) {
    return [array[0], array[1], array[2] + percentage];
}

export function desaturateHSL (array, percentage) {
    return [array[0], array[1] - percentage, array[2]];
}

export function saturateHSL (array, percentage) {
    return [array[0], array[1] + percentage, array[2]];
}
