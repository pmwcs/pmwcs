import { __assign, __read, __rest } from "tslib";
import { useState } from 'react';
import { useFoundation } from '@rmwc/base';
import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield';
export var useTextFieldCharacterCountFoundation = function (props) {
    var _a = __read(useState(), 2), content = _a[0], setContent = _a[1];
    var _b = useFoundation({
        props: props,
        api: function (_a) {
            var foundation = _a.foundation;
            return {
                getFoundation: function () { return foundation; }
            };
        },
        elements: {},
        foundation: function () {
            return new MDCTextFieldCharacterCounterFoundation({
                setContent: function (content) {
                    setContent(content);
                }
            });
        }
    }), foundation = _b.foundation, elements = __rest(_b, ["foundation"]);
    return __assign({ content: content }, elements);
};
