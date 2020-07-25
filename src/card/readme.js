import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Card, CardPrimaryAction, CardMedia, CardActionButton, CardActionIcon, CardActions, CardActionButtons, CardActionIcons, CardMediaContent } from '.';
import { Typography } from '../typography';
import { ListDivider } from '../list';
export default function () {
    return (React.createElement(Docs, { title: "Cards", lead: "Cards contain content and actions about a single subject.", module: "@rmwc/card", styles: [
            '@material/card/dist/mdc.card.css',
            '@material/button/dist/mdc.button.css',
            '@material/icon-button/dist/mdc.icon-button.css'
        ], docsLink: "https://material.io/develop/web/components/cards/", examples: examples },
        React.createElement(DocsSubtitle, null, "Fully Featured Example"),
        React.createElement(DocsExample, null,
            React.createElement(Card, { style: { width: '21rem' } },
                React.createElement(CardPrimaryAction, null,
                    React.createElement(CardMedia, { sixteenByNine: true, style: {
                            backgroundImage: 'url(images/backgrounds/mb-bg-fb-16.png)'
                        } }),
                    React.createElement("div", { style: { padding: '0 1rem 1rem 1rem' } },
                        React.createElement(Typography, { use: "headline6", tag: "h2" }, "Our Changing Planet"),
                        React.createElement(Typography, { use: "subtitle2", tag: "h3", theme: "textSecondaryOnBackground", style: { marginTop: '-1rem' } }, "by Kurt Wagner"),
                        React.createElement(Typography, { use: "body1", tag: "div", theme: "textSecondaryOnBackground" }, "Visit ten places on our planet that are undergoing the biggest changes today."))),
                React.createElement(CardActions, null,
                    React.createElement(CardActionButtons, null,
                        React.createElement(CardActionButton, null, "Read"),
                        React.createElement(CardActionButton, null, "Bookmark")),
                    React.createElement(CardActionIcons, null,
                        React.createElement(CardActionIcon, { onIcon: "favorite", icon: "favorite_border" }),
                        React.createElement(CardActionIcon, { icon: "share" }),
                        React.createElement(CardActionIcon, { icon: "more_vert" }))))),
        React.createElement(DocsSubtitle, null, "Article Preview Example"),
        React.createElement(DocsExample, null,
            React.createElement(Card, { outlined: true, style: { width: '21rem' } },
                React.createElement(Typography, { use: "subtitle1", tag: "div", style: { padding: '0.5rem 1rem' }, theme: "textSecondaryOnBackground" }, "Headlines"),
                React.createElement(ListDivider, null),
                React.createElement(CardPrimaryAction, null,
                    React.createElement("div", { style: { padding: '1rem' } },
                        React.createElement(Typography, { use: "headline5", tag: "div" }, "Copper on the rise"),
                        React.createElement(Typography, { use: "body1", tag: "p", theme: "textSecondaryOnBackground" }, "Copper price soars amid global market optimism and increased demand."))),
                React.createElement(ListDivider, null),
                React.createElement(CardPrimaryAction, null,
                    React.createElement("div", { style: { padding: '1rem' } },
                        React.createElement(Typography, { use: "headline5", tag: "div" }, "U.S. tech startups rebound"),
                        React.createElement(Typography, { use: "body1", tag: "p", theme: "textSecondaryOnBackground" }, "Favorable business conditions have allowed startups to secure more fundraising deals compared to last year."))),
                React.createElement(ListDivider, null),
                React.createElement(CardPrimaryAction, null,
                    React.createElement("div", { style: { padding: '1rem' } },
                        React.createElement(Typography, { use: "headline5", tag: "div" }, "Asia's clean energy ambitions"),
                        React.createElement(Typography, { use: "body1", tag: "p", theme: "textSecondaryOnBackground" }, "China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia."))),
                React.createElement(ListDivider, null),
                React.createElement(CardActions, { fullBleed: true },
                    React.createElement(CardActionButton, { label: "All Business Headlines", trailingIcon: "arrow_forward" })))),
        React.createElement(DocsSubtitle, null, "Mini Card Example"),
        React.createElement(DocsExample, null,
            React.createElement(Card, { style: { width: '12.5rem' } },
                React.createElement(CardPrimaryAction, null,
                    React.createElement(CardMedia, { square: true, style: {
                            backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
                        } },
                        React.createElement(CardMediaContent, null,
                            React.createElement(Typography, { use: "subtitle2", tag: "div", theme: "textPrimaryOnDark", style: {
                                    padding: '0.5rem 1rem',
                                    backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    position: 'absolute'
                                } }, "Vacation Photos")))),
                React.createElement(CardActions, null,
                    React.createElement(CardActionIcons, null,
                        React.createElement(CardActionIcon, { onIcon: "favorite", icon: "favorite_border" }),
                        React.createElement(CardActionIcon, { icon: "bookmark_border" }),
                        React.createElement(CardActionIcon, { icon: "share" }))))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Card', component: Card },
                { displayName: 'CardPrimaryAction', component: CardPrimaryAction },
                { displayName: 'CardMedia', component: CardMedia },
                { displayName: 'CardMediaContent', component: CardMediaContent },
                { displayName: 'CardActions', component: CardActions },
                { displayName: 'CardActionButtons', component: CardActionButtons },
                { displayName: 'CardActionIcons', component: CardActionIcons },
                { displayName: 'CardActionIcon', component: CardActionIcon },
                { displayName: 'CardActionButton', component: CardActionButton }
            ] })));
}
export var galleryExample = (React.createElement(Card, { style: { width: '12.5rem', transform: 'scale(0.5)' } },
    React.createElement(CardPrimaryAction, null,
        React.createElement(CardMedia, { square: true, style: {
                backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
            } },
            React.createElement(CardMediaContent, null,
                React.createElement(Typography, { use: "subtitle2", tag: "div", theme: "textPrimaryOnDark", style: {
                        padding: '0.5rem 1rem',
                        backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        position: 'absolute'
                    } }, "Vacation Photos")))),
    React.createElement(CardActions, null,
        React.createElement(CardActionIcons, null,
            React.createElement(CardActionIcon, { onIcon: "favorite", icon: "favorite_border" }),
            React.createElement(CardActionIcon, { icon: "bookmark_border" }),
            React.createElement(CardActionIcon, { icon: "share" })))));
