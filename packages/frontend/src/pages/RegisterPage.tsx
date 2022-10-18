import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const sendToBackend = async (): Promise<void | string> => {
    const send = await axios.post("/CreateUser", { username, password });
    console.log(send.data);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form className="login" onSubmit={sendToBackend}>
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
        <button type="submit"> send </button>
      </form>
    </div>
  );
}
