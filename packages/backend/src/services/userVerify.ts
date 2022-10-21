import { user_interface } from "@webbshop-app/shared";
import { checkUser } from "../Models/userModel";
import jwt from "jsonwebtoken";

const JWT_SECRET = "hgvdfhbsadfvasdfjvdf";

export const userVerify = async (items: user_interface) => {
  if (items.username != "" && items.password != "") {
    try {
      const getUser = await checkUser(items);
      if (getUser && getUser._id) {
        const User_id = getUser._id.toString();
        const token = jwt.sign(
          { user: getUser.username, userId: User_id },
          JWT_SECRET,
          {
            expiresIn: "1800s",
          }
        );
        return { token };
      }
    } catch {
      return "wrong username or password";
    }
  } else {
    return "write both username and password";
  }
};
