const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());  // To parse JSON data

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/api/businesses', require('./routes/businesses'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
