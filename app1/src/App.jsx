import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [roll, setRoll] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values", name, email, roll);
  };
  useEffect(() => console.log(name, email, roll), [name, email, roll]);
  return (
    <>
      <div className="App">
        <form>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Roll No:</label>
          <br />
          <input
            type="text"
            name="rollno"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
