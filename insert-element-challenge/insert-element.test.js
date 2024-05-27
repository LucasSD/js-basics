const { JSDOM } = require('jsdom')
const insertAfter = require('./insert-element');


describe('insertAfter function', () => {
    let document

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><body><div id="parent"><p id="existing">Existing</p></div></body>`)
        document = dom.window.document
    })

    test('should insert new element after existing element', () => {
        const newEl = document.createElement('span')
        newEl.textContent = 'New Element'
        const existingEl = document.getElementById('existing')
        const parentEl = existingEl.parentElement

        insertAfter(newEl, existingEl)

        expect(parentEl.children[1]).toBe(newEl)
        expect(parentEl.children[0]).toBe(existingEl)
    })

    test('should handle inserting at the end of parent\'s child nodes', () => {
        const newEl = document.createElement('span')
        newEl.textContent = 'New Element'
        const existingEl = document.getElementById('existing')
        const parentEl = existingEl.parentElement

        insertAfter(newEl, existingEl)

        expect(parentEl.lastChild).toBe(newEl)
    })
})
