import { createBrowserHistory } from 'history';
export var history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});
