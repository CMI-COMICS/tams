import MainOnlyLayout from "../../layouts/mainOnly";
import Main from '../../components/login/admin/main';

export default class AdminLogin {
    constructor(root) {
        this.root = root;
    }

    render() {
        const { main } = MainOnlyLayout(this.root);
        
        Main(main);
    }
}