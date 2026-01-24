import axios from 'axios';
import styles from '../home/admin/component.module.css';
import styles1 from './component.module.css';

export default async function Events() {
    const sideHeaderBtns = document.querySelectorAll(`.${styles['side-header']} li`);
    sideHeaderBtns[3].classList.add('active');
    
    sideHeaderBtns.forEach((button) => {
        button.addEventListener('click', function() {
            const route = button.dataset.route;
            window.app.pushRoute(route);
        })
    });

    const eventName = document.getElementById('event-name');
    const eventDate = document.getElementById('date');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const createEventButton = document.getElementById('create-event');
    createEventButton.addEventListener('click', function() {
        modal.style.display = "block";
    });
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        eventName.value = "";
        eventDate.value = "";
    });

    const createBtn = document.getElementById('create-btn');
    createBtn.addEventListener('click', async function(){
        await axios.post(
            `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/event/`,
            {
                name: eventName.value,
                date: eventDate.value
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "apikey": import.meta.env.VITE_API_KEY,
                    "token": localStorage.getItem('token')
                }
            }
        );
        modal.style.display = "none";
        eventName.value = "";
        eventDate.value = "";
        window.app.pushRoute('/admin/event');

    })

    const tableContainer = document.getElementById('table-container');
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
    console.log(events)
    if (!Array.isArray(events) || events.length === 0) {
        const div = document.createElement('div');
        div.className = styles1['table-body'];
        div.innerHTML = `
            <p>No Events Found</p>
        `
        tableContainer.appendChild(div);
        return;
    }
    events.forEach(event => {
        const date = new Date(event.date);
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        const div = document.createElement('div');
        div.className = styles1['table-body'];
        div.innerHTML = `
            <p>${event.id}</p>
            <p>${event.name}</p>
            <p>${formattedDate}</p>
            <p>View Details</p>
        `;
        tableContainer.appendChild(div)
    })

}