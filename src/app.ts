import express from 'express';
import useRouter from './app/modules/user/user.routes';
const app = express();

// database url: mongodb+srv://Mostofa:Mostofa....1998@cluster0.nggon70.mongodb.net/userDb?retryWrites=true&w=majority

// midlwer and parsers
app.use(express.json());

app.use('/api/users', useRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
