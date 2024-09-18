import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations'
// import { LOGIN_USER } from '../utils/mutations
// This will be where we bring in the MUTATIONS to adduser from client side.

function Login(props) {
  const [ formState, setFormState] = useState({ password: '', email: '', })
  const [loginUser] = useMutation(LOGIN_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefaultr();
    const mutationsResponse = await loginUser({
      variables: {
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
        <div><h1>Register</h1>
        <p>User registration available soon</p></div><br />
        <h1>Login</h1>
        <p>Login page coming soon!</p>
      </div>
    );
  };
  
  export default Login;