import axios from "axios";

export default async function PageEvent() {
    const eventsRequest = await axios.get(
        `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/event/all`,
        {
            headers: {
                "Content-Type": "application/json",
                "apikey": import.meta.env.VITE_API_KEY,
                "token": localStorage.getItem('token')
            }
        }
    );

    const events = eventsRequest.data.data;
    
    const selectEvent = document.getElementById('event-dropdown');
    selectEvent.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Select an Event --';
    selectEvent.appendChild(defaultOption);

    events.forEach(event => {
        const option = document.createElement('option');

        const date = new Date(event.date);
        const prettyDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        option.value = event.id; // Use ID as value
        option.textContent = `${event.name} (${prettyDate})`;

        selectEvent.appendChild(option);
    });

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', async function() {
        const studentId = document.getElementById("stud-id")
        const response = await axios.post(
            `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/attendance/`,
            {
                "studentId": studentId.value,
                "eventId": document.getElementById("event-dropdown").value
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "apikey": import.meta.env.VITE_API_KEY,
                    "token": localStorage.getItem('token')
                }
            }
        );

        studentId.value = "";
        if (response.data.response === "Timed Out") {
            window.alert("Student already time out for this event")
        } else if (response.data.response = "Payment Missing") {
            window.alert("Student has not made any payment. Don't give any raffle tickets, souvenir and stickers")
        }
    })
}