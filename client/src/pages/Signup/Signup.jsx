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