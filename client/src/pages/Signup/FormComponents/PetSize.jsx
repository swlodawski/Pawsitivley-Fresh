import React from "react";



function PetSize({formData, setFormData}) {
    const sizes = [ 'Small', 'Medium', 'Large', 'X-Large']

    const handleCheckBoxChange = (event) => {
        const { value, checked }= event.taget;
        if(checked){
            
        }
    }

    return <div>
           <div className="petSizes-container">     
        {
            sizes.map((sizes) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div id="sizes">
                      <input type="checkbox" id="{sizes}" name="{sizes}" value={formData.sizes} onChange={(event) => setFormData({...formData, sizes: event.target.value })}/>
                      <label htmlFor="{sizes}">{sizes} </label><br></br>
                    </div>
                )
            })
        }
   
       </div>
    </div>;
    }
    
    export default PetSize;