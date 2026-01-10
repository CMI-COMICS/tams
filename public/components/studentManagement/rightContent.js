import styles from './component.module.css';

export default function rightContent() {
    const rightContent = `
        <div class="${styles['right-content']}">
            <div class="${styles['button-section']}">
                <button id="import-students">Import</button>
            </div>
            <div class="${styles['head-section']}">
                <p>Filters</p>
                <div class="${styles['filter-container']}">
                    <label for="event">Year Level</label>
                    <select name="event" id="select-yearlevel"></select>
                </div>
                <div class="${styles['filter-container']}">
                    <label for="event">Course</label>
                    <select name="event" id="select-course"></select>
                </div>
                <div class="${styles['filter-container']}">
                    <label for="event">School Year</label>
                    <select name="event" id="select-schoolyear"></select>
                </div>
                <div class="${styles['filter-container']}">
                    <label for="search">Search</label>
                    <input id="search" name="search" placeholder="Enter Student ID">
                </div>
            </div>
            <div class="${styles['table-container']}">
                <div class="${styles['table-head']}">
                    <p>Student ID</p>
                    <p>Name</p>
                    <p>Year Level</p>
                    <p>Course</p>
                    <p>School Year</p>
                </div>
                <div class="${styles['table-body']}" id="table-body">
                    <p>22-1284</p>
                    <p>Ponce, Michael Alexis</p>
                    <p>4</p>
                    <p>BSCS</p>
                    <p>2025-2026</p>
                </div>
                <div class="${styles['table-body']}" id="table-body">
                    <p>22-1234</p>
                    <p>Sarmiento, Allyana Marie</p>
                    <p>4</p>
                    <p>BSCS</p>
                    <p>2025-2026</p>
                </div>
            </div>
        </div>
    `;
    return rightContent;
}