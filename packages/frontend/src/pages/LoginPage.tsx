import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [res, setRes] = useState<string>("");

  const sendToBackend = async (): Promise<void | string> => {
    console.log(username, password);
    const send = await axios.post("/CreateUser/login", { username, password });
    setRes(send.data);
  };

  return (
    <div>
      <h1>LoginPage</h1>

      <div className="login">
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
      {res}
    </div>
  );
}
