import { model, Schema, connect } from "mongoose";
import { user_interface } from "@webbshop-app/shared";
const bcrypt = require("bcrypt");

const userModel = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const setUpMongoDb = async (url: string): Promise<void> => {
  await connect(url);
};

export const User = model<user_interface>("user", userModel);

export const saveUser = async (item: user_interface): Promise<void> => {
  console.log(item);
  const NewUser = new User(item);
  const SaveNewUser = await NewUser.save();
  if (!SaveNewUser) {
    throw new Error("ange giltig data");
  }
};
