import React from 'react';
import "./Vstyles.css";

function Visualize(){
    return(
        <div className = "visualize-container">
            <h1>Checkout the visualization here!</h1><br></br>
            
            <iframe title="final_data" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=04e6b170-6c6a-4c65-b547-171bb245c171&autoAuth=true&ctid=9ff218eb-de4f-4e3e-95c4-d3cae83d933a"></iframe>
        </div> 
    )
}

export default Visualize;