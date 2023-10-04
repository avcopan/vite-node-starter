import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState(null);

  const getHello = async () => {
    const response = await axios.get("/api/hello");
    setMessage(response.data.message);
  };

  return (
    <div>
      <button onClick={getHello}>Message is: {message}</button>
    </div>
  );
}

export default App;
