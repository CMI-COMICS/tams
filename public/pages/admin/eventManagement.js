import Layout from '../../layouts/default.js';
import Header from '../../components/home/header.js';
import Main from '../../components/eventManagement/main.js';
import Footer from '../../components/landing/footer.js';
import Events from '../../components/eventManagement/events.js';
import timeDisplay from '../../utils/timeDisplay.js'


export default class AdminEventManagement {
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