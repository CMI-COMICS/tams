import Attendace from "../../models/attendance.js";

class AttendaceController { 
    constructor() {
        this.attendance = new Attendace();
    }

    async create(req, res) {
        try {
            const { studentId, eventId } = req.body || {};
            const response = await this.attendance.create(studentId, eventId);
            res.json({
                success: true,
                response
            })
        } catch(err) {
            res.json({
                success: false,
                message: err.toString(),
            });
            res.end();
        }
    }

    async get(req, res) {
        try { 

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