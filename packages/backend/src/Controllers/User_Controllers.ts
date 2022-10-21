import express, { Router, Request, Response } from "express";
import { user_interface } from "@webbshop-app/shared";
import { checkUser, saveUser } from "../Models/userModel";
import { userVerify } from "../services/userVerify";

const User_Controller = express.Router();

User_Controller.post(
  "/",
  async (req: Request<user_interface>, res: Response<string | boolean>) => {
    if (req.body.username != "" && req.body.password != "") {
      try {
        await saveUser(req.body);
        res.send(true);
      } catch {
        res.send("username has already been taken");
      }
    } else {
      res.send("write both username and password");
    }
  }
);

User_Controller.post(
  "/login",
  async (req: Request<user_interface>, res: Response) => {
    const reqBody = req.body;
    const getValidUser = await userVerify(reqBody);
    res.send(getValidUser);
  }
);

// User_Controller.post(
//   "/login",
//   async (req: Request<user_interface>, res: Response) => {
//     const reqBody = req.body;
//     if (reqBody.username != "" && reqBody.password != "") {
//       try {
//         const getUser = await checkUser(reqBody);
//         console.log(getUser);
//         res.send("");
//       } catch {
//         res.send("wrong username or password");
//       }
//     } else {
//       res.send("write both username and password");
//     }
//   }
// );

export default User_Controller;
