import React from 'react';
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
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pets = data.pets; 

  return (
    <>
      <h1 id='pets-header'>View your Pet Profiles</h1>
      <div className='pets-container'>
        {pets.map((pet) => (
          <div key={pet._id} className="pet-profile">
            <h2>{pet.name}</h2>
            <p className="animal">{pet.animal}</p>
            <p className="size">{pet.size}</p>
            <p className="allergies">
              <strong>Allergies:</strong> {pet.allergies.join(', ')}
            </p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button id="add-pet-btn">Add Another Pet</button>
      </div>
    </>
  );
};

export default Profile;
