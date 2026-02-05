import { Router } from "express";
import EventController from "../../controllers/v1/eventController.js";
import authorization from "../../middlewares/authorization.js";
import authentication from "../../middlewares/authentication.js";

const eventRouter = new Router();
const event = new EventController();

eventRouter.use(authorization);

// Get Methods
// eventRouter.get("/:name", authentication, event.get.bind(event));
eventRouter.get("/all", authentication, event.getAll.bind(event));

// Post Methods
eventRouter.post("/", authentication, event.create.bind(event));

// Patch Methods
eventRouter.patch("/:id", authentication, event.update.bind(event));

// Delete Methods
eventRouter.delete("/:name", authentication, event.delete.bind(event));

export default eventRouter;