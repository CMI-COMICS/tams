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
        <div class="${styles['time-btn-container']}">
            <h1 id="time-container" class="${styles['time-container']}"></h1>
            <button id="logout-btn">Logout</button>
        </div>
    `;

    root.className = styles['header'];
}