import Event from "../../models/event.js";

class EventController {
    constructor() {
        this.event = new Event();
    }

    async create(req, res) {
        try {
            const { name, date } = req.body || {};
            const response = await this.event.create(name, date);
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

    async get(req, res) {
        try {
            const name = req.params.name;
            const response = await this.event.get(name);
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

    async getAll(req, res) {
        try {
            const response = await this.event.getAll();
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

    async update(req, res) {
        try {
            const { name, date } = req.body || {};
            const response = await this.event.update(req.params.id, name, date);
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

    async delete(req, res) {
        try {
            const response = await this.event.delete(req.params.name);
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

export default EventController;