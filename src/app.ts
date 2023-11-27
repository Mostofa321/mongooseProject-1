import express from 'express';
import cors from 'cors';
import useRouter from './app/modules/user/user.routes';
const app = express();

// midlwer and parsers
app.use(cors());
app.use(express.json());

app.use('/api/users', useRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
