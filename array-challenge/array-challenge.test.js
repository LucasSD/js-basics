{
    const { modifyArray } = require('./array-challenge');

    test('reverses array and adds element to end and start', () => {
        expect(modifyArray([1, 2, 3, 4, 5])).toStrictEqual([6, 5, 4, 3, 2, 1, 0]);
    });
}

{
    const { combineArrays } = require('./array-challenge');

    test('merges two arrays', () => {
        expect(combineArrays([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10])).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    });
}