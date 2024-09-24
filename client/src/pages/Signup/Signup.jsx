import { useState } from "react";
import "./signup.css";
import PersonalInfo from "./FormComponents/PersonalInfo";
import PetNum from "./FormComponents/PetNum";
import PetNames from "./FormComponents/PetNames";
import Protein from "./FormComponents/Protein";
import GetToKnow from "./FormComponents/GetToKnow";
import PetSize from "./FormComponents/PetSize";
import PetAllergies from "./FormComponents/PetAllergies";

function SignUp() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cats: 0,
    dogs: 0,
    petNames: [],
    protein: [],
    sizes: "",
    allergy: [],
  });

  const totalPets = formData.cats + formData.dogs;

  const FormTitles = [
    "Sign Up!",
    "How many pets are in your family?",
    totalPets === 0 ? "Please add a pet!" : totalPets === 1 ? "What is their name?" : "What are their names?",
    "What type of proteins do your pets like?",
    "Let'\n s get to know your furbaby!",
    "What size is ?",
    "Does have any allergies to any of the following?",
  ];

  const PageDisplay = () => {
    if (step === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <PetNum formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <PetNames formData={formData} setFormData={setFormData} />;
    } else if (step === 3) {
      return <Protein formData={formData} setFormData={setFormData} />;
    } else if (step === 4) {
      return <GetToKnow formData={formData} setFormData={setFormData} />;
    } else if (step === 5) {
      return <PetSize formData={formData} setFormData={setFormData} />;
    } else {
      return <PetAllergies formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="SignUpForm">
      <div className="progress-bar">
        <div
          style={{
            width:
              step === 0
                ? "5%"
                : step === 1
                ? "16.6%"
                : step === 2
                ? "33.3%"
                : step === 3
                ? "50%"
                : step === 4
                ? "66.6%"
                : step === 5
                ? "85.3%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="SignUpFormContainer">
        <div className="SU-header">
          <h1>{FormTitles[step]}</h1>
        </div>

        <div className="SU-body">{PageDisplay()}</div>

        <div className="SU-footer">
          <button
            id="prev"
            disabled={step === 0}
            onClick={() => {
              setStep((currPage) => currPage - 1);
            }}
          >
            {step === 0 ? '' : 'Prev'}
          </button>
          <button
            id="next"
            disabled={step === 2 && totalPets === 0}
            onClick={() => {
              if(step === FormTitles.length - 1 ) {
                alert('FORM SUBMITTED');
                console.log(formData);
                console.log(totalPets)
              } else {
                setStep((currPage) => currPage + 1);
              }
            }}
          >
            {step === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;