import mongoose from 'mongoose';
import validator from 'validator';
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  groupID: {
    type: String,
    required: [true, 'Please provide group ID'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false,
  },
});
export default mongoose.model('User', UserSchema);
