import React from "react";

function PetAllergies({formData, setFormData}) {
    const allergies = [ 'Chicken', 'Beef', 'Chicken Broth', 'Liver', 'Turkey', 'Potato', 'Green Beans', 'Butternut Squash', 'Bone broth', 'Corn', 'Carrots', 'Zucchini',  'Peas', 'Brown Rice', 'Eggs', 'Bacon', 'Sweet Potato', 'Cod', 'Fish Broth', 'White Rice', 'Vegetable Broth', 'Fish Broth','Salmon', 'Pumpkin', 'Lamb',]

    const handleCheckboxChange = (e) => {
        const{ value, checked } = e.target;

        if(checked) {
            setFormData({...formData, allergy: [...formData.allergy, value] });
        } else {
            setFormData({...formData, allergy: formData.allergy.filter(allergy => allergy !== value)});
        }
    };

    return <div>
           <div className="allergies-container">    
        {
            allergies.map((allergy) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div id="allergens" key={allergy}>
                      <input type="checkbox" id="{allergy}" name="{allergy}" value={allergy} checked={formData.allergy.includes(allergy)} onChange={handleCheckboxChange}/>
                      <label htmlFor="{allergy}">{allergy} </label><br></br>
                    </div>
                )
            })
        }
   
       </div>
    </div>;
    }
    
    export default PetAllergies;