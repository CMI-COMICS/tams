export default function Events() {
    const timeContainer = document.getElementById('time-container');
    
    if (window.__dateTimeInterval) {
        clearInterval(window.__dateTimeInterval);
    }

    function updateTime() {
        const now = new Date();

        const date = now.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })

        const time = now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })

        timeContainer.textContent = `${date} - ${time}`;
    }

    updateTime();
    window.__dateTimeInterval = setInterval(updateTime, 1000);
}