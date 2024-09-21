// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation } from '@apollo/client';
// import Auth from '../../utils/auth';
// import { ADD_USER } from '../../utils/mutations';
import  './signup.css';

function Signup() {
    // const [formState, setFormState] = useState({username: '', email: '', password: ''});
    // const [addUser] = useMutation(ADD_USER);

    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     const mutationResponse = await addUser({
    //         variables: {
    //             email: formState.email,
    //             password: formState.password,
    //         },
    //     });
    //     const token = mutationResponse.data.addUser.token;
    //     Auth.Login(token);
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value, 
    //     });
    // };
  const allergies = [ 'Chicken', 'Beef', 'Chicken Broth', 'Liver', 'Turkey', 'Potato', 'Green Beans', 'Butternut Squash', 'Bone broth', 'Corn', 'Carrots', 'Zucchini',  'Peas', 'Brown Rice', 'Eggs', 'Bacon', 'Sweet Potato', 'Cod', 'Fish Broth', 'White Rice', 'Vegetable Broth', 'Fish Broth','Salmon', 'Pumpkin', 'Lamb',]

 


    return (
    <div className="container">
    <p> SignUp</p>
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
        <label htmlFor="password">Email Address:</label>
        <input placeholder="********" name="password" id="password" type="password"/>
        </div>

        <div className="pets-container">
            <label htmlFor="pets">How many pets are in your family?</label>
            <select name="pets-cats" id="cats">
                <option value={null}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>

            <select name="pets-dogs" id="dogs">
                <option value={null}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>

            <p>*** If there are over 10 animals in the household please contact us to discuss bulk orders! *** </p>
        </div>

        <div className="pet-name-container">
        <label htmlFor="pet-name">What is their name(s)?
        </label>
        <input placeholder="pet-name" name="pet-name" id="pet-name" type="pet-name" />
        </div>
        
        <div className="protien-container">
            <p>What type of proteins do your pets like?</p>

        <input type="checkbox" id="opt1" name="opt1" value="All" />
        <label htmlFor="opt1"> All Protein Choices</label><br></br>
        <input type="checkbox" id="opt2" name="opt2" value="Chicken" />
        <label htmlFor="opt2">Chicken</label><br></br>
        <input type="checkbox" id="opt3" name="opt3" value="Turkey" />
        <label htmlFor="opt3">Turkey</label><br></br>
        <input type="checkbox" id="opt4" name="opt4" value="Pig" />
        <label htmlFor="opt4">Pig</label><br></br>
        <input type="checkbox" id="opt5" name="opt5" value="Fish" />
        <label htmlFor="opt5">Fish</label><br></br>
        <input type="checkbox" id="opt6" name="opt6" value="Beef" />
        <label htmlFor="opt6">Beef</label><br></br>
        </div>

        <p>Let's get to know ______:</p>

       <div className="allergies-container">
       <p>Does ____ have any allergies to any of the following?</p>       
        {
            allergies.map((allergies) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div id="allergens">
                      <input type="checkbox" id="{allergies}" name="{allergies}" value="{allergies}" />
                      <label htmlFor="{allergies}">{allergies} </label><br></br>
                    </div>
                )
            })
        }
   
       </div>



        <div className="submit-btn">
            <button type="submit">Submit</button>
        </div>

    </form> 
   </div> 
  );
}


export default Signup; 