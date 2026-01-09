import styles from './component.module.css';

export default function Events() {
    const sideHeaderBtns = document.querySelectorAll(`.${styles['side-header']} li`);
    sideHeaderBtns[3].classList.add('active');
    
    sideHeaderBtns.forEach((button) => {
        button.addEventListener('click', function() {
            const route = button.dataset.route;
            window.app.pushRoute(route);
        })
    })
}