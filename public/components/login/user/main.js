import styles from '../component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <div class="${styles["card"]}">
            <h1 class="${styles["title"]}">T.A.M.S. - User</h1>
            <p class="${styles["desc"]}">Log In</p>

            <div class="${styles["input-fields"]}">
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="Name">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password">
            </div>
            <button id="submit-login" class="${styles["button-submit-cred"]}">Log In</button>
        </div>
    `;

    root.className = styles["main"];
}