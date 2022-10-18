import express, { Router, Request, Response } from "express";
import { user_interface } from "@webbshop-app/shared";
import { appendFile } from "fs";
const User_Controller = express.Router();

User_Controller.post(
  "/",
  (req: Request<user_interface>, res: Response<user_interface>) => {
    const query = req.body;
    console.log(query);
    res.json(req.body);
  }
);

export default User_Controller;
