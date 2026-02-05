import styles from './component.module.css'

export default function Footer(root) {
    root.innerHTML = `
        <div class="${styles['left-side']}">
            <p class="${styles['title']}">TAMS</p>
            <p>Time Attendance and Monitoring System<p>
        </div>
        <div class="${styles['center-side']}">
            <ul>
                <li>Home</li>
                <li>About TAMS</li>
                <li>How to Use</li>
                <li>Documentation</li>
                <li>License</li>
                <li>Source Code</li>
            </ul>
        </div>
        <div class="right-side">
            <div class="developers">
                <p class="${styles['title']}">Developers</p>
                <ul>
                    <li>mikeru02</li>
                </ul>
            </div>
            <div class="sponsor">
                <p class="${styles['title']}">Sponsors</p>
                <ul>
                    <li>Archie Productions</li>
                </ul>
            </div>
            <div class="support">
                <p class="${styles['title']}">Support</p>
                <ul>
                    <li>Contact Us</li>
                    <li>Submit a Ticket</li>
                </ul>
            </div>
        </div>
    `;
    
    root.className = styles['footer'];
}