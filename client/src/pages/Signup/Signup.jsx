import  { useState } from "react";
import  './signup.css';
import PersonalInfo from "./FormComponents/PersonalInfo";
import PetNum from "./FormComponents/PetNum";
import PetNames from "./FormComponents/PetNames"
import Protien from "./FormComponents/Protien";
import GetToKnow from "./FormComponents/GetToKnow";
import PetSize from "./FormComponents/PetSize";
import PetAllergies from "./FormComponents/PetAllergies"



function SignUp() {
  const [step, setStep]= useState(0);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cats: 0,
    dogs: 0,
    petName: '',
    protien: [],
    sizes: [],
    allergies: [],
  });

  const FormTitles = ['Sign Up!', 'How many pets are in your family?', 'What is their name(s)?', 'What type of proteins do your pets like?', 'Let\'\n s get to know your furbaby!', 'What size is ?', 'Does have any allergies to any of the following?']
  
  const PageDisplay = () => {
    if(step === 0 ) {
      return <PersonalInfo formData={formData} setFormData={setFormData}/>
    } else if (step === 1) {
      return <PetNum formData={formData} setFormData={setFormData} />
    } else if (step === 2) {
      return <PetNames formData={formData} setFormData={setFormData} />
    } else if (step === 3) {
      return <Protien formData={formData} setFormData={setFormData} />
    } else if (step === 4) {
      return <GetToKnow formData={formData} setFormData={setFormData} />
    } else if (step === 5) {
      return <PetSize formData={formData} setFormData={setFormData} />
    } else {
      return <PetAllergies formData={formData} setFormData={setFormData} />
  }
};
  
  return (
    <div className="SignUpForm">
           <div className="progress-bar">
          <div style={{width: step === 0 ? "5%" : step === 1 ? "16.6%" : step === 2 ? "33.3%" : step === 3 ? "50%" : step === 4 ? "66.6%" : step === 5 ? "85.3%":  "100%" }}></div>
        </div>
      <div className="SignUpFormContainer">
   
        <div className="SU-header"><h1>{FormTitles[step]}</h1></div>

        <div className="SU-body">{PageDisplay()}</div>
    
        <div className="SU-footer">
          <button id="prev" disabled={step === 0} onClick={() => {setStep((currPage) => currPage - 1);}}>Prev</button>
          <button id="next" disabled={step === FormTitles.length - 1} onClick={() => {setStep((currPage) => currPage + 1);}}>Next</button>
        </div>

      </div>
    </div>
  );

}


export default SignUp;





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

 


//         <div className="submit-btn">
//             <button type="submit">Submit</button>
//         </div>

//     </form> 
//    </div> 
//   );
// }