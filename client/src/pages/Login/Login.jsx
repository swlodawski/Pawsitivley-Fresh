import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations'
// import { LOGIN_USER } from '../utils/mutations
// This will be where we bring in the MUTATIONS to adduser from client side.

<<<<<<< HEAD
function Signup(props) {
  const [ formState, setFormState] = useState({ username: '', password: '', email: '', })
  const [addUser] = useMutation(ADD_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationsResponse = await addUser({
      variables: {
        email: formState.email,
        username: formState.username,
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
}

=======
>>>>>>> c82e3cecc08a4736d2a71541e4739e417e93f652
function Login(props) {
  const [ formState, setFormState] = useState({ password: '', email: '', })
  const [loginUser] = useMutation(LOGIN_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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

<<<<<<< HEAD
=======
    return (
      <div>
        <div><h1>Register</h1>
        <p>User registration available soon</p></div><br />
        <h1>Login</h1>
        <p>Login page coming soon!</p>
      </div>
    );
  };
>>>>>>> c82e3cecc08a4736d2a71541e4739e417e93f652
  
  export default Login;