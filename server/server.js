//require the package
const express = require('express');
const mongoose = require('mongoose');
const messageController = require('./controllers/messageController')
const path = require('path');

//mongo URI here + connect
//replace with password including brackets
const URI = "mongodb+srv://catkimcac:kLPucozEEGUXCRFQ@cluster0.gerlddf.mongodb.net/?retryWrites=true&w=majority"

//connect and verify
mongoose
    .connect(URI)
    .then(() => {
        console.log('hello, connected to mongo', );
    })
    .catch((err) => {
    console.log(err);
    });

//port num to run the server
const PORT = 3000;

//start the server
const app = express();

//incoming requests need any parsing
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// serve static files
app.use(express.static(path.join(__dirname, '../client')));

// //setup basic route
app.get('/', (req, res) => {
    return res.status(200).send('hello world!')
});

app.post('/newMessage', messageController.newMessage, (req, res) => {
    console.log('inside post2', req.body)
    return res.status(200).json(res.locals.message);
})

//user routes
//signup route creates user

//login route
//userController.verifyUser, route  main application

//create cookie middleware (just  string, can get it out of request, store in another schema, compare)

//handle undefined routes
app.use('*', (req, res) => {
    return res.status(404).send('NOT FOUND');
});

//waylands global error handler
app.use('/', (err, req, res, next) => {
    let defaultErr = {
        log: 'global error handler caught unknown middleware error',
        status: 400,
        message: 'an error occurred'
    }
    //do something with the pased in err
    let responseErr = {
        ...defaultErr,
        log: err.log,
        status: err.status,
        message: err.message,
    }
    // console.log(errorObj.log);
    return res.status(responseErr.status).send(responseErr.message);
});


//global error handling
// app.use('/', (err, req, res, next) => {
//     const defaultErr = {
//         log: 'global error handler caught unknown middleware error',
//         status: 400,
//         message: {err: 'an unknown error occurred'}
//     }
//     const errObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
// })

app.listen(PORT, () => {
    console.log('listening on Port', PORT);
});