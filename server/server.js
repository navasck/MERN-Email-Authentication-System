const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const appRoute = require('./routes/auth.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.json({ message: 'Welcome All' });
});
app.use('/auth', appRoute);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Database connection successfully');
};

connectDB();

app.listen(5000, () => {
  console.log('Server is successfully listening on port 5000...');
});
