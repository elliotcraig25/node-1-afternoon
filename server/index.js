const express = require('express');
const bodyParser = require('body-parser');
const messCtrl = require('./controllers/message_controllers');



const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl = '/api/messages';

app.post(messagesBaseUrl, messCtrl.create);

app.get(messagesBaseUrl, messCtrl.read);

app.put(`${messagesBaseUrl}/:id`, messCtrl.update);

app.delete(`${messagesBaseUrl}/:id`, messCtrl.delete);



app.listen(3001, ()=>{
    console.log(`it sure is runn'in`);
});