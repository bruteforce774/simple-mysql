import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect();

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});