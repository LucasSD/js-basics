const calculator = require('./calculator');

describe('calculates operations', () => {
    test.each([
        [5, 2, '+', 7],
        [5, 2, '-', 3],
        [5, 2, '*', 10],
        [5, 2, '/', 2.5],
        [5, 2, '&', "Unknown operator"],
        [20, 0, '/', Infinity],
    ])('calulates operations', (num1, num2, operator, expected) => {
        expect(calculator(num1, num2, operator)).toBe(expected);
    });
    test('non-numeric inputs', () => {
        expect(calculator('a', 5, '+')).toBeNaN();
        expect(calculator(10, 'b', '-')).toBeNaN();
        expect(calculator('a', 'b', '*')).toBeNaN();
    });
});

