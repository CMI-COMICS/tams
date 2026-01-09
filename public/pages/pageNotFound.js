import MainOnlyLayout from '../layouts/mainOnly.js';
import Main from '../components/pageNotFound/main.js';
import Events from '../components/pageNotFound/event.js';

export default class PageNotFound {
    constructor(root) {
        this.root = root;
    }

    render() {
        const { main } = MainOnlyLayout(this.root);

        Main(main);
        Events(this.root);
    }
}