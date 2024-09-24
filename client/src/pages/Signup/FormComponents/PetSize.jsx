import React from "react";



function PetSize({formData, setFormData}) {
    const sizes = [ 'Small', 'Medium', 'Large', 'X-Large']


    return <div>
           <div className="petSizes-container">     
        {
            sizes.map((size) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div id="sizes" key={size}>
                      <input type="radio" id="{size}" name="{size}" value={size} checked={formData.sizes === size} onChange={(event) => setFormData({...formData, sizes: event.target.value })}/>
                      <label htmlFor="{size}">{size} </label><br></br>
                    </div>
                )
            })
        }
   
       </div>
    </div>;
    }
    
    export default PetSize;