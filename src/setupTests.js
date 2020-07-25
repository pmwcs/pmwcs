import { __read, __spread } from "tslib";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
// @ts-ignore
import rmwcTestPolyfill from './base/test-polyfill';
Enzyme.configure({ adapter: new Adapter() });
rmwcTestPolyfill();
var consoleError = console.error;
beforeAll(function () {
    jest.spyOn(console, 'error').mockImplementation(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!(typeof args[0] === 'string' &&
            args[0].includes('Warning: An update to %s inside a test was not wrapped in act'))) {
            consoleError.apply(void 0, __spread(args));
        }
    });
});
