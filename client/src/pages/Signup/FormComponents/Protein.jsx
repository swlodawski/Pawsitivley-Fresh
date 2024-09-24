import React from "react";

function Protein({formData, setFormData}) {
    const proteins = [ 'Chicken', 'Turkey', 'Pig', 'Fish', 'Beef'];

   const handleCheckboxChange = (e) => {
        const{ value, checked } = e.target;

        if(checked) {
            setFormData({...formData, protein: [...formData.protein, value] });
        } else {
            setFormData({...formData, protein: formData.protein.filter(protein => protein !== value)});
        }
    };

    return <div>
           <div className="protein-container">     
        {
            proteins.map((protein) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div id="protein" key={protein}>
                      <input type="checkbox" id="{protein}" name="{protein}" value={protein}  checked={formData.protein.includes(protein)} onChange={handleCheckboxChange}/>
                      <label htmlFor="{protein}">{protein} </label><br></br>
                    </div>
                )
            })
        }
   
       </div>
    </div>;
    }

export default Protein;
