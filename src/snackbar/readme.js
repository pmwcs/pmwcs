import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Snackbar, SnackbarAction, createSnackbarQueue, SnackbarQueue } from './';
import { Button } from '@rmwc/button';
export default function () {
    return (React.createElement(Docs, { title: "Snackbars", lead: "Snackbars provide brief feedback about an operation through a message at the bottom of the screen.", module: "@rmwc/snackbar", styles: [
            '@material/snackbar/dist/mdc.snackbar.css',
            '@material/button/dist/mdc.button.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/snackbars/", examples: examples },
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsP, null, "You can render a snackbar in your UI and control its open state."),
        React.createElement(DocsExample, { label: "Default" }, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Snackbar, { open: open, onClose: function (evt) { return setOpen(false); }, message: "This is a new message", dismissesOnAction: true, action: React.createElement(SnackbarAction, { label: "Dismiss", onClick: function () { return console.log('Click Me'); } }) }),
                React.createElement(Button, { raised: true, label: "Show snackbar", onClick: function (evt) { return setOpen(!open); } })));
        }),
        React.createElement(DocsExample, { label: "Start Aligned" }, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Snackbar, { open: open, onClose: function (evt) { return setOpen(false); }, message: "Start aligned, open until dismissed", stacked: true, dismissesOnAction: true, action: [
                        React.createElement(SnackbarAction, { label: "Yeah!" }),
                        React.createElement(SnackbarAction, { label: "No..." })
                    ], leading: true, timeout: -1 }),
                React.createElement(Button, { raised: true, label: "Show start-aligned", onClick: function (evt) { return setOpen(!open); } })));
        }),
        React.createElement(DocsSubtitle, null, "Usage with SnackbarQueue"),
        React.createElement(DocsP, null, "While rendering the Snackbar inline works for simple cases, you'll likely have a notification system, or want to send notifications from anywhere in your app. The `SnackbarQueue` exists as a convenient interface for handling these cases and rendering the snackbar messages for you. If you've used the `DialogQueue`, the `SnackbarQueue` is very similar."),
        React.createElement(DocsP, null, "Setup is nice and easy, create a queue object you can pass around in your code base, pass the queues `messages` to the `SnackbarQueue` component, and then use the `notify` function to send notifications."),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n        // Create a file that exports your queue\n        // myQueue.js\n        import { createSnackbarQueue } from '@rmwc/snackbar';\n\n        export const queue = createSnackbarQueue();\n      "),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n        // Somewhere at the top level of your app\n        // Render the SnackbarQueue\n        import { h } from 'preact';\n        import { queue } from './myQueue';\n\n        export default function App() {\n          return (\n            <div>\n              ...\n              <SnackbarQueue\n                messages={queue.messages}\n                // You can also pass default options to pass to your notifications\n                // ie, make them all leading, stacked, etc\n                leading\n                stacked\n              />\n            </div>\n          )\n        }\n        \n      "),
        React.createElement(DocsP, null, "The `notify` function was designed to mimic the the built-in browser Notifications api and can accept most of the relevant options (icon, image, title, body, actions, ,etc). It also can accept any of the Snackbar props. Just import your queue, and call the notify method."),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n        // Somewhere else in your app\n        // Could be a view, your redux store, anywhere you want...\n        import { queue } from './myQueue';\n\n        // Simple example\n        queue.notify({\n          title: 'Hi there'\n        });\n\n        // With some features\n        queue.notify({\n          title: <b>Warning</b>,\n          body: 'You have selected pizza instead icecream!',\n          icon: 'warning',\n          actions: [\n            {\n              // NotificationAction api format\n              title: 'Fix It!',\n              icon: 'close',\n              action: 'fixit' // action will be available as evt.detail.reason in the onClose event\n            },\n            {\n              // OR SnackbarActionProps format\n              label: 'Continue...',\n              icon: 'check',\n              onClick: () => {}\n            },\n          ]\n        });\n      "),
        React.createElement(DocsExample, { label: "Inline Example" }, function () {
            var _a = createSnackbarQueue(), messages = _a.messages, notify = _a.notify;
            function App() {
                return (React.createElement("div", null,
                    React.createElement(Button, { label: "Notify", onClick: function () {
                            return notify({
                                title: React.createElement("b", null, "Success"),
                                body: 'You have selected pizza!',
                                dismissesOnAction: true,
                                icon: 'check',
                                actions: [
                                    {
                                        title: 'Dismiss'
                                    }
                                ]
                            });
                        } }),
                    React.createElement(SnackbarQueue, { messages: messages })));
            }
            return React.createElement(App, null);
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Snackbar', component: Snackbar },
                { displayName: 'SnackbarAction', component: SnackbarAction }
            ] })));
}
export var galleryExample = (React.createElement(Snackbar, { open: true, timeout: 999999999, message: "This is a new message", style: { transform: 'scale(0.75)', position: 'static' }, action: React.createElement(SnackbarAction, { label: "Dismiss", onClick: function () { return console.log('Click Me'); } }) }));
