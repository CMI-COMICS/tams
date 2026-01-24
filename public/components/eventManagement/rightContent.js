import styles from './component.module.css';

export default function rightContent() {
    const rightContent = `
        <div class="${styles['right-content']}">
            <div class="${styles['button-section']}">
                <button id="create-event">Create Event</button>
            </div>
            <div class="${styles['head-section']}">
                <div class="${styles['filter-container']}">
                    <label for="search">Search</label>
                    <input id="search" name="search" placeholder="Enter Event Name">
                </div>
            </div>
            <div class="${styles['table-container']}" id="table-container">
                <div class="${styles['table-head']}">
                    <p>Event ID</p>
                    <p>Name</p>
                    <p>Date</p>
                    <p>Action</p>
                </div>
            </div>
        </div>
    `;

    return rightContent;
}