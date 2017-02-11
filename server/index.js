import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import services from './routes/services';

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use('/api/services', services);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(9000, () => console.log('Running on localhost: 9000'));
