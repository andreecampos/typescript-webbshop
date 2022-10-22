import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user_interface } from "@webbshop-app/shared";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

axios.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    config.headers["authorization"] = `Bearer ${jwt}`;
  }
  return config;
});

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phoneNr, setPhoneNr] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [res, setRes] = useState<string | user_interface>("");
  const [enableButton, setEnableButton] = useState<boolean>(true);

  const navigate = useNavigate();

  const sendToBackend = async (): Promise<void> => {
    const send = await axios.post<user_interface>("/CreateUser", {
      username,
      mail,
      phoneNr,
      address,
      password,
    });

    const getData = send.data;
    setRes(getData);
    if (typeof getData === "boolean") {
      setEnableButton(false);
      setRes("");
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
        mail{" "}
        <input
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        Phone number{" "}
        <input
          type="number"
          value={phoneNr}
          onChange={(e) => setPhoneNr(Number(e.target.value))}
        />
        Address{" "}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
