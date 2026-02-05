import styles from './component.module.css';

export default function sideHeader() {
    const sideHeaderContent = `
        <div class="${styles['side-header']}">
            <ul>
                <li data-route="/admin/">Dashboard</li>
                <li data-route="/admin/report">Event Report</li>
                <li data-route="/admin/student">Student Management</li>
                <li data-route="/admin/event">Event Management</li>
                <li data-route="/admin/account-management">Account Management</li>
            </ul>
        </div>
    `;
    return sideHeaderContent;
}