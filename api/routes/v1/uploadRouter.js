import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadRouter = Router();

// Ensure the uploads folder exists
const uploadDir = 'api/uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// POST /v1/upload
uploadRouter.post('/', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('File saved at:', req.file.path);
    res.json({
        message: 'File uploaded successfully',
        filePath: req.file.path
    });
});

export default uploadRouter;
