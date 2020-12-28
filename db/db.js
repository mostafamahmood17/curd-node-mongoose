const mongoose = require('mongoose');
require('dotenv').config();


const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9na52.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

if(!dbUri) {
    console.error('Mongo url not set in env file');
    return new Error('Mongo url not set in env file');
}

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 

}, err => {
    if(err) {
        console.error(`failed to connect using mongoose ${err}`);
    } else {
        console.log(`connected to db server`);
    }
});

module.exports = mongoose;