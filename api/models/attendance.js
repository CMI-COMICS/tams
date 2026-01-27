import { connection } from "../core/database.js";

class Attendace {
    constructor() {
        this.db = connection;
    }

    async create(studentId, eventId) {
        try {
            const [ student ] = await this.db.execute(
                "SELECT * FROM students WHERE student_id = ?",
                [studentId]
            );
            const [ attendance ] = await this.db.execute(
                "SELECT * FROM attendance WHERE student_id=? AND event_id=?",
                [studentId, eventId]
            );
            if (attendance.length > 0) {
                if (attendance[0].time_out !== null){
                    return "Timed Out";
                }
                const [ result ] = await this.db.execute(
                    "UPDATE attendance SET time_out = NOW() WHERE student_id = ? AND event_id = ?",
                    [studentId, eventId]
                );
                return result;
            }
            if (student[0].payment_status === "paid") {
                const [ result ] = await this.db.execute(
                    "INSERT INTO attendance (event_id, student_id) VALUES (?, ?)",
                    [eventId, studentId]
                );
                return result;
            } else {
                const [ result ] = await this.db.execute(
                    "INSERT INTO attendance (event_id, student_id) VALUES (?, ?)",
                    [eventId, studentId]
                );
                return "Payment Missing";
            }
        } catch(err) {
            console.error("<error> attendance.create", err);
            throw err;
        }
    }

    async get(eventId) {
        try {
            const [ result ] = await this.db.execute(
                "SELECT * FROM attendance WHERE event_id=?",
                [eventId] 
            );
            return result?.[0];
        } catch(err) {
            console.error("<error> attendance.get", err);
            throw err;
        }
    }

    async update(studentId) {
        try {
            const [ result ] = await this.db.execute(
                "UPDATE attendance SET time_out=NOW() WHERE student_id = ?",
                [studentId]
            );
            return result;
        } catch(err) {
            console.error("<error> attendance.update", err);
            throw err;
        }
    }
}

export default Attendace;