import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/api', router);

app.get('/', (_req, _res) => {
  console.log('server is running');
  _res.send('server is running');
});

app.listen(port, () => {
  console.log('server listening at port 3000');
});
