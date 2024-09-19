import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = ({email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSuubmit = async (e) => {
        e.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                
            }
        })
    }

}
// Brought signup function from login page. Will most likely noty need it because Ms Nevahs is perfect but got it off login page to separate concerns.

// function Signup(props) {
//     const [ formState, setFormState] = useState({ username: '', password: '', email: '', })
//     const [addUser] = useMutation(ADD_USER)
  
//     const handleFormSubmit = async (event) => {
//       event.preventDefaultr();
//       const mutationsResponse = await addUser({
//         variables: {
//           email: formState.email,
//           username: formState.username,
//           password: formState.password
//         },
//       });
//     };
  
//     const handleChange = (event) => {
//       const { name, value} = event.target;
//       setFormState({
//         ...formState,
//         [name]: value
//       });
//     };
//   }
//   