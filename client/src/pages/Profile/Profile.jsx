import React from 'react';
import './Profile.css';

const pets = [
  {
    animal: 'Dog',
    name: 'Auggie',
    size: 'Large',
    allergies: ['Turkey', 'Chicken']
  },
  {
    animal: 'Cat',
    name: 'Oliver',
    size: 'Small',
    allergies: ['Soy']
  },
  {
    animal: 'Dog',
    name: 'Lucy',
    size: 'Medium',
    allergies: ['None']
  }
];

const Profile = () => {
  return (
    <>
    <h1 id='pets-header'>View your Pet Profiles</h1>
    <div className='pets-container'>
      {pets.map((pet, index) => (
        <div key={index} className="pet-profile">
          <h2>{pet.name}</h2>
          <p className="animal">{pet.animal}</p>
          <p className="size">{pet.size}</p>
          <p className="allergies">
            <strong>Allergies:</strong> {pet.allergies.join(', ')}
          </p>
        </div>
      ))} {/* Closing the map function here */}
    </div>
    </>
  );
};

export default Profile;