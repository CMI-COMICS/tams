export default function Events() {
    const actionBtns = document.querySelectorAll('.action-btn');
    console.log(actionBtns)

    actionBtns.forEach(button => {
        button.addEventListener('click', handleClick);
        console.log("NAHIHIT")
    });

}

function handleClick(event) {
    const role = event.target.dataset.role;
    if (role === 'user') {
        window.app.pushRoute('/login/');
    } else if (role === 'admin') {
        window.app.pushRoute('/login/admin');
    } else {
        window.alert('Invalid role :>')
    }
}