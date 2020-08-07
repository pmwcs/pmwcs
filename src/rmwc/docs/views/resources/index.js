import { h } from 'preact';
import { Card, CardPrimaryAction, CardMedia, CardActionButton, CardActions, CardActionButtons } from '@pmwc/card';
import { Icon } from '@pmwc/icon';
import { Typography } from '@pmwc/typography';
import styles from './resources.module.css';
var RESOURCES = [
    {
        name: 'Visit Github',
        description: 'Browse the code, the issues, the changelog.',
        img: 'images/backgrounds/mb-bg-fb-02.png',
        url: 'https://github.com/jamesmfriedman/rmwc',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" }))),
        actions: [
            { label: 'Visit Github', url: 'https://github.com/jamesmfriedman/rmwc' }
        ]
    },
    {
        name: 'Code Sandbox',
        description: 'Play around with RMWC components in both Javascript and Typescript. Useful for kicking the tires, or reproducing issues.',
        url: 'https://codesandbox.io/s/rmwc-sandbox-o0s0d',
        img: 'images/backgrounds/mb-bg-fb-09.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" }))),
        actions: [
            {
                label: 'Javascript',
                url: 'https://codesandbox.io/s/rmwc-sandbox-o0s0d'
            },
            {
                label: 'Typescript',
                url: 'https://codesandbox.io/s/rmwc-typescript-sandbox-y7516'
            }
        ]
    },
    {
        name: 'Chat on Discord',
        description: 'Join the conversation. Get quicker responses to questions and feedback.',
        url: 'https://discord.gg/4BSUxCW',
        img: 'images/backgrounds/mb-bg-fb-12.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" }))),
        actions: [{ label: 'Start Chatting', url: 'https://discord.gg/4BSUxCW' }]
    },
    {
        name: 'Donate on OpenCollective',
        description: 'This library is built with Typescript, sweat, and thousands of hours of hard work. Help support Open Source Software!',
        url: 'https://opencollective.com/rmwc',
        img: 'images/backgrounds/mb-bg-fb-07.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z" }))),
        actions: [
            {
                label: 'Donate',
                url: 'https://opencollective.com/rmwc'
            }
        ]
    },
    {
        name: 'Share',
        description: "Don't keep letting your friends build software with bad UI libraries. Spread the word about RMWC.",
        url: "https://twitter.com/intent/tweet?text=" + encodeURIComponent('You should definitely be using RMWC for your next project! https://rmwc.io'),
        img: 'images/backgrounds/mb-bg-fb-15.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" }))),
        actions: [
            {
                label: 'Tweet',
                url: "https://twitter.com/intent/tweet?text=" + encodeURIComponent('You should definitely be using RMWC for your next project! https://rmwc.io')
            },
            {
                label: 'Star on Github',
                url: "https://github.com/jamesmfriedman/rmwc"
            }
        ]
    },
    {
        name: 'Updates',
        description: 'Read the change blog and also review auto generated changes between releases.',
        url: 'https://opencollective.com/rmwc/updates',
        img: 'images/backgrounds/mb-bg-fb-22.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" }))),
        actions: [
            { label: 'Blog', url: 'https://opencollective.com/rmwc/updates' },
            {
                label: 'Changelog',
                url: 'https://github.com/jamesmfriedman/rmwc/blob/master/CHANGELOG.md'
            }
        ]
    },
    {
        name: 'Open an Issue',
        description: 'Experiencing a problem or have a feature request? File an issue and let us know how we can help.',
        url: 'https://github.com/jamesmfriedman/rmwc/issues/new',
        img: 'images/backgrounds/mb-bg-fb-27.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" }))),
        actions: [
            {
                label: 'New Issue',
                url: 'https://github.com/jamesmfriedman/rmwc/issues/new'
            }
        ]
    },
    {
        name: 'Contribute',
        description: "This project accepts Pull Requests from the community. Don't be scared, getting started is as easy as running `npm i`.",
        url: 'https://github.com/jamesmfriedman/rmwc/blob/master/CONTRIBUTING.md',
        img: 'images/backgrounds/mb-bg-fb-30.png',
        icon: (React.createElement("svg", { viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "inherit", d: "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" }))),
        actions: [
            {
                label: 'Read Guidelines',
                url: 'https://github.com/jamesmfriedman/rmwc/blob/master/CONTRIBUTING.md'
            }
        ]
    }
];
export default function Resources() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Resources"),
        React.createElement("div", { className: styles.cardGrid },
            React.createElement("div", { className: styles.cardGridInner }, RESOURCES.map(function (r) { return (React.createElement(ResourceCard, { key: r.name, resource: r })); })))));
}
function ResourceCard(_a) {
    var resource = _a.resource;
    return (React.createElement(Card, { className: styles.card },
        React.createElement(CardPrimaryAction, { tag: "a", href: resource.url, target: "_blank", style: { flex: 1 } },
            React.createElement(CardMedia, { className: styles.cardMedia, sixteenByNine: true, style: {
                    backgroundImage: "url(" + resource.img + ")"
                } },
                React.createElement(Icon, { icon: { icon: resource.icon }, className: styles.icon })),
            React.createElement("div", { style: { padding: '0 1rem 1rem 1rem' } },
                React.createElement(Typography, { use: "headline6", tag: "h2" }, resource.name),
                React.createElement(Typography, { use: "body2", tag: "div", theme: "textSecondaryOnBackground" }, resource.description))),
        React.createElement(CardActions, null,
            React.createElement(CardActionButtons, null, resource.actions.map(function (a) { return (React.createElement(CardActionButton, { key: a.label, tag: "a", href: a.url, label: a.label, target: "_blank" })); })))));
}
