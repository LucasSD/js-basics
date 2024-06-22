const fizzBuzz = require("./fizz-buzz");
describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toEqual('function');
    });
    test.each([
        [9, "Fizz"],
        [65, "Buzz"],
        [30, "FizzBuzz"],
        [-9, "Fizz"],
        [-25, "Buzz"],
        [-15, "FizzBuzz"],
        [0, "FizzBuzz"],
        [7, 7],
        [1, 1],
    ])('basic cases', (input, expected) => {
        expect(fizzBuzz(input)).toBe(expected);
    });
});

// below is an alternative
describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toEqual('function');
    });

    test.each([
        [3, "Fizz"],
        [6, "Fizz"],
        [12, "Fizz"],
    ])('should return Fizz if divisible by 3', (input, expected) => {
        expect(fizzBuzz(input)).toBe(expected);
    });

    test.each([
        [5, "Buzz"],
        [10, "Buzz"],
        [20, "Buzz"],
    ])('should return Buzz if divisible by 5', (input, expected) => {
        expect(fizzBuzz(input)).toBe(expected);
    });

    test.each([
        [15, "FizzBuzz"],
        [30, "FizzBuzz"],
        [45, "FizzBuzz"],
    ])('should return FizzBuzz if divisible by 3 & 5', (input, expected) => {
        expect(fizzBuzz(input)).toBe(expected);
    });

    test.each([
        [1, 1],
        [13, 13],
        [17, 17],
    ])('should return the number if not divisible by 3 or 5', (input, expected) => {
        expect(fizzBuzz(input)).toBe(expected);
    });
});
