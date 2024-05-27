const { twoNumbers, makeOutputString, doOps } = require('./number-challenge');


describe('twoNumbers', () => {
    it('returns x as a random number between 1 and 100 and y between 1 and 50', () => {
        const { x, y } = twoNumbers();

        // Check if x is between 1 and 100
        expect(x).toBeGreaterThanOrEqual(1);
        expect(x).toBeLessThanOrEqual(100);

        // Check if y is between 1 and 50
        expect(y).toBeGreaterThanOrEqual(1);
        expect(y).toBeLessThanOrEqual(50);
    });
});

test('makes an output string', () => {
    expect(makeOutputString(5, "+", 7, 12)).toBe('5 + 7 = 12');
    expect(makeOutputString(21, "-", 20, 1)).toBe('21 - 20 = 1');
});

describe('doOps', () => {
    // Create a test case for each operation
    it('correctly calculates the sum and creates an output string', () => {
        const numberPair = { x: 5, y: 3 };
        const results = doOps(numberPair);
        expect(results.outputSum).toBe('5 + 3 = 8');
    });

    it('correctly calculates the difference and creates an output string', () => {
        const numberPair = { x: 5, y: 3 };
        const results = doOps(numberPair);
        expect(results.outputdiff).toBe('5 - 3 = 2');
    });

    it('correctly calculates the product and creates an output string', () => {
        const numberPair = { x: 5, y: 3 };
        const results = doOps(numberPair);
        expect(results.outputproduct).toBe('5 * 3 = 15');
    });

    it('correctly calculates the quotient and creates an output string', () => {
        const numberPair = { x: 6, y: 3 }; // Avoid division by zero
        const results = doOps(numberPair);
        expect(results.outputquotient).toBe('6 / 3 = 2');
    });

    it('correctly calculates the modulus and creates an output string', () => {
        const numberPair = { x: 5, y: 3 };
        const results = doOps(numberPair);
        expect(results.outputmodulus).toBe('5 % 3 = 2');
    });

    // Add more tests as necessary for edge cases, like division by zero
});


