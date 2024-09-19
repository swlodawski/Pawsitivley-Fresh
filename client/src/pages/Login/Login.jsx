import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations'
// import { LOGIN_USER } from '../utils/mutations
// This will be where we bring in the MUTATIONS to adduser from client side.

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
}

  
  export default Login;