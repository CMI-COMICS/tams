import Layout from '../../layouts/default.js';
import Header from '../../components/home/header.js';
import Main from '../../components/eventReport/main.js';
import Footer from '../../components/landing/footer.js';
import Events from '../../components/eventReport/events.js';
import timeDisplay from '../../utils/timeDisplay.js'


export default class AdminReport {
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