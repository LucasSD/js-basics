// Assuming your function is in a file named 'arrayCreator.js'
const { createArray, updateArray, stringifiedArray } = require('./object-challenge');

describe('createArray', () => {
    test('should return an array with three items', () => {
        const result = createArray();
        expect(result).toHaveLength(3);
    });

    test('all items should match the specified structure with correct default status', () => {
        const result = createArray();
        result.forEach(item => {
            expect(item).toHaveProperty('title');
            expect(item).toHaveProperty('author');
            expect(item).toHaveProperty('status');
            expect(item.status).toEqual({
                own: true,
                reading: false,
                read: false
            });
        });
    });

    test('should return correct titles and authors for each book', () => {
        const expectedBooks = [
            {title: "Title A", author: "Lucas SD"},
            {title: "Title B", author: "Hamia SD"},
            {title: "Title C", author: "Marilyn SD"}
        ];

        const result = createArray();

        expectedBooks.forEach((book, index) => {
            expect(result[index].title).toBe(book.title);
            expect(result[index].author).toBe(book.author);
        });
    });
});

test('should update each element in array correctly', () => {
    // const expectedBooks = [
    //     {title: "Title A", },
    //     {title: "Title B", },
    //     {title: "Title C", }
    // ];

    const result = updateArray(createArray());

    result.forEach((book, index) => {
        expect(result[index].status.read).toBe(true)
    });
})


test('should return a stringified version of the array', () => {
    const arr = createArray();
    const strArray = stringifiedArray(arr);

    expect(strArray).toBe(JSON.stringify(arr));
    expect(typeof strArray).toBe('string');
})
