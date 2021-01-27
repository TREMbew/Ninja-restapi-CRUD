const mongoose = require('mongoose');

//Using dotenv dependency for database
require('dotenv').config({ path: './config/.env' });
const DB_URL = process.env.DB_URL

//Connect DB function (to be called in server.js)
const connectDB = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if(err) console.log(err)
        else console.log('DB is connected')
    })
}

module.exports = connectDB