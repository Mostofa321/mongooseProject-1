import { IUser } from './user.interface';
import User from './user.model';

// create a new user
const createUser = async (userData: IUser) => {
  const result = await User.create(userData);
  return result;
};

// get all users from db
const getAllUsers = async () => {
  const result = await User.find({}).select(
    'username fullName age email address',
  );
  return result;
};

export default {
  createUser,
  getAllUsers,
};
