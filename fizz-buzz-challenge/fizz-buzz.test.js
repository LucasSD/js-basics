const fizzBuzz = require("./fizz-buzz");
describe('fizz buzz', () => {
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