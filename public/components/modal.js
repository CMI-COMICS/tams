import styles from './component.module.css';

export default function Modal(page) {
    if (page === 'report') {
        return `
            <div class="${styles['modal']}" id="modal">
                <div class="${styles['modal-content']}">
                    <p class="${styles['span']}"><span class="${styles['close']}" id="closeModal">&times;</span></p>
                    <h1>Export Report</h1>
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
                    <button>Export</button>
                </div>
            </di>
        `;
    } else if (page === 'stuent') {
        return `
        
        `;
    } else if (page === 'event') {
        return `
        `;
    } else if (page === 'account') {
        return `
        `;
    } else {
        window.alert('Invalid Page Event')
    }
}