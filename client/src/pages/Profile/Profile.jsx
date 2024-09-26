import React, { useState } from 'react';
import './Profile.css';
import { useQuery, gql } from "@apollo/client";

const QUERY_PET = gql`
query Pets {
  pets {
    name
    size
    animal
    allergies
  }
}`;

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_PET);
  
  const [pets, setPets] = useState(data?.pets || []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddPet = () => {
    const newPet = {
      name: prompt("Enter pet's name:"),
      size: prompt("Enter pet's size:"),
      animal: prompt("Enter pet's animal type:"),
      allergies: prompt("Enter pet's allergies (comma-separated):").split(','),
    };
    setPets([...pets, newPet]);
  };

  const handleUpdatePet = (index) => {
    const updatedPet = {
      name: prompt("Enter new pet's name:", pets[index].name),
      size: prompt("Enter new pet's size:", pets[index].size),
      animal: prompt("Enter new pet's animal type:", pets[index].animal),
      allergies: prompt("Enter new pet's allergies (comma-separated):", pets[index].allergies.join(',')).split(','),
    };
    const newPets = [...pets];
    newPets[index] = updatedPet;
    setPets(newPets);
  };

  const handleDeletePet = (index) => {
    const newPets = pets.filter((_, i) => i !== index);
    setPets(newPets);
  };

  return (
    <>
      <h1 id='pets-header'>View your Pet Profiles</h1>
      <div className='pets-container'>
        {pets.map((pet, index) => (
          <div key={index} className="pet-profile">
            <h2>{pet.name}</h2>
            <p className="size">{pet.size}</p>
            <p className="animal">{pet.animal}</p> 
            <p className="allergies">
              <strong>Allergies:</strong> {pet.allergies.join(', ')}
            </p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button id="add-pet-btn" onClick={handleAddPet}>Add Another Pet</button>
        <button className="action-btn" onClick={() => handleUpdatePet(0)}>Update My Pet</button>
        <button className="action-btn" onClick={() => handleDeletePet(0)}>Delete Existing Pet</button>
      </div>
    </>
  );
};

export default Profile;