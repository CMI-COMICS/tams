import MainOnlyLayout from "../../layouts/mainOnly";
import Main from '../../components/login/user/main';

export default class UserLogin {
    constructor(root) {
        this.root = root;
    }

    render() {
        const { main } = MainOnlyLayout(this.root);
        
        Main(main);
    }
}