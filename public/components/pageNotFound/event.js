export default function Events() {
    const backBtn = document.getElementById('back-btn');

    backBtn.addEventListener('click', function() {
        window.app.pushRoute('/')
    })
}