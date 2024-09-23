import React from "react";

function PetNum({formData, setFormData}) {
return <div>
    
    <div className="petsContainer">
        <div className="cats-container">
            <label>Cats</label><br></br>
            <select name="pets-cats" id="cats" value={formData.cats} onChange={(event) => setFormData({...formData, cats: event.target.value })}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            </div>
            <div className="dogs-container">
            <label>Dogs</label><br></br>
            <select name="pets-dogs" id="dogs" value={formData.dogs} onChange={(event) => setFormData({...formData, dogs: event.target.value })}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            </div>
        </div>
        <div className="note">
            <p>*** If there are over 10 animals in the household please contact us to discuss bulk orders! *** </p>
            </div>
</div>;
}

export default PetNum;