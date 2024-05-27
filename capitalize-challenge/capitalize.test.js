const capitalize = require('./capitalize');

test('capitalizes the first letter of "developer"', () => {
    expect(capitalize('developer')).toBe('Developer');
});
