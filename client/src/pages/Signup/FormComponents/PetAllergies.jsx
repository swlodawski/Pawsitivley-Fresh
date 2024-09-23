import React from "react";

function PetAllergies({formData, setFormData}) {
    const allergies = [ 'Chicken', 'Beef', 'Chicken Broth', 'Liver', 'Turkey', 'Potato', 'Green Beans', 'Butternut Squash', 'Bone broth', 'Corn', 'Carrots', 'Zucchini',  'Peas', 'Brown Rice', 'Eggs', 'Bacon', 'Sweet Potato', 'Cod', 'Fish Broth', 'White Rice', 'Vegetable Broth', 'Fish Broth','Salmon', 'Pumpkin', 'Lamb',]

    return <div>
           <div className="allergies-container">
       <p>Does ____ have any allergies to any of the following?</p>       
        {
            allergies.map((allergies) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div id="allergens">
                      <input type="checkbox" id="{allergies}" name="{allergies}" value={formData.allergies} onChange={(event) => setFormData({...formData, allergies: event.target.value })}/>
                      <label htmlFor="{allergies}">{allergies} </label><br></br>
                    </div>
                )
            })
        }
   
       </div>
    </div>;
    }
    
    export default PetAllergies;