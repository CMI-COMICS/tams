import MainOnlyLayout from "../layouts/mainOnly";
import Main from "../components/login/main";

export default function Login() {
    const { main } = MainOnlyLayout(this.root);

    Main(main);
}