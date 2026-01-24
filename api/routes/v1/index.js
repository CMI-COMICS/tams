import { Router } from 'express';

// Note: Import Route Modules Here!
import accountRouter from './accountRouter.js';
import uploadRouter from './uploadRouter.js';
import eventRouter from './eventRouter.js';
import attendanceRouter from './attendanceRouter.js';
import studentRouter from './studentRouter.js';

const v1 = new Router();

// Note: Implement Routes Here!
v1.use("/user", accountRouter);
v1.use("/upload", uploadRouter);
v1.use("/event", eventRouter);
v1.use("/attendance", attendanceRouter);
v1.use("/student", studentRouter);

export default v1;