import { Router } from 'express';

// Note: Import Route Modules Here!
import accountRouter from './accountRouter.js';

const v1 = new Router();

// Note: Implement Routes Here!
v1.use("/user", accountRouter);

export default v1;