import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useLinearProgressFoundation } from './foundation';
import { Tag, useClassNames, createComponent } from '@rmwc/base';
/** A component to display linear progress. */
export var LinearProgress = createComponent(function LinearProgress(props, ref) {
    var reversed = props.reversed, closed = props.closed, progress = props.progress, buffer = props.buffer, foundationRef = props.foundationRef, rest = __rest(props, ["reversed", "closed", "progress", "buffer", "foundationRef"]);
    var className = useClassNames(props, [
        'mdc-linear-progress',
        {
            'mdc-linear-progress--reversed': reversed,
            'mdc-linear-progress--closed': closed
        }
    ]);
    var rootEl = useLinearProgressFoundation(props).rootEl;
    return (React.createElement(Tag, __assign({ "aria-label": "Progress Bar" }, rest, { "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": progress, tag: "nav", role: "progressbar", element: rootEl, className: className, ref: ref }),
        React.createElement(LinearProgressBody, null)));
});
var LinearProgressBody = React.memo(function LinearProgressBody() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mdc-linear-progress__buffering-dots" }),
        React.createElement("div", { className: "mdc-linear-progress__buffer" }),
        React.createElement("div", { className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar" },
            React.createElement("div", { className: "mdc-linear-progress__bar-inner" })),
        React.createElement("div", { className: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar" },
            React.createElement("div", { className: "mdc-linear-progress__bar-inner" }))));
});
