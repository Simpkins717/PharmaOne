import express from 'express';
const app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();
app.use(cors());

const port = process.env.VITE_PORT;

// Parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
  groupId: String,
});

// Route for user registration
app.post('/api/v1/auth/register', async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, groupId } = req.body;

    // Create a new user instance
    const user = new User({
      name,
      email,
      password,
      groupId,
    });

    // Save the user to the database
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dsimpkins717:pZFTqmiwj88nmyPJ@pharmaone.2qq2sh3.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(port, () => {
      console.log(`Listening on Port: ${port}`);
    });
  } catch (error) {
    console.log(`There was an error`, error);
  }
};
start();
