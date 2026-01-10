import styles from './component.module.css';

export default function rightContent() {
    const rightContent = `
        <div class="${styles['right-content']}">
            <div class="${styles['button-section']}">
                <button id="import-students">Add Account</button>
            </div>
            <div class="${styles['head-section']}">
                <div class="${styles['filter-container']}">
                    <label for="search">Search</label>
                    <input id="search" name="search" placeholder="Enter Username">
                </div>
            </div>
            <div class="${styles['table-container']}">
                <div class="${styles['table-head']}">
                    <p>User ID</p>
                    <p>Username</p>
                    <p>Name</p>
                    <p>Role</p>
                    <p>Action</p>
                </div>
                <div class="${styles['table-body']}" id="table-body">
                    <p>USR202601</p>
                    <p>mikeru</p>
                    <p>Ponce, Michael Alexis</p>
                    <p>Admin</p>
                    <p>View</p>
                </div>
            </div>
        </div>
    `;

    return rightContent;
}