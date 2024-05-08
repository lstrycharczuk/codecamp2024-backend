const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./models/user');
const connectToDatabase = require('./database');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', usersRouter);

app.get('/', (req, resp) => {
  resp.send('Backend');
});

connectToDatabase().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`http://localhost:${process.env.PORT || 3000}`);
  });
}).catch((error) => {
  console.error('Error starting the application:', error);
});