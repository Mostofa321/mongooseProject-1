import 'dotenv/config';

const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;

export default {
  port,
  dbUrl,
};
