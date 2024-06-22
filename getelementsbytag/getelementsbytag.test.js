const getElementsByTag = require('./getelementsbytag');

describe('Get Elements By Tag', () => {
  it('should be a function', () => {
    expect(typeof getElementsByTag).toEqual('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });

  it('should return an empty array if no root is passed in', () => {
    expect(getElementsByTag()).toEqual([]);
  });

  it('should return only the root element if no tagName is passed in', () => {
    const root = document.createElement('div');
    expect(getElementsByTag(root)).toEqual([root]);
  });

  it('should return the correct elements', () => {
    const root = document.createElement('div');

    // Add some child elements to the root
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const span = document.createElement('span');

    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);

    const result = getElementsByTag(root, 'p');

    expect(result).toEqual([p1, p2]);
  });

  it('should return elements with different tags', () => {
    const root = document.createElement('div');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const div = document.createElement('div');
    root.appendChild(p);
    root.appendChild(span);
    root.appendChild(div);

    expect(getElementsByTag(root, 'span')).toEqual([span]);
    expect(getElementsByTag(root, 'div')).toEqual([root, div]);
  });

  it('should return nested elements', () => {
    const root = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const p = document.createElement('p');

    root.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(p);

    expect(getElementsByTag(root, 'div')).toEqual([root, div1, div2]);
  });

  it('should be case-insensitive', () => {
    const root = document.createElement('div');
    const p = document.createElement('p');
    root.appendChild(p);

    expect(getElementsByTag(root, 'P')).toEqual([p]);
    expect(getElementsByTag(root, 'p')).toEqual([p]);
  });

  it('should return an empty array if no elements match', () => {
    const root = document.createElement('div');
    const span = document.createElement('span');
    root.appendChild(span);

    expect(getElementsByTag(root, 'p')).toEqual([]);
  });

  it('should handle a large number of elements', () => {
    const root = document.createElement('div');
    for (let i = 0; i < 1000; i++) {
      const p = document.createElement('p');
      root.appendChild(p);
    }

    const result = getElementsByTag(root, 'p');
    expect(result.length).toEqual(1000);
  });
});
