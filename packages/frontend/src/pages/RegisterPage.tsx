import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendToBackend = async () => {
    const send = await axios.post("/createUser", { username, password });
    console.log(send.data);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form className="login">
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
        <button onClick={(e) => sendToBackend}> send </button>
      </form>
    </div>
  );
}
