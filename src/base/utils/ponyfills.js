export var closest = function (element, selector) {
    if (element instanceof Element) {
        /* istanbul ignore else  */
        if (element && element.closest) {
            return element.closest(selector);
        }
        else {
            var el = element;
            while (el) {
                if (matches(el, selector)) {
                    return el;
                }
                el = el.parentElement;
            }
        }
    }
    return null;
};
export var matches = function (element, selector) {
    /* istanbul ignore next  */
    var nativeMatches = element.matches ||
        element.webkitMatchesSelector ||
        element.msMatchesSelector;
    return nativeMatches.call(element, selector);
};
