import styles from './component.module.css';
import rightContent from './rightContent';
import sideHeader from "./sideHeader";

export default function Main(root) {
    root.innerHTML = `
        ${sideHeader()}
        ${rightContent()}
    `;

    root.className = styles['main'];
}