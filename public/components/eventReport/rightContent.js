import styles from './component.module.css';

export default function rightContent() {
    const rightContent = `
        <div class="${styles['right-content']}">
            <div class="${styles['sections']}">
                <div class="${styles['event']}">
                    <p>Filters</p>
                    <div class="${styles['filter-container']}">
                        <label for="event">Event</label>
                        <select name="event" id="select-event"></select>
                    </div>
                    <div class="${styles['filter-container']}">
                        <label for="status">Status</label>
                        <select name="status" id="select-status">
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                        </select>
                    </div>
                    <div class="${styles['filter-container']}">
                        <label for="search">Search</label>
                        <input id="search" name="search" placeholder="Enter Student ID">
                    </div>
                </div>
            </div>
            <div class="${styles['table-container']}" id="table-container">
                <div class="${styles['table-head']}">
                    <p>Student ID</p>
                    <p>Name</p>
                    <p>Event</p>
                    <p>Status</p>
                    <p>Time In</p>
                    <p>Time Out</p>
                </div>
                <div class="${styles['table-body']}" id="table-body">
                    <p>22-1284</p>
                    <p>Ponce, Michael Alexis</p>
                    <p>CS Day 2026</p>
                    <p>Present</p>
                    <p>7:00</p>
                    <p>17:00</p>
                </div>
                <div class="${styles['table-body']}" id="table-body">
                    <p>22-1234</p>
                    <p>Sarmiento, Allyana Marie</p>
                    <p>CS Day 2026</p>
                    <p>Present</p>
                    <p>7:00</p>
                    <p>17:00</p>
                </div>
            </div>
        </div>
    `;
    return rightContent;
}