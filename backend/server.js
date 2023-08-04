// Server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginRouter = require('./Routes/User');
const postRouter = require('./Routes/Post');

const PORT = process.env.PORT || 3999;
const app = express();

app.use(cors());
app.use(express.json());
app.use(loginRouter, postRouter);





app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});



// Database Creation

const DATABASE_URL = "mongodb+srv://crud-operation:crud-op123@cluster0.ismwkvb.mongodb.net/users"
mongoose.connect(process.env.URL || DATABASE_URL);

// Database Connected message
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
