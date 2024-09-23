import React from "react";

function PetNames({formData , setFormData}) {
    return <div>
                <div className="pet-name-container">
        <label htmlFor="pet-name">What is their name(s)?
        </label>
        <input placeholder="Pet Name" name="pet-name" id="pet-name" type="pet-name" value={formData.PetNames} onChange={(event) => setFormData({...formData, PetNames: event.target.value })} />
        </div>
    </div>;
    }
    
    export default PetNames;