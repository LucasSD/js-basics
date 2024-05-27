
const { createYoungPeopleArray, people, positiveSum, capitalizeWordsInArray } = require('./array-challenges');

describe('createYoungPeopleArray function', () => {
    test('should return an array of people under the age of 26 with name and email properties', () => {
        const expectedOutput = [
            { name: 'Jane Poe', email: 'jane@gmail.com' },
            { name: 'Sara Soe', email: 'Sara@gmail.com' },
            { name: 'Jose Koe', email: 'jose@gmail.com' },
        ];

        expect(createYoungPeopleArray(people)).toEqual(expectedOutput);
    });

    test('should return an empty array if no people are under the age of 26', () => {
        const nocreateYoungPeopleArray = [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@gmail.com',
                phone: '111-111-1111',
                age: 30,
            },
            {
                firstName: 'Bob',
                lastName: 'Foe',
                email: 'bob@gmail.com',
                phone: '333-333-3333',
                age: 45,
            }
        ];

        expect(createYoungPeopleArray(nocreateYoungPeopleArray)).toEqual([]);
    });

    test('should return only people under the age of 26', () => {
        const mixedAges = [
            {
                firstName: 'Older',
                lastName: 'Person',
                email: 'older@gmail.com',
                phone: '666-666-6666',
                age: 27,
            },
            {
                firstName: 'Younger',
                lastName: 'Person',
                email: 'younger@gmail.com',
                phone: '777-777-7777',
                age: 22,
            }
        ];

        const expectedOutput = [
            { name: 'Younger Person', email: 'younger@gmail.com' }
        ];

        expect(createYoungPeopleArray(mixedAges)).toEqual(expectedOutput);
    });
});


describe('positiveSum function', () => {
    test('should return the sum of the positive numbers', () => {
        expect(positiveSum([2, -30, 50, 20, -12, -9, 7])).toEqual(79);
    });

    test('should return 0 if all numbers are negative', () => {
        expect(positiveSum([-2, -30, -50, -20, -12, -9, -7])).toEqual(0);
    });

    test('should return 0 if the array is empty', () => {
        expect(positiveSum([])).toEqual(0);
    });

    test('should return 0 if the array contains only zero', () => {
        expect(positiveSum([0])).toEqual(0);
    });

    test('should return the correct sum when all numbers are positive', () => {
        expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
    });

    test('should return the correct sum when the array contains positive and zero values', () => {
        expect(positiveSum([0, 1, 2, 3])).toEqual(6);
    });

    test('should handle a large array of mixed positive and negative numbers', () => {
        const largeArray = new Array(1000).fill(1).map((num, index) => (index % 2 === 0 ? num : -num));
        expect(positiveSum(largeArray)).toEqual(500);
    });

    test('should return the correct sum for an array with decimal numbers', () => {
        expect(positiveSum([1.5, -2.3, 3.2, -4.1, 5.0])).toEqual(9.7);
    });

    test('should return the correct sum for an array with all elements as zero', () => {
        expect(positiveSum([0, 0, 0, 0])).toEqual(0);
    });

    test('should return the correct sum for an array with positive, negative, and zero values', () => {
        expect(positiveSum([0, -1, 2, -3, 4, -5, 6])).toEqual(12);
    });
});


describe('capitalizeWordsInArray function', () => {
    test('should return an array with first letter of each word in upper case', () => {
        expect(capitalizeWordsInArray(['coder', 'programmer', 'developer'])).toEqual(['Coder', 'Programmer', 'Developer']);
    });
});
