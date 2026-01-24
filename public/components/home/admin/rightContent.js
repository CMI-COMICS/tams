import styles from './component.module.css';

export default function rightContent() {
    const rightContent = `
        <div class="${styles['right-content']}">
            <div class="${styles['sections']}">
                <div class="${styles['event']}">
                    <p>Event</p>
                    <select id="filter-event"></select>
                </div>
            </div>
            <div class="${styles['sections']}">
                <div class="total-students ${styles['home-card']}">
                    <div class="${styles['title-filter']}">
                        <p>No. of Students<p>
                        <select id="filter-yrlvl" class="${styles['yrlvl-filter']}"></select>
                    </div>
                    <p class="${styles['total-count']}"><span id="student-count">00</span> students</p>
                </div>
                <div class="percentage ${styles['home-card']}">
                    <div class="${styles['title-filter']}">
                        <p>Overall Attendance<p>
                    </div>
                    <p class="${styles['total-count']}"><span id="overall-attendance">00%</span></p>
                </div>
                <div class="percentage ${styles['home-card']}">
                    <div class="${styles['title-filter']}">
                        <p>Present | Absent<p>
                    </div>
                    <p class="${styles['total-count']}"><span id="present">00</span> | <span id="absent">00</span></p>
                </div>
                <div class="percentage ${styles['home-card']}">
                    <div class="${styles['title-filter']}">
                        <p>Most Present Year Level<p>
                    </div>
                    <p class="${styles['total-count']}"><span id="most-present">4th</span> Year</p>
                </div>
            </div>
            <div class="${styles['sections']}">
                <div class="${styles['quick-actions']} action-buttons" data-path="/admin/student">
                    <p>Import Students</p>
                </div>
                <div class="${styles['quick-actions']} action-buttons" data-path="/admin/report">
                    <p>Print Report</p>
                </div>
                <div class="${styles['quick-actions']} action-buttons" data-path="/admin/event">
                    <p>Create Event</p>
                </div>
            </div>
            <div class="${styles['sections']}">
                <div class="${styles['quick-actions']}" id="logout-btn">
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    `;
    return rightContent;
}