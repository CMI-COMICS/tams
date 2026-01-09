import styles from './component.module.css';
import ILLUSTRATION1 from '../../../icons/hello.svg';

export default function Main(root) {
    root.innerHTML = `
        <div class="${styles["card"]}">
            <div class="illustration-side">
                <img src="${ILLUSTRATION1}" class="${styles['page-illustration']}">
            </div>
            <div class="input-side">
                <div class="top-part">
                    <h1 class="${styles['title']}">T.A.M.S.</h1>
                    <p class="${styles['desc']}">Time Attendance and Monitoring System</p>
                </div>
                <div class="${styles['center-part']}">
                    <label for="events">Events</label>
                    <select name="events" id="event-dropdown"></select>
                    <label for="id">Student ID</label>
                    <input name="id" id="stud-id" placeholder="Enter Student ID">
                    <div class="${styles['buttons']}">
                        <button id="logout-btn">Logout</button>
                        <button id="submit-btn">Submit</button>
                    </div>
                </div>
                <div class="${styles['bottom-part']}">
                    <p>NOTE: If an error occur, kindly contact the administrator thank you</p>
                </div>
            </div>
        </div>
    `;

    root.className = styles['main'];
}