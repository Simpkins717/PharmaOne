import express from 'express';
const app = express();
import connectDB from './db/connect.js';

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome' });
});

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});

const port = 5001;
const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://dsimpkins717:pZFTqmiwj88nmyPJ@pharmaone.2qq2sh3.mongodb.net/?retryWrites=true&w=majority'
    );
    app.listen(port, () => {
      console.log(`Listening on Port: ${port}`);
    });
  } catch (error) {
    console.log(`There was an error`, error);
  }
};
start();
