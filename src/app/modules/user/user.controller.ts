import { Request, Response } from 'express';
import services from './user.service';
import { IUser } from './user.interface';
import userValidationSchema, {
  userValidationSchemaForPutReq,
} from './validation';

// create a user (controller function)
const createUserController = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;
    const validUser = await userValidationSchema.validateAsync(userData);
    const createdUser = await services.createUser(validUser);
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

// get single user (controller function)
const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userId);
    const data = await services.getSingleUser(userId);
    if (!data) {
      throw new Error('User not found');
    }
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// update single user (controller function)
const updateSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userId);
    const userData: IUser = req.body;
    const validUser =
      await userValidationSchemaForPutReq.validateAsync(userData);

    const data = await services.updateSingleUser(userId, validUser);
    if (!data) {
      throw new Error('User not found!');
    }
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// delate single user (controller function)
const delateSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userId);
    let result = await services.deleteSingleUser(userId);
    if (result.deletedCount === 0) {
      throw new Error('User not found');
    }
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: (result = null),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export default {
  createUserController,
  getAllUserController,
  getSingleUserController,
  updateSingleUserController,
  delateSingleUserController,
};
