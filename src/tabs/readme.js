import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { TabBar, Tab } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Tabs", lead: "Tabs make it easy to explore and switch between different views.", module: "@pmwc/tabs", styles: [
            '@material/tab-bar/dist/mdc.tab-bar.css',
            '@material/tab/dist/mdc.tab.css',
            '@material/tab-scroller/dist/mdc.tab-scroller.css',
            '@material/tab-indicator/dist/mdc.tab-indicator.css',
            '@material/ripple/dist/mdc.ripple.css',
            '@pmwc/icon/icon.css'
        ], docsLink: "https://material.io/develop/web/components/tabs/tab-bar/", examples: examples },
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsP, null, "Tabs can be either controlled or uncontrolled just like inputs. Use the `activeTabIndex` and `onActivate` callback for controlled components."),
        React.createElement(DocsExample, { label: "Uncontrolled" },
            React.createElement(TabBar, null,
                React.createElement(Tab, null, "Cookies"),
                React.createElement(Tab, null, "Pizza"),
                React.createElement(Tab, null, "Icecream"))),
        React.createElement(DocsExample, { label: "Controlled" }, function Example() {
            var _a = __read(React.useState(0), 2), activeTab = _a[0], setActiveTab = _a[1];
            return (React.createElement(TabBar, { activeTabIndex: activeTab, onActivate: function (evt) { return setActiveTab(evt.detail.index); } },
                React.createElement(Tab, null, "Cookies"),
                React.createElement(Tab, null, "Pizza"),
                React.createElement(Tab, null, "Icecream")));
        }),
        React.createElement(DocsSubtitle, null, "Variants"),
        React.createElement(DocsExample, { label: "Basic" },
            React.createElement(TabBar, null,
                React.createElement(Tab, null, "Cookies"),
                React.createElement(Tab, null, "Pizza"),
                React.createElement(Tab, null, "Icecream"))),
        React.createElement(DocsExample, { label: "With Icons" },
            React.createElement(TabBar, null,
                React.createElement(Tab, { icon: "star_border", label: "Cookies" }),
                React.createElement(Tab, { icon: "favorite_border", label: "Pizza" }),
                React.createElement(Tab, { icon: "mood", label: "Icecream" }))),
        React.createElement(DocsExample, { label: "Icons Only" },
            React.createElement(TabBar, null,
                React.createElement(Tab, { icon: "star_border" }),
                React.createElement(Tab, { icon: "favorite_border" }),
                React.createElement(Tab, { icon: "mood" }))),
        React.createElement(DocsExample, { label: "Stacked" },
            React.createElement(TabBar, null,
                React.createElement(Tab, { stacked: true, icon: "star_border", label: "Cookies" }),
                React.createElement(Tab, { stacked: true, icon: "favorite_border", label: "Pizza" }),
                React.createElement(Tab, { stacked: true, icon: "mood", label: "Icecream" }))),
        React.createElement(DocsExample, { label: "Restricted Indicator" },
            React.createElement(TabBar, null,
                React.createElement(Tab, { stacked: true, restrictIndicator: true, icon: "star_border", label: "Cookies" }),
                React.createElement(Tab, { stacked: true, restrictIndicator: true, icon: "favorite_border", label: "Pizza" }),
                React.createElement(Tab, { stacked: true, restrictIndicator: true, icon: "mood", label: "Icecream" }))),
        React.createElement(DocsExample, { label: "Scrollable" },
            React.createElement(TabBar, null,
                React.createElement(Tab, null, "Cookies"),
                React.createElement(Tab, null, "Pizza"),
                React.createElement(Tab, null, "Icecream"),
                React.createElement(Tab, null, "Chocolate"),
                React.createElement(Tab, null, "Fishsticks"),
                React.createElement(Tab, null, "Ratatouille"),
                React.createElement(Tab, null, "Bread"),
                React.createElement(Tab, null, "Rolls"),
                React.createElement(Tab, null, "Sushi"),
                React.createElement(Tab, null, "Cupcake"),
                React.createElement(Tab, null, "Cheesecake"))),
        React.createElement(DocsSubtitle, null, "Transitions"),
        React.createElement(DocsExample, { label: "Slide (Default)" },
            React.createElement(TabBar, null,
                React.createElement(Tab, null, "Cookies"),
                React.createElement(Tab, null, "Pizza"),
                React.createElement(Tab, null, "Icecream"))),
        React.createElement(DocsSubtitle, null, "Icons as Indicators"),
        React.createElement(DocsP, null, "`material-components-web` has some light support for using icons as indicators (it's buried in their docs but there are no working examples or demos). Support has been added to RMWC, but your mileage may vary since it will require quite a bit of manual positioning and styling. By default, the icons appear full size at the center of the tab, effectively making them overlay images."),
        React.createElement(DocsExample, { label: "Default Positioning" },
            React.createElement(TabBar, null,
                React.createElement(Tab, { iconIndicator: "star" }, "Cookies"),
                React.createElement(Tab, { iconIndicator: "favorite" }, "Pizza"),
                React.createElement(Tab, { iconIndicator: "mood" }, "Icecream"))),
        React.createElement(DocsExample, { label: "Manually Positioned" }, function IconIndicatorExample() {
            var style = {
                transformOrigin: 'center center',
                transform: 'translateY(1rem) scale(0.45)'
            };
            return (React.createElement(TabBar, null,
                React.createElement(Tab, { label: "Cookies", iconIndicator: {
                        icon: 'star',
                        style: style
                    } }),
                React.createElement(Tab, { label: "Pizza", iconIndicator: {
                        icon: 'favorite',
                        style: style
                    } }),
                React.createElement(Tab, { label: "Icecream", iconIndicator: {
                        icon: 'mood',
                        style: style
                    } })));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'TabBar', component: TabBar },
                { displayName: 'Tab', component: Tab }
            ] })));
}
export var galleryExample = (React.createElement("div", { style: { margin: '1rem' } },
    React.createElement(TabBar, null,
        React.createElement(Tab, null, "One"),
        React.createElement(Tab, null, "Two"),
        React.createElement(Tab, null, "Three"))));
