const {getCelsius, minMax} = require('./function-challenges');

describe('converts fahrenheit to celsius', () => {
    test.each([
        [32, "The temperature is 0 °C"],
        [212, "The temperature is 100 °C"],
        [0, "The temperature is -17.78 °C"],
        [100, "The temperature is 37.78 °C"],
        [-40, "The temperature is -40 °C"]
    ])('converts %d°F to %s', (input, expected) => {
        expect(getCelsius(input)).toBe(expected);
    });
});


describe('returns min and max value in an array', () => {
    test.each([
        [[1, 2, 3, 4, 5], { min: 1, max: 5 }],
        [[-10, 0, 10, 20, 30], { min: -10, max: 30 }],
        [[7, 2, 9, 4, 6], { min: 2, max: 9 }],
        [[5], { min: 5, max: 5 }],
        [[], { min: Infinity, max: -Infinity }],
    ])('min and max of array', (input, expected) => {
        expect(minMax(input)).toStrictEqual(expected);
    });
});


