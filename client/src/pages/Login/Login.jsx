import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations'
// This will be where we bring in the MUTATIONS to adduser from client side.

function Login(props) {
  const [ formState, setFormState] = useState({ username: '', email: '', password: '' })
  const [loginUser] = useMutation(LOGIN_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationsResponse = await loginUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password
      },
    });
  };

  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

    return (
      <div>
        <h1>Login</h1>
        <form> 
        <div className="username-container">
        <label htmlFor="userName">Username:</label>
        <input placeholder="username" name="username" id="username" type="username"/>
        </div>

        <div className="email-container">
        <label htmlFor="email">Email Address:</label>
        <input placeholder="email" name="email" id="email" type="email" />
        </div>

        <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input placeholder="********" name="password" id="password" type="password"/>
        </div>
 
        <div className="submit-btn">
            <button type="submit">Submit</button>
        </div>

    </form> 
      </div>
    );
  };
  
  export default Login;