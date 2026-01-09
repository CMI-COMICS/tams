import Layout from '../layouts/default.js';
import Header from '../components/landing/header.js';
import Main from '../components/landing/main.js';
import Footer from '../components/landing/footer.js';
import Events from '../components/landing/events.js';

// export default function Landing(root) {
//     const { header, main, footer } = Layout(root);

//     Header(header);
//     Main(main);
//     Footer(footer);

//     Events();
// }

export default class Landing {
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