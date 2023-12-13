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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values", formData);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Roll No:</label>
        <br />
        <input
          type="text"
          name="roll"
          value={formData.roll}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
