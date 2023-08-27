const mongoose = require('mongoose');
let dotenv = require("dotenv")
dotenv.config({ path: './.env' });
const db = process.env.DATABASE

// console.log('Starting')

mongoose.connect(db, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });




