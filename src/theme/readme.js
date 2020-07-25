import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsP, DocsSubtitle } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Theme, ThemeProvider } from '.';
import { Button } from '../button';
import { Radio } from '../radio';
import { Checkbox } from '../checkbox';
export default function () {
    return (React.createElement(Docs, { title: "Theming", lead: "MDC Theme is a foundational module that themes MDC Web components.", module: "@rmwc/theme", styles: ['@material/theme/dist/mdc.theme.css', '@rmwc/theme/theme.css'], docsLink: "https://material.io/develop/web/components/theme/", examples: examples },
        React.createElement(DocsSubtitle, null, "Theme Options"),
        React.createElement(DocsP, null, "The Theme module fully embraces using CSS variables for runtime theming. This allows for some really powerful usecases like a built in dark mode, custom palettes for your clients, or dynamic configuration for accessibility."),
        React.createElement(DocsP, null, "Support for theming inside of `material-components-web` is not without issue, so RMWC maintains a theme fixes file to correct any anomalies for you. Please make sure you include both!"),
        React.createElement(DocsP, null, "**Important** You should include the theme style sheets BEFORE any of your other styles."),
        React.createElement(DocsExample, null,
            React.createElement(React.Fragment, null,
                React.createElement("div", { style: { backgroundColor: '#ddd' } }, [
                    'primary',
                    'secondary',
                    'error',
                    'background',
                    'surface',
                    'primaryBg',
                    'secondaryBg',
                    'textPrimaryOnBackground',
                    'textSecondaryOnBackground',
                    'textHintOnBackground',
                    'textDisabledOnBackground',
                    'textIconOnBackground',
                    'textPrimaryOnLight',
                    'textSecondaryOnLight',
                    'textHintOnLight',
                    'textDisabledOnLight',
                    'textIconOnLight'
                ].map(function (theme, i) { return (
                // @ts-ignore
                React.createElement(Theme, { use: theme, key: i }, theme)); })),
                React.createElement("div", { style: { backgroundColor: '#333' } }, [
                    'onPrimary',
                    'onSecondary',
                    'onError',
                    'textPrimaryOnDark',
                    'textSecondaryOnDark',
                    'textHintOnDark',
                    'textDisabledOnDark',
                    'textIconOnDark'
                ].map(function (theme, i) { return (
                // @ts-ignore
                React.createElement(Theme, { use: theme, key: i }, theme)); })))),
        React.createElement(DocsSubtitle, null, "ThemeProvider"),
        React.createElement(DocsP, null, "The `ThemeProvider` is an optional component that allows you to specify theme colors and settings for all of its subtree. This is useful to use once at the top of your app, or in parts of your app where the styles or color scheme differ."),
        React.createElement(DocsP, null, "You don't have to pass in all options. The `ThemeProvider` will automatically adjust some of the values like `onSurface` white or black text depending on colors contrast ratio."),
        React.createElement(DocsP, null, "Theming in `material-components-web` isn't perfect, but a few basic options will get you most of the way. Try using the ThemePicker at the top and selecting \"Shrine\". You'll see that most things are colored appropriately, but the defaults provided for things like Buttons and tabs still have to have their colors overridden."),
        React.createElement(DocsExample, { label: "Defaults" },
            React.createElement(React.Fragment, null,
                React.createElement(Button, { raised: true }, "Cookies"),
                React.createElement(Checkbox, { label: "Pizza", defaultChecked: true }),
                React.createElement(Radio, { label: "Icecream", defaultChecked: true }))),
        React.createElement(DocsExample, { label: "With Provider" },
            React.createElement(ThemeProvider, { options: {
                    primary: 'red',
                    secondary: 'blue'
                } },
                React.createElement(Button, { raised: true }, "Cookies"),
                React.createElement(Checkbox, { label: "Pizza", defaultChecked: true }),
                React.createElement(Radio, { label: "Icecream", defaultChecked: true }))),
        React.createElement(DocsExample, { label: "More Options" },
            React.createElement(ThemeProvider, { options: {
                    primary: 'lightpink',
                    secondary: 'black',
                    onPrimary: '#000',
                    textPrimaryOnBackground: 'black'
                } },
                React.createElement(Button, { raised: true }, "Cookies"),
                React.createElement(Checkbox, { label: "Pizza", defaultChecked: true }),
                React.createElement(Radio, { label: "Icecream", defaultChecked: true }))),
        React.createElement(DocsSubtitle, null, "Theme Component"),
        React.createElement(DocsP, null, "The Theme component allows you to apply theme colors to RMWC components, or components of your own. Almost every component in RMWC has a `theme` prop that you can use that takes the same options as the `Theme` component's `use` prop."),
        React.createElement(DocsExample, { label: "Custom" },
            React.createElement(Theme, { use: ['primaryBg', 'onPrimary'], wrap: true },
                React.createElement("div", { style: { width: '4rem', height: '4rem', padding: '1rem' } }, "Cookies"))),
        React.createElement(DocsExample, { label: "Theme Prop" },
            React.createElement(React.Fragment, null,
                React.createElement(Theme, { use: ['secondaryBg', 'onSecondary'], wrap: true },
                    React.createElement(Button, null, "Pizza")),
                React.createElement(Button, { theme: ['secondaryBg', 'onSecondary'] }, "Pizza"))),
        React.createElement(DocsExample, { label: "Typography" },
            React.createElement(React.Fragment, null,
                React.createElement("h3", null,
                    "I ",
                    React.createElement(Theme, { use: "primary" }, "Want"),
                    ' ',
                    React.createElement(Theme, { use: "secondary" }, "Icecream")))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'ThemeProvider', component: ThemeProvider },
                { displayName: 'Theme', component: Theme }
            ] })));
}
export var galleryExample = (React.createElement(React.Fragment, null,
    React.createElement(Theme, { style: {
            margin: '0.5rem',
            borderRadius: '6px',
            height: '3rem',
            width: '3rem',
            display: 'inline-block'
        }, use: "primaryBg" }),
    React.createElement(Theme, { style: {
            margin: '0.5rem',
            borderRadius: '6px',
            height: '3rem',
            width: '3rem',
            display: 'inline-block'
        }, use: "secondaryBg" })));
