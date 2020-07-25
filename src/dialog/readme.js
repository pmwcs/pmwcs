import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogButton, SimpleDialog } from './dialog';
import { Button } from '../button';
import { createDialogQueue, DialogQueue } from './dialog-queue';
export default function () {
    return (React.createElement(Docs, { title: "Dialogs", lead: "Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.", module: "@rmwc/dialog", styles: [
            '@material/dialog/dist/mdc.dialog.css',
            '@material/button/dist/mdc.button.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/dialogs/", examples: examples },
        React.createElement(DocsSubtitle, null, "Standard Usage"),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Dialog, { open: open, onClose: function (evt) {
                        console.log(evt.detail.action);
                        setOpen(false);
                    }, onClosed: function (evt) { return console.log(evt.detail.action); } },
                    React.createElement(DialogTitle, null, "Dialog Title"),
                    React.createElement(DialogContent, null, "This is a standard dialog."),
                    React.createElement(DialogActions, null,
                        React.createElement(DialogButton, { action: "close" }, "Cancel"),
                        React.createElement(DialogButton, { action: "accept", isDefaultAction: true }, "Sweet!"))),
                React.createElement(Button, { raised: true, onClick: function () { return setOpen(true); } }, "Open standard Dialog")));
        }),
        React.createElement(DocsSubtitle, null, "Simplified Usage"),
        React.createElement(DocsP, null, "Material Dialogs are a complex component. RMWC contains an additional `SimpleDialog` component for ease of use that internally contains the default structure already built out. Illustrated below is both the standard and simple dialog usage."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(SimpleDialog, { title: "This is a simple dialog", body: "You can pass the body prop or children.", open: open, onClose: function (evt) {
                        console.log(evt.detail.action);
                        setOpen(false);
                    } }),
                React.createElement(Button, { raised: true, onClick: function () { return setOpen(true); } }, "Open Simple Dialog")));
        }),
        React.createElement(DocsSubtitle, null, "Usage with DialogQueue"),
        React.createElement(DocsP, null, "Some dialog interactions are complex, but a lot of the time you just need a simple alert or confirm dialog. `DialogQueue` allows you to open dialogs from anywhere in your app and emulates the browsers built in `alert`, `confirm` and `prompt` dialogs. If you've used the `SnackbarQueue`, the `DialogQueue` is very similar."),
        React.createElement(DocsP, null, "Setup is nice and easy, create a queue object you can pass around in your code base, pass the queues `dialogs` to the `DialogQueue`component, and then use the `alert`, `prompt` or `confirm` api to open dialogs."),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n        // Create a file that exports your queue\n        // myQueue.js\n        import { createDialogQueue } from '@rmwc/dialog';\n\n        export const queue = createDialogQueue();\n      "),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n        // Somewhere at the top level of your app\n        // Render the DialogQueue\n        import { h } from 'preact';\n        import { queue } from './myQueue';\n\n        export default function App() {\n          return (\n            <div>\n              ...\n              <DialogQueue\n                dialogs={queue.dialogs}\n                // You can also pass default options to pass to your dialogs\n                // ie, prevent all dialogs from dismissing from a click on the background scrim\n                preventOutsideDismiss\n              />\n            </div>\n          )\n        }\n        \n      "),
        React.createElement(DocsP, null, "The `alert`, `confirm`, and `prompt` functions were designed to mimic the the built-in browser methods with a couple of small difference. First, they all return a promise. The promise will always resolve successfully with the response indicating the appropriate action. `alert` the response will be `accept` for clicking the ok button, or `close`. `confirm` will resolve `true` or `false`, and `prompt` will resolve with the value entered into the input, or `null` if the closed the dialog. Second, all methods the methods accept any valid prop for `SimpleDialog`."),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n        // Somewhere else in your app\n        // Could be a view, your redux store, anywhere you want...\n        import { queue } from './myQueue';\n\n        queue.alert({\n          title: 'Hi there',\n          body: 'Whats going on?'\n        });\n\n        queue.confirm({\n          title: <b>Are you positive?</b>,\n          body: 'You have selected pizza instead icecream!',\n          acceptLabel: 'CONFIRM'\n        });\n\n        queue.prompt({\n          title: 'Whats your name?',\n          body: 'Anything will do',\n          acceptLabel: 'Submit',\n          cancelLabel: 'Skip',\n          // For prompts only, you can pass props to the input\n          inputProps: {\n            outlined: true\n          }\n        });\n      "),
        React.createElement(DocsExample, { label: "Inline Example" }, function () {
            var _a = createDialogQueue(), dialogs = _a.dialogs, alert = _a.alert, confirm = _a.confirm, prompt = _a.prompt;
            function App() {
                var _a = __read(React.useState('____________'), 2), response = _a[0], setResponse = _a[1];
                var fireAlert = function () {
                    return alert({ title: 'Hello!' }).then(function (res) { return setResponse(res); });
                };
                var fireConfirm = function () { return confirm({}).then(function (res) { return setResponse(res); }); };
                var firePrompt = function () {
                    return prompt({ inputProps: { outlined: true } }).then(function (res) {
                        return setResponse(res);
                    });
                };
                return (React.createElement("div", null,
                    React.createElement(Button, { label: "Alert", onClick: fireAlert }),
                    React.createElement(Button, { label: "Confirm", onClick: fireConfirm }),
                    React.createElement(Button, { label: "Prompt", onClick: firePrompt }),
                    React.createElement(Button, { label: "In Sequence", onClick: function () {
                            fireAlert();
                            fireConfirm();
                            firePrompt();
                        } }),
                    React.createElement("p", null,
                        "Response: ",
                        React.createElement("b", null, String(response))),
                    React.createElement(DialogQueue, { dialogs: dialogs })));
            }
            return React.createElement(App, null);
        }),
        React.createElement(DocsSubtitle, null, "Rendering through Portals"),
        React.createElement(DocsP, null, "Occasionally, you may find your dialog being cut off from being inside a container that is styled to be `overflow:hidden`. RMWC provides a `renderToPortal` prop that lets you use React's portal functionality to render the menu dropdown in a different container."),
        React.createElement(DocsP, null, "You can specify any element or selector you want, but the simplest method is to pass `true` and use RMWC's built in `Portal` component."),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n          // Somewhere at the top level of your app\n          // Render the RMWC Portal\n          // You only have to do this once\n          import { h } from 'preact';\n          import { Portal } from '@rmwc/base';\n\n          export default function App() {\n            return (\n              <div>\n                ...\n                <Portal />\n              </div>\n            )\n          }\n        "),
        React.createElement(DocsP, null, "Now you can use the `renderToPortal` prop. Below is a contrived example of a dialog being cut off due to `overflow: hidden`."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(true), 2), renderToPortal = _a[0], setRenderToPortal = _a[1];
            var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { id: "dialog-portal-example", style: {
                        transform: 'translateZ(0)',
                        height: '20rem',
                        overflow: 'hidden'
                    } },
                    React.createElement(SimpleDialog, { title: "This is a " + (renderToPortal ? 'working!' : 'broken :/'), renderToPortal: renderToPortal, body: "Use `renderToPortal` to get around `overflow:hidden` and layout issues.", open: open, onClose: function (evt) {
                            console.log(evt.detail.action);
                            setOpen(false);
                        } }),
                    React.createElement(Button, { raised: true, onClick: function () {
                            setRenderToPortal(false);
                            setOpen(true);
                        } }, "Open Broken :/"),
                    React.createElement(Button, { raised: true, onClick: function () {
                            setRenderToPortal(true);
                            setOpen(true);
                        } }, "Open in Portal"))));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Dialog', component: Dialog },
                { displayName: 'DialogTitle', component: DialogTitle },
                { displayName: 'DialogContent', component: DialogContent },
                { displayName: 'DialogActions', component: DialogActions },
                { displayName: 'DialogButton', component: DialogButton },
                { displayName: 'SimpleDialog', component: SimpleDialog }
            ] })));
}
export var galleryExample = (React.createElement("div", { role: "alertdialog", "aria-modal": "true", className: "mdc-dialog--open mdc-dialog", style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0
    } },
    React.createElement("div", { className: "mdc-dialog__container", style: { transform: 'scale(0.75)' } },
        React.createElement("div", { className: "mdc-dialog__surface" },
            React.createElement("h2", { className: "mdc-dialog__title" }, "Hello!"),
            React.createElement("div", { className: "mdc-dialog__content" }, "You have been alerted!"),
            React.createElement("div", { className: "mdc-dialog__actions" },
                React.createElement("button", { "data-mdc-dialog-action": "accept", className: "mdc-dialog__button mdc-dialog__button--default mdc-ripple-upgraded mdc-dialog__button mdc-dialog__button--default mdc-button" },
                    React.createElement("span", { className: "mdc-button__label" }, "OK"))))),
    React.createElement("div", { className: "mdc-dialog__scrim", style: { position: 'absolute' } })));
