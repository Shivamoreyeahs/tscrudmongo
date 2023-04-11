import { Router, Request, Response } from "express";
import { User } from "../models/userSchema";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    // const password = req.body.password;

    // console.log(email, password);

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(200).send({ message: "User Login Successfully" });
    } else {
      res.status(200).json({ message: "User does not exist" });
    }
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    let user = await User.findByIdAndUpdate(id, req.body, { new: true });
   
    console.log(user);
    

    res.status(200).send("User Updated successfully");
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};


export const deleteUser = async (req: Request, res: Response) =>{
  try {
    const id = req.params.id;
    console.log(id);
   
    let user = await User.findByIdAndDelete(id);
    console.log(user); 

    res.status(200).send("User Deleted successfully");
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
}

