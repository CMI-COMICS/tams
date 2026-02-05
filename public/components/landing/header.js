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
        <div class="${styles['btn-container']}">
            <button class="action-btn" data-role="user">Sign In</button>
            <button class="action-btn" data-role="admin">Admin</button>
        </div>
    `;

    root.className = styles['header'];
}