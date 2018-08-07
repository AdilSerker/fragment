import 'reflect-metadata';
import * as express from 'express';
import { createExpressServer } from 'routing-controllers';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => console.log('Connect established'));

import { FragmentController } from './controllers/fragment/fragmentController';

const PUBLIC_PATH = path.join(__dirname, '../../public');
const INDEX_HTML_PATH = path.join(PUBLIC_PATH, 'index.html');

const PORT = 3000;

const app: express.Application = createExpressServer({
    controllers: [FragmentController]
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(PUBLIC_PATH));
app.use('/static', express.static(`${PUBLIC_PATH}/images/photos`));
app.use((req, res, next) => {
    if (!req.url.startsWith('/')) {
        res.sendfile(INDEX_HTML_PATH);
    } else {
        next();
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`App is running http://localhost:${PORT}`);
});



