import Student from "../../models/students.js";

class StudentController {
    constructor() {
        this.student = new Student();
    }

    async import(req, res) {
        try {
            const { path } = req.body || {};
            const response = await this.student.import(path);
            res.json({
                success: true,
                data: response
            });
            res.end();
        } catch(err) {
            res.json({
                success: false,
                message: err.toString(),
            });
            res.end();
        }
    }
}

export default StudentController;