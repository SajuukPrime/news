import { Router } from './Router';

const nav = document.querySelectorAll('.router-element');
const router = new Router(nav)
let itemHash;

if (nav) {
    _.forEach(nav, item => {
        item.addEventListener('click', e => {
            itemHash = '#/node_' + item.getAttribute('data-id')
            router.setHash(itemHash)
        })
    })
}