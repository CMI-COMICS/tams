import axios from "axios";
import checkExpiration from "../../utils/checkExpiration.js";
import checkRole from "../../utils/checkRole.js";

export default function Events() {
    const loginBtn = document.getElementById('submit-login');
    console.log(loginBtn)
    if (localStorage.getItem('token')) {
        const isExpired = checkExpiration(localStorage.getItem('token'));
        if (isExpired) {
            window.alert('Session expired! Please login again!');
            localStorage.removeItem('token');
            window.app.pushRoute('/login/');
        } else {
            const role = checkRole(localStorage.getItem('token'));
            if (role === 'staff'){
                window.app.pushRoute('/user/')
            } else if (role === 'admin') {
                window.app.pushRoute('/admin/')
            } else {
                window.alert('Invalid Role')
            }
            console.log("done process")
        }
    } else {
        loginBtn.addEventListener('click', async function(event) {
            event.preventDefault();
            try {
                const response = await axios.post(`http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/user/login`, {
                    username: document.getElementById('username-login').value,
                    password: document.getElementById('password-login').value
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": "tams"
                    }
                });
                console.log("fetch token from response",response.data.data.token)
                const token = response.data.data.token;
                console.log(token)
                localStorage.setItem('token', token);
                const role = checkRole(token);
                if (role === 'staff'){
                    window.app.pushRoute('/user/')
                } else if (role === 'admin') {
                    window.app.pushRoute('/admin/')
                } else {
                    window.alert('Invalid Role')
                }
                console.log("done process")
            } catch(err) {
                console.error("Login Error: ", err);
                throw err;
            }
        })
    }
}