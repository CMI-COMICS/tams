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
            </div>
        `;
    } else if (page === 'student') {
        return `
            <div class="${styles['modal']}" id="modal">
                <div class="${styles['modal-content']}">
                    <p class="${styles['span']}"><span class="${styles['close']}" id="closeModal">&times;</span></p>
                    <h1>Import Students</h1>
                    <div class="${styles['filter-container']}">
                        <label for="fileInput">Choose a file:</label>
                        <input type="file" id="fileInput" name="file">
                        <button type="submit" id="upload-btn">Upload</button>
                    </div>
                </div>
            </div>
        `;
    } else if (page === 'event') {
        return `
            <div class="${styles['modal']}" id="modal">
                <div class="${styles['modal-content']}">
                    <p class="${styles['span']}"><span class="${styles['close']}" id="closeModal">&times;</span></p>
                    <h1>Create Event</h1>
                    <div id="input-fields" class="${styles['input-fields']}">
                        <label for="name">Event Name</label>
                        <input type="text" id="event-name" placeholder="Enter Event Name">
                        <label for="name">Event Date</label>
                        <input type="date" id="date">
                        <div class="${styles['buttons']}">
                            <button id="create-btn">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (page === 'account') {
        return `
        `;
    } else {
        window.alert('Invalid Page Event')
    }
}