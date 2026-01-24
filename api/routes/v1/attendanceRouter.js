import { Router } from "express";
import AttendaceController from "../../controllers/v1/attendanceController.js";
import authorization from "../../middlewares/authorization.js";
import authentication from "../../middlewares/authentication.js";

const attendanceRouter = new Router();
const attendance = new AttendaceController();

attendanceRouter.use(authorization);

attendanceRouter.post("/", authentication, attendance.create.bind(attendance));

export default attendanceRouter;