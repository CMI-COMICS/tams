import styles from './component.module.css';

export default function Events() {
    const sideHeaderBtns = document.querySelectorAll(`.${styles['side-header']} li`);
    sideHeaderBtns[0].classList.add('active');
    
    sideHeaderBtns.forEach((button) => {
        button.addEventListener('click', function() {
            const route = button.dataset.route;
            window.app.pushRoute(route);
        })
    });

    const actionButtons = document.querySelectorAll('.action-buttons');
    actionButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const path = button.dataset.path;
            window.app.pushRoute(path);
        })
    })

    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('token');
        window.app.pushRoute('/login/')
    })
}