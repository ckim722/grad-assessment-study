const Message = require('../../models/message.js');

//creates a 
const messageController = {

    newMessage: async function (req, res, next) {
        //can't use arrow syntax
        console.log('in controller', req.body.message);

        try{
            const message = await Message.create(
                { message: req.body.message});
                    console.log('message:', message);
            res.locals.message = message;
            //handle different cases before going next
            return next();
        } catch (err){
            //do something with the error
            return next({
                    // errors are objects
                    // ...err,
                    status:500,
                    log: 'something happened in the message add middleware;' + err,
                    message: 'message unable to add, please try again'
                }
            )
        }
        console.log(message);
        //handle diff cases before going next
        next();
    }


};

module.exports = messageController;