var light = require('../helpers/lights.js');
var express = require('express');
var router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

/* POST twilio webhook */
router.post('/', function(req, res) {
    console.log('sms posted')

    light.blink()

    // parse twilio msg
    const text = req.body["Body"]
    const sender = req.body["From"]

    const twiml = new MessagingResponse();
    twiml.message('Hello this is Thatcher.');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

module.exports = router;
