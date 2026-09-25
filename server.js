require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./data/database');

const app = express();
const port = 8080;

app.use(cors());
app.use('/professional', require('./routes/professional'));

async function startServer() {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
}

startServer();