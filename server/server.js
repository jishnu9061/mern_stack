import express from 'express';
import { connectDB } from './config/db.js';
import app from './app.js';
import userRoutes from './routes/userRoute.js';

const PORT = 3000;

// Connect to DB and then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}.....`);
    });
});

app.use('/api', userRoutes);
