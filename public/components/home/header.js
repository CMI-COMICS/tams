import styles from './component.module.css';
import COMICSLOGO from '../../icons/comics_logo.png';

export default function Header(root) {
    root.innerHTML = `
        <div class="${styles['logo-txt-container']}">
            <img 
                src="${COMICSLOGO}"
                alt="Department Logo"
                class="${styles['logo-image']}"
            >
            <div class="${styles['txt-container']}">
                <p>TAMS</p>
                <p>CMI Computer Science Society</p>
            </div>
        </div>
        <h1 id="time-container" class="${styles['time-container']}"></h1>
    `;

    root.className = styles['header'];
}