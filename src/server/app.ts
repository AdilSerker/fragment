import * as express from 'express';
import { createExpressServer } from 'routing-controllers';
import * as path from 'path';

const PUBLIC_PATH = path.join(__dirname, '../../public');
const INDEX_HTML_PATH = path.join(PUBLIC_PATH, 'index.html');

const PORT = 3000;

const app: express.Application = createExpressServer({
    controllers: []
});

app.use(express.static(PUBLIC_PATH));
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