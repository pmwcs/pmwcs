import { h } from 'preact';
import { Link } from 'react-router-dom';
import { version } from '../../../package.json';
import { Typography } from '@rmwc/typography';
import { Card, CardMedia } from '@rmwc/card';
import { Grid, GridCell } from '@rmwc/grid';
import { Theme } from '@rmwc/theme';
import { Icon } from '@rmwc/icon';
import styles from './home.module.css';
import { Button } from '@rmwc/button';
import { galleryContent } from '../../common/menu-content';
var checklist = [
    "Uses Google's official material-components-web library",
    'Includes additional addon components not offered by Google.',
    'Works in React from 16.8.x and up',
    'First class Typescript Support',
    'Server side rendering support',
    'Individually packaged and released components'
];
function Example(_a) {
    var ex = _a.ex, name = _a.name, url = _a.url;
    return (React.createElement(Link, { to: url, className: styles.example, onClick: function () { return window.scrollTo(0, 0); } },
        React.createElement("div", { className: styles.exampleInner },
            React.createElement("div", null, ex)),
        React.createElement("div", { className: styles.exampleName },
            React.createElement(Typography, { use: "headline6" }, name))));
}
export var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: styles.header },
            React.createElement("div", { className: "container" },
                React.createElement(Theme, { use: ['onPrimary'] },
                    React.createElement("div", { className: styles.intro },
                        React.createElement(Typography, { use: "headline3", tag: "h1", className: styles.headline1 }, "React Material Web Components"),
                        React.createElement(Typography, { use: "headline6", tag: "h2", className: styles.headline2 }, "A React UI Kit built on Google's official Material Components Web library"),
                        React.createElement(Link, { to: "/installation" },
                            React.createElement(Button, { theme: ['secondaryBg', 'onSecondary'], raised: true }, "Get Started")),
                        React.createElement(Typography, { tag: "h3", use: "caption" },
                            "v",
                            version),
                        React.createElement("div", { className: styles.checklist }, checklist.map(function (c) { return (React.createElement("div", { key: c },
                            React.createElement(Icon, { theme: "secondary", icon: "check" }),
                            " ",
                            React.createElement("div", null, c))); })))),
                React.createElement(Grid, { className: styles.featureGrid },
                    React.createElement(GridCell, { span: 4 },
                        React.createElement(Link, { to: "/installation" },
                            React.createElement(Card, { theme: ['primaryBg', 'onPrimary'] },
                                React.createElement("div", { style: { padding: '1rem' } },
                                    React.createElement(Typography, { use: "headline6", tag: "div" }, "Simple to Use"),
                                    React.createElement(Typography, { tag: "div", use: "body1" }, "Get started in 5 minutes.")),
                                React.createElement(CardMedia, { style: {
                                        backgroundSize: 'fill',
                                        backgroundImage: 'url(images/backgrounds/home-1.png)',
                                        minHeight: '5rem',
                                        flex: 1
                                    } })))),
                    React.createElement(GridCell, { span: 4 },
                        React.createElement(Card, { theme: "background", tag: "a", href: "https://material.io/components/web/" },
                            React.createElement("div", { style: { padding: '1rem' } },
                                React.createElement(Typography, { use: "headline6", tag: "div" }, "Material Accuracy"),
                                React.createElement(Typography, { tag: "div", use: "body1" }, "Uses Google's official Material Components Web library.")),
                            React.createElement(CardMedia, { style: {
                                    backgroundSize: 'cover',
                                    backgroundImage: 'url(images/backgrounds/home-2.png)',
                                    minHeight: '5rem',
                                    flex: 1
                                } }))),
                    React.createElement(GridCell, { span: 4 },
                        React.createElement(Link, { to: "/styling-theming" },
                            React.createElement(Card, { style: { backgroundColor: '#212121' }, theme: "textPrimaryOnDark" },
                                React.createElement("div", { style: { padding: '1rem' } },
                                    React.createElement(Typography, { use: "headline6", tag: "div" }, "Easy to Customize"),
                                    React.createElement(Typography, { tag: "div", use: "body1" }, "Integrate with a variety of CSS workflows.")),
                                React.createElement(CardMedia, { style: {
                                        backgroundSize: 'cover',
                                        backgroundImage: 'url(images/backgrounds/home-3.png)',
                                        minHeight: '5rem',
                                        flex: 1
                                    } }))))))),
        React.createElement("div", { className: styles.examples }, galleryContent.map(function (ex) {
            return (React.createElement(Example, { key: ex.label, name: ex.label, ex: ex.gallery, url: ex.url }));
        }))));
};
export default Home;
