import express, { Router, Request, Response } from "express";
import { user_interface } from "@webbshop-app/shared";
import { saveUser } from "../Models/userModel";

const User_Controller = express.Router();

User_Controller.post(
  "/",
  async (
    req: Request<user_interface>,
    res: Response<user_interface[] | string>
  ) => {
    const userCreate = req.body;
    console.log(userCreate);
    try {
      await saveUser(req.body);
      res.send("ok");
    } catch {
      console.log("error user");
      res.send("wrong user");
    }
  }
);

export default User_Controller;
