import { connection } from "../core/database.js";

class Attendace {
    constructor() {
        this.db = connection;
    }

    async create(studentId, eventId) {
        try {
            const [ result ] = await this.db.execute(
                "INSERT INTO attendance (event_id, student_id) VALUES (?, ?)",
                (eventId, studentId)
            );
            return result;
        } catch(err) {
            console.error("<error> attendace.create", err);
            throw err;
        }
    }
}

export default Attendace;