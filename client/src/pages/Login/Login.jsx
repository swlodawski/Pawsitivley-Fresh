import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import './Login.css';
// import { LOGIN_USER } from '../../utils/mutations';

function Login(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // const [loginUser] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Uncomment and implement mutation logic here
    // const mutationResponse = await loginUser({
    //   variables: { username: formState.username, email: formState.email, password: formState.password },
    // });
    // Handle response or errors
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleFormSubmit}> 
      <h1 className="login">Login</h1>
        <div className="username-container">
          <label htmlFor="username">USERNAME:</label>
          <input 
            placeholder="Username" 
            name="username" 
            id="username" 
            type="text" 
            value={formState.username} 
            onChange={handleChange} 
          />
        </div>

    
        <div className="password-container">
          <label htmlFor="password">PASSWORD:</label>
          <input 
            placeholder="********" 
            name="password" 
            id="password" 
            type="password" 
            value={formState.password} 
            onChange={handleChange} 
          />
        </div>
 
        <div className="submit-btn" >
          <button type="submit">Submit</button>
        </div>
      </form> 
    </div>
  );
}

export default Login;
