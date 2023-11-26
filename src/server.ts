import mongoose from 'mongoose';
import app from './app';
const port = process.env.PORT || 5000;

async function main() {
  await mongoose.connect(
    'mongodb+srv://Mostofa:Mostofa....1998@cluster0.nggon70.mongodb.net/userDb?retryWrites=true&w=majority',
  );

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
