import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios"; // Import Axios
import "./register.scss";

const Register = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  });
  // State to manage error message
  const [error, setError] = useState("");

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate()
  // Function to handle form submission
  const handleSubmit = async (e) => { // Mark as async
    e.preventDefault();
    try {
      // Send formData to the backend for registration
      const response = await axios.post("http://localhost:5000/api/auth/register", formData); // Change inputs to formData
      console.log("Registration successful:", response.data);
      navigate("/")
      // Clear form data after successful registration
      setFormData({
        username: "",
        email: "",
        password: "",
        name: ""
      });
      setError(""); // Clear any previous error
    } catch (err) {
      // Handle registration error
      if (err.response) {
        setError(err.response.data.message); // Set error message from server response
      } else {
        setError("Something went wrong. Please try again."); // Set generic error message
      }
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>CONNECT</h1>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={formData.username} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
            />
            <button type="submit">Register</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
