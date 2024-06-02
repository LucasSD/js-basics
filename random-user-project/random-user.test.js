const {genUser, createUserElement} = require('./random-user')

describe('createUserElement', () => {
    it('should create an element with the correct tag', () => {
        const tag = 'div';
        const element = createUserElement(tag, 'test-class', 'Test Content');
        expect(element.tagName).toBe('DIV');
    });

    it('should assign the correct class name', () => {
        const className = 'test-class';
        const element = createUserElement('div', className, 'Test Content');
        expect(element.className).toBe(className);
    });

    it('should set the text content correctly', () => {
        const textContent = 'Test Content';
        const element = createUserElement('div', 'test-class', textContent);
        expect(element.textContent).toBe(textContent);
    });

    it('should set the text content to an empty string if not provided', () => {
        const element = createUserElement('div', 'test-class');
        expect(element.textContent).toBe('');
    });
});