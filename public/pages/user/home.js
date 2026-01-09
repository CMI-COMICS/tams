import Layout from '../../layouts/default.js';
import Header from '../../components/home/header.js';
import Main from '../../components/home/user/main.js';
import Footer from '../../components/landing/footer.js';
import Events from '../../components/home/events.js';

export default class UserHome {
    constructor(root) {
        this.root = root;
    }

    render() {
        const { header, main, footer } = Layout(this.root);

        Header(header);
        Main(main);
        Footer(footer);
        Events();
    }
}