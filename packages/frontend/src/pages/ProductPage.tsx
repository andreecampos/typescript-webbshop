import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const zess = async () => {
  const zes1 = await axios.get("/CreateUser/sale");
  //const zes2 = await axios.get("/testToken");
};

export default function ProductPage() {
  return (
    <div>
      ProductPage
      <button onClick={(e) => zess()}> check</button>
    </div>
  );
}
