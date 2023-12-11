const express = require('express');
const app = express();
const PORT = 5500;
const mainRouter = require('./routes/index');
const cors = require('cors');

const dbConnection = require('./config/database');
app.use(express.json());
app.use(cors());
app.use('/', mainRouter);

dbConnection.sync({ alter: true })
  .then(() => {
    console.log(`Database connected`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Unable to connect to databse: ${error}`));
