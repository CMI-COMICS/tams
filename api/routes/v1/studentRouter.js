import { Router } from "express";
import StudentController from "../../controllers/v1/studentController.js";
import authorization from "../../middlewares/authorization.js";
import authentication from "../../middlewares/authentication.js";

const studentRouter = new Router();
const student = new StudentController();

studentRouter.use(authorization);
studentRouter.post("/", authentication, student.import.bind(student))

export default studentRouter;