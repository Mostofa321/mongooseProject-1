import { IOrder, IUser } from './user.interface';
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

// get single user from db
const getSingleUser = async (userId: number) => {
  const result = await User.findOne({ userId: userId }).select('-password');
  return result;
};

// update single user to db
const updateSingleUser = async (userId: number, userData: IUser) => {
  const result = await User.updateOne({ userId: userId }, { $set: userData });
  if (result.acknowledged) {
    const updaterUser = await User.findOne({ userId: userId }).select(
      '-password',
    );
    return updaterUser;
  }
};

// delete single user from db
const deleteSingleUser = async (userId: number) => {
  const result = await User.deleteOne({ userId: userId });
  return result;
};

// put order
const putOrder = async (userId: number, order: IOrder) => {
  const result = await User.updateOne(
    { userId: userId },
    { $addToSet: { orders: order } },
  );

  return result;
};

// get all orders for a specific user from db
const getAllOrdersOfUser = async (userId: number) => {
  const result = await User.findOne({ userId: userId }).select('orders -_id');
  return result;
};

export default {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  putOrder,
  getAllOrdersOfUser,
};
