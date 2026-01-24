import Attendace from "../../models/attendance.js";

class AttendaceController { 
    constructor() {
        this.attendance = new Attendace();
    }

    async create(req, res) {
        try {
            const { studentId, eventId } = req.body || {};
            const reponse = await this.attendance.create(studentId, eventId);
        } catch(err) {
            res.json({
                success: false,
                message: err.toString(),
            });
            res.end();
        }
    }
}

export default AttendaceController;