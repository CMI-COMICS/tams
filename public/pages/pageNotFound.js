import MainOnlyLayout from '../layouts/mainOnly.js';
import Main from '../components/pageNotFound/main.js';

export default function PageNotFound() {
    const { main } = MainOnlyLayout(this.root);

    Main(main);
}