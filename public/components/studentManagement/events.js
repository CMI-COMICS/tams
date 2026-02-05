import axios from 'axios';
import styles from '../home/admin/component.module.css';

export default function Events() {
    const sideHeaderBtns = document.querySelectorAll(`.${styles['side-header']} li`);
    sideHeaderBtns[2].classList.add('active');
    
    sideHeaderBtns.forEach((button) => {
        button.addEventListener('click', function() {
            const route = button.dataset.route;
            window.app.pushRoute(route);
        })
    })

    const exportBtn = document.getElementById('import-students');
    const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('modal');
    exportBtn.addEventListener('click', function() {
        modal.style.display = "block";
    })
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    })

    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('upload-btn');
    uploadBtn.addEventListener('click', async function() {
        const file = fileInput.files[0];
        if (!file) return window.alert('Select a file!');
        
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(`http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/upload/`,
            formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
        );

        const importStudentResponse = await axios.post(
            `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/v1/student/`,
            {
                path: response.data.filePath
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "apikey": import.meta.env.VITE_API_KEY,
                    "token": localStorage.getItem('token')
                }
            }
        )

        window.alert("Import sucessful");
        modal.style.display = "none";
    })
}