import Layout from '../../layouts/default.js';
import Header from '../../components/home/header.js';
import Main from '../../components/home/admin/main.js';
import Footer from '../../components/landing/footer.js';
import Events from '../../components/home/admin/events.js';
import timeDisplay from '../../utils/timeDisplay.js'


export default class AdminHome {
    constructor(root) {
        this.root = root;
    }

    render() {
        const { header, main, footer } = Layout(this.root);

        Header(header);
        Main(main);
        Footer(footer);
        Events();
        timeDisplay();
    }
}