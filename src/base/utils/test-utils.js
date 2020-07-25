import { __awaiter, __generator } from "tslib";
import { h } from 'preact';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
export var mountHook = function (hook) {
    mount(React.createElement(HookWrapper, { hook: hook }));
};
function HookWrapper(_a) {
    var hook = _a.hook;
    hook();
    return React.createElement(React.Fragment, null);
}
export var wait = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return new Promise(function (resolve) {
        setTimeout(resolve, timeout);
    });
};
export var actWait = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, act(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, wait(timeout)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
