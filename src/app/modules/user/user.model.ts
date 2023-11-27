import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema: Schema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    type: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    required: true,
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: {
    type: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    required: true,
  },
  orders: {
    type: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

userSchema.post('save', (doc, next) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...newDoc } = doc._doc;
  doc._doc = newDoc;

  next();
});

const User = model<IUser>('User', userSchema);

export default User;
