const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const groceryRoutes = require('./src/routes/groceryRoutes');
const cors = require('cors');

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/api/grocery', groceryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
