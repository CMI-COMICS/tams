import { connection } from "../core/database.js";

class Event {
    constructor() {
        this.db = connection;
    }

    async create(name, date) {
        try {
            const [ result ] = await this.db.execute(
                "INSERT INTO events (name, date) VALUES (?, ?)",
                [name, date]
            );
            return result;
        } catch(err) {
            console.error("<error> event.create", err);
            throw err;
        }
    }

    async get(name) {
        try {
            const [ result ] = await this.db.execute(
                "SELECT * FROM events WHERE name=?",
                [name]
            );
            return result;
        } catch(err) {
            console.error("<error> event.get", err);
            throw err;
        }
    }

    async getAll() {
        try {
            const [ result ] = await this.db.execute(
                "SELECT * FROM events",
            );
            return result;
        } catch(err) {
            console.error("<error> event.getAll", err);
            throw err;
        }
    }

    async update(id, name, date) {
        try {
            const [ result ] = await this.db.execute(
                "UPDATE events SET name=?, date=? WHERE id=?",
                [name, date, id]
            );
            return result;
        } catch(err) {
            console.error("<error> event.update", err);
            throw err;
        }
    }

    async delete(name) {
        try {
            const [ result ] = await this.db.execute(
                "DEETE FROM events WHERE name=?",
                [name]
            );
            return result;
        } catch(err) {
            console.error("<error> event.delete", err);
            throw err;
        }
    }
}

export default Event;