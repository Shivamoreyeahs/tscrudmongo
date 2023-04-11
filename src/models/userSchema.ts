import mongoose,{Schema} from "mongoose";



interface User{
    name: string;
    email: string;
    password: string;
  }




const UserSchema = new Schema<User>(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  export const User = mongoose.model<User>("User", UserSchema);