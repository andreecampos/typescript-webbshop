import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user_interface } from "@webbshop-app/shared";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [res, setRes] = useState<string>("");
  const [enableButton, setEnableButton] = useState<boolean>(true);

  const navigate = useNavigate();

  const sendToBackend = async (): Promise<void> => {
    const send = await axios.post("/CreateUser", {
      username,
      password,
    });

    const getData = send.data;
    setRes(getData);
    if (getData === true) {
      setEnableButton(false);
    }
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <div className="Register">
        username{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        password{" "}
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => sendToBackend()}> send </button>
      </div>

      <div>
        <>{res} </>
      </div>

      <div className="buttonToLogin">
        <button disabled={enableButton} onClick={(e) => navigate("/login")}>
          {" "}
          go to login{" "}
        </button>
      </div>
    </div>
  );
}
