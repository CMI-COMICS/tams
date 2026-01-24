export default function Events() {
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('token');
        window.app.pushRoute('/login/')
    })
}