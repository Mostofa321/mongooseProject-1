import { IUser } from './user.interface';
import User from './user.model';

// create a new user
const createUser = async (userData: IUser) => {
  const result = await User.create(userData);
  return result;
};

export default {
  createUser,
};
