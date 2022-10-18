import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import User_Controller from "./Controllers/User_Controllers";

const app: Application = express();
app.use(cors());
app.use(json());
app.use("/CreateUser", User_Controller);

const port: number = parseInt(process.env.SERVER_PORT || "3001");

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
