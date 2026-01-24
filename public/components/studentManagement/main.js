import styles from './component.module.css';
import rightContent from './rightContent.js';
import sideHeader from "../home/admin/sideHeader.js";
import Modal from '../modal.js';

export default function Main(root) {
    root.innerHTML = `
        ${sideHeader()}
        ${rightContent()}
        ${Modal('student')}
    `;

    root.className = styles['main'];
}