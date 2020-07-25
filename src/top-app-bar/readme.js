import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsP, DocsSubtitle } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarNavigationIcon, TopAppBarActionItem, TopAppBarTitle, TopAppBarFixedAdjust, SimpleTopAppBar } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Top App Bar", lead: "Top App Bar acts as a container for items such as application title, navigation icon, and action items.", module: "@rmwc/top-app-bar", styles: [
            '@material/top-app-bar/dist/mdc.top-app-bar.css',
            '@material/icon-button/dist/mdc.icon-button.css',
            '@material/ripple/dist/mdc.ripple.css',
            '@rmwc/icon/icon.css'
        ], docsLink: "https://material.io/develop/web/components/top-app-bar/", examples: examples },
        React.createElement(DocsP, null, "Whats the difference between the TopAppBar and Toolbar? Toolbar is technically deprecated (although it still works just fine). TopAppBar functionality continues to be worked on by the `material-components-web` team."),
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsExample, { label: "Default", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(TopAppBar, null,
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, null,
                            React.createElement(TopAppBarTitle, null, "Default")))),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocsExample, { label: "Fully Featured", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(TopAppBar, null,
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, { alignStart: true },
                            React.createElement(TopAppBarNavigationIcon, { icon: "menu" }),
                            React.createElement(TopAppBarTitle, null, "All Features")),
                        React.createElement(TopAppBarSection, { alignEnd: true },
                            React.createElement(TopAppBarActionItem, { icon: "favorite" }),
                            React.createElement(TopAppBarActionItem, { icon: "star" }),
                            React.createElement(TopAppBarActionItem, { icon: "mood" }))),
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, { alignStart: true },
                            React.createElement(TopAppBarTitle, null, "Another Row")))),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocsSubtitle, null, "Simplified Usage"),
        React.createElement(DocsP, null, "You can use the `SimpleTopAppBar` component which contains a default template already laid out for you. Specify any actions you want as an array of props"),
        React.createElement(DocsExample, { label: "Simple", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(SimpleTopAppBar, { title: "test", navigationIcon: true, onNav: function () { return console.log('Navigate'); }, actionItems: [
                        {
                            icon: 'file_download',
                            onClick: function () { return console.log('Do Something'); }
                        },
                        { icon: 'print', onClick: function () { return console.log('Do Something'); } },
                        { icon: 'bookmark', onClick: function () { return console.log('Do Something'); } }
                    ] }),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocsSubtitle, null, "Variants"),
        React.createElement(DocsExample, { label: "Fixed", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(TopAppBar, { fixed: true },
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, null,
                            React.createElement(TopAppBarTitle, null, "Fixed")))),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocsExample, { label: "Dense", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(TopAppBar, { dense: true },
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, null,
                            React.createElement(TopAppBarTitle, null, "Dense")))),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocsExample, { label: "Short", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(TopAppBar, { short: true },
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, null,
                            React.createElement(TopAppBarNavigationIcon, { icon: "menu" }),
                            React.createElement(TopAppBarTitle, null, "Short")),
                        React.createElement(TopAppBarSection, { alignEnd: true },
                            React.createElement(TopAppBarActionItem, { icon: "favorite" })))),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocsExample, { label: "Prominent", iframe: true },
            React.createElement(React.Fragment, null,
                React.createElement(TopAppBar, { prominent: true },
                    React.createElement(TopAppBarRow, null,
                        React.createElement(TopAppBarSection, null,
                            React.createElement(TopAppBarTitle, null, "Prominent")))),
                React.createElement(TopAppBarFixedAdjust, null),
                React.createElement("div", { style: { height: '100rem', padding: '1rem' } }, "Scroll Me"))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'TopAppBar', component: TopAppBar },
                { displayName: 'TopAppBarRow', component: TopAppBarRow },
                { displayName: 'TopAppBarSection', component: TopAppBarSection },
                { displayName: 'TopAppBarTitle', component: TopAppBarTitle },
                {
                    displayName: 'TopAppBarNavigationIcon',
                    component: TopAppBarNavigationIcon
                },
                {
                    displayName: 'TopAppBarActionItem',
                    component: TopAppBarActionItem
                },
                {
                    displayName: 'TopAppBarFixedAdjust',
                    component: TopAppBarFixedAdjust
                },
                { displayName: 'SimpleTopAppBar', component: SimpleTopAppBar }
            ] })));
}
export var galleryExample = (React.createElement(React.Fragment, null,
    React.createElement(SimpleTopAppBar, { style: { position: 'static', top: 0, transform: 'scale(0.9)' }, title: "App Bar", navigationIcon: { onClick: function () { return console.log('Navigate'); } }, actionItems: [
            {
                icon: 'file_download',
                onClick: function () { return console.log('Do Something'); }
            },
            {
                icon: 'print',
                onClick: function () { return console.log('Do Something'); }
            }
        ] })));
