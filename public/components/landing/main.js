import styles from './component.module.css';
import ILLUSTRATION1 from '../../icons/maintenance.svg';
import ILLUSTRATION2 from '../../icons/table.svg';

export default function Main(root) {
    root.innerHTML = `
        <section>
            <div class="${styles['desc-container']}">
                <p class="${styles['title-section']}">What is TAMS?</p>
                <p class="${styles['desc-section']}">
                    TAMS is an abbreviation for Time Attendance and Monitoring System
                    aimed to record and monitor every student's attendance on every event
                    that the department will hold.
                </p>
            </div>
            <img src="${ILLUSTRATION1}" class="${styles['page-illustration']}">
        </section>
        <section>
            <img src="${ILLUSTRATION2}" class="${styles['page-illustration']}">
            <div class="${styles['desc-container']}">
                <p class="${styles['title-section']}">Benefits:</p>
                <ul class="${styles['desc-section']}">
                    <li>Reduces manual errors and attendance fraud</li>
                    <li>Saves time for organizers and volunteers</li>
                    <li>Improves accountability and transparency</li>
                    <li>Enhances record-keeping and reporting efficiency</li>
                </ul>
            </div>
        </section>
        <section>
            <div class="${styles['section-cotainer1']}">
                <p class="${styles['title-section']}">Login to Start!</p>
                <button class="action-btn" data-role="user">Sign In</button>
                <button class="action-btn" data-role="admin">Admin</button>
            </div>
        </section>
    `;

    root.className = styles['main'];
}