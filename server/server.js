import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';

const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(express.json());
app.use(express.static(p));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

import * as mysql from 'mysql';

// import chirps from './chirps'

const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'passypasspass?',
    database: 'chirpr'
});

Connection.query('Describe users', (err, results) => {
    if (err) {
        console.log(err)
    } else {
        console.log(results);
    }
});
