import React from "react";

function PetNames({ formData, setFormData }) {
  const totalPets = formData.cats + formData.dogs;

  const handleNameChange = (i, value) => {
    const updateNames = [...formData.petNames];
    updateNames[i] = value;
    setFormData({ ...formData, petNames: updateNames });
  };

  return (
    <div>
        {Array.from({ length: totalPets}, (_, i) => (
            <div className="pet-name-container" key={i}>
                <input
                    placeholder={`Pet Name ${i + 1}`}
                    name={`pet-name-${i + 1}`}
                    id={`pet-name-${i + 1}`}
                    type="text"
                    value={formData.petNames[i] || ''}
                    onChange={(event) => handleNameChange(i, event.target.value)}
                />
            </div>
        ))}
    </div>
  );
}

export default PetNames;
