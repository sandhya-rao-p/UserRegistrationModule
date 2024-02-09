require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow your client's origin
  }));
app.use(express.json()); // For parsing application/json

// Set up PostgreSQL client
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Routes go here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id',
        [firstName, lastName, email, hashedPassword]
      );
      res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (user.rows.length > 0) {
        const isValid = await bcrypt.compare(password, user.rows[0].password);
        if (isValid) {
          // Login success
          res.json({ id: user.rows[0].id });
        } else {
          res.status(400).send('Invalid credentials');
        }
      } else {
        res.status(400).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  