import { h } from 'preact';
import * as ReactDOM from 'react-dom';
import './styles';
import { Router } from 'react-router-dom';
import { history } from './common/history';
import ReactGA from 'react-ga';
import { AppContainer } from 'react-hot-loader';
import App from './views/app';
import { PMWCProvider } from '@pmwc/provider';
var renderApp = function (Component) {
    ReactDOM.render(React.createElement(PMWCProvider, null,
        React.createElement(AppContainer, null,
            React.createElement(Router, { history: history },
                React.createElement(Component, { location: window.location.href })))), document.getElementById('root'));
};
// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept(['./views/app'], function () { return renderApp(App); });
}
var initAnalytics = function () {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    var doPageView = function () {
        return ReactGA.pageview(window.location.pathname + window.location.search);
    };
    history.listen(function () { return doPageView(); });
    doPageView();
};
var init = function () {
    renderApp(App);
    initAnalytics();
};
export default init;
