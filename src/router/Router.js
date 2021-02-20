import { LoadSubList } from '../modules/LoadSubList'

class Router {
    constructor(routerElements) {
        this.routerElements = routerElements;
        window.addEventListener('hashchange', this.onHashChange);
    }

    getBaseUrl() {
        return `${location.protocol}//${location.host}${location.pathname}`;
    }

    getHash() {
        return location.hash;
    }

    setHash(newHashValue) {
        if (newHashValue == location.hash) {
            history.replaceState(newHashValue, newHashValue);
            return;
        }
        location.hash = newHashValue;
    }

    onHashChange = () => {
        const render = new LoadSubList(this.getHash())
        render.init();
    }
}


export { Router }