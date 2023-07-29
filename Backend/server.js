require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb+srv://abdinshaikh:Mongodbabdin03@cluster0.45iq1gq.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());
const quoteRouter = require('./routes/quote');
app.use('/quote',quoteRouter);

app.use('/', (req,res) => {
    res.send('Hello World');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(5050, () => console.log('Server started on port 5050'));