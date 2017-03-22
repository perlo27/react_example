var path = require('path');
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3001));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// app.use(bodyParser.json());
// app.use('/api', api)

app.listen(app.get('port'), 'localhost', function (err) {
    if (err) {
        console.log('error from server-', err);
        return;
    }

    console.log(`Listening at http://localhost:${app.get('port')}`);
});
