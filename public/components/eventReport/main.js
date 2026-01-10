import styles from './component.module.css';
import rightContent from './rightContent';
import sideHeader from "../home/admin/sideHeader";
import Modal from '../modal';

export default function Main(root) {
    root.innerHTML = `
        ${sideHeader()}
        ${rightContent()}
        ${Modal('report')}
    `;

    root.className = styles['main'];
}