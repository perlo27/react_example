const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json());
app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
