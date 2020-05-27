// const data_file = require('./key.js');
const express = require('express');
const app = express();
var twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// var authToken = data_file.authtoken;
// var accountSid = data_file.accountSid;
const accountSid =   'AC5f01148f8616ef7253aac9bd991deacc';
const authToken =  '759dccd2fc6a6a5fa31a571ab7720d52';
const client = require('twilio')(accountSid, authToken);


app.listen(3000, () => {
    console.log("listening on port 3000");
    }
);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.post('/api', (request, response) => {
    console.log(request.body.user.number);
    console.log(request.body.user.message);
    // client.messages.create({
    //     body: request.body.user.message,
    //     to: request.body.user.number,  // Text this number
    //     from: '+19145058996' // From a valid Twilio number
    // })
    // .then((message) => console.log(message.sid));
  });


app.post('/sms', (req, res) => {
    console.log("Received message and the data is " + JSON.stringify(req.body.Body));
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  
});

