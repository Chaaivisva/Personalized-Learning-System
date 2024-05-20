import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App listenig to the port = ${PORT}`);
});

