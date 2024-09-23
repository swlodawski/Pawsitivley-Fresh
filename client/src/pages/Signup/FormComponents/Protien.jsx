import React from "react";

function Protien() {
    return <div>
          <div className="protien-container">
            <p>What type of proteins do your pets like?</p>

        <input type="checkbox" id="opt1" name="opt1" value="All" />
        <label htmlFor="opt1"> All Protein Choices</label><br></br>
        <input type="checkbox" id="opt2" name="opt2" value="Chicken" />
        <label htmlFor="opt2">Chicken</label><br></br>
        <input type="checkbox" id="opt3" name="opt3" value="Turkey" />
        <label htmlFor="opt3">Turkey</label><br></br>
        <input type="checkbox" id="opt4" name="opt4" value="Pig" />
        <label htmlFor="opt4">Pig</label><br></br>
        <input type="checkbox" id="opt5" name="opt5" value="Fish" />
        <label htmlFor="opt5">Fish</label><br></br>
        <input type="checkbox" id="opt6" name="opt6" value="Beef" />
        <label htmlFor="opt6">Beef</label><br></br>
        </div>
    </div>;
    }
    
    export default Protien;