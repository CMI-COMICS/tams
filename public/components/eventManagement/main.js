import styles from './component.module.css';
import rightContent from './rightContent';
import sideHeader from "../home/admin/sideHeader";

export default function Main(root) {
    root.innerHTML = `
        ${sideHeader()}
    `;

    root.className = styles['main'];
}