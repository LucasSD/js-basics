const reverseString = require('./reversestring');

describe('Reverse String', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function');
    });

    it('should return a string', () => {
        expect(typeof reverseString('hello')).toEqual('string');
    });

    it('should return the reversed string', () => {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('bye')).toEqual('eyb');
        expect(reverseString('wow')).toEqual('wow');
        expect(reverseString('hello world')).toEqual('dlrow olleh');
    });
    it('should handle edge cases', () => {
        expect(reverseString('')).toEqual('');
        expect(reverseString('a')).toEqual('a');
        expect(reverseString(' ')).toEqual(' ');
        expect(reverseString('12345')).toEqual('54321');
        expect(reverseString('!@#$%')).toEqual('%$#@!');
    });

});
