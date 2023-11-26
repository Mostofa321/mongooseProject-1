import { Request, Response } from 'express';
import services from './user.service';
import { IUser } from './user.interface';

// create a user (controller function)
const createUserController = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;
    const createdUser = await services.createUser(userData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'somthing went wrong',
      error,
    });
  }
};

// get all users (controller function)
const getAllUserController = async (req: Request, res: Response) => {
  try {
    const allUsers = await services.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'somthing went wrong',
      error,
    });
  }
};

export default {
  createUserController,
  getAllUserController,
};
