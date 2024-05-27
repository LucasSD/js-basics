function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = insertAfter;
}