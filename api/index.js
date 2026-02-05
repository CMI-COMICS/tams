import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config.js';

// Note: Import Version Routes Here!
import v1 from './routes/v1/index.js';

const app = express();
const PORT = process.env.API_PORT || 4000;

app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Note: Implement Routes Here!
app.use('/v1', cors(), v1);

app.listen(PORT, () => {
    console.log(`[API] API is UP and running at port ${PORT}`);
})
