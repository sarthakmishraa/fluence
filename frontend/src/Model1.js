// Model1.js

import { useState } from 'react';

function Model1() {

  const [values, setValues] = useState([""]);
  const [response, setResponse] = useState([""]);

  const handleInputChange = (index, event) => {
    const newInputValues = [...values];
    newInputValues[index] = event.target.value;
    setValues(newInputValues);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/process_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({input: values}),
      });

      const data = await response.json();
      // setResponse(data.prediction);
      if (data.prediction[0] === 1){
        setResponse("Patient is highly likely to be vaccinated for H1N1");
      }
      else if (data.prediction[0] === 0){
        setResponse("Patient is not likely to be vaccinated for H1N1");
      }
      else {
        setResponse("Some error occured");
      }
    }
    catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <div className="Model1">

      <form className="ModelInputs" onSubmit={(e) => {handleSubmit(e)}}>
        <h3>Answers these questions and hit the Predict button</h3>

        <div className='ModelInput'>
          <h3>opinion_seas_risk : What do you think is your risk of getting sick with the seasonal flu without the vaccine?</h3>
          <input value={values[3] || ""} onChange={(event) => handleInputChange(3, event)} required type='number' placeholder='Enter here'/>
        </div>

        <div className='ModelInput'>
          <h3>doctor_recc_seasonal : Has a doctor recommended the seasonal flu vaccine to you?</h3>
          <input value={values[4] || ""} onChange={(event) => handleInputChange(4, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div>

        <div className='ModelInput'>
          <h3>opinion_seas_vacc_effective: How effective do you believe the seasonal flu vaccine is?</h3>
          <input value={values[5] || ""} onChange={(event) => handleInputChange(5, event)} required type='number' placeholder='Enter here'/>
        </div>

        <div className='ModelInput'>
          <h3>opinion_h1n1_risk: What do you think is your risk of getting sick with H1N1 flu without the vaccine?</h3>
          <input value={values[1] || ""} onChange={(event) => handleInputChange(1, event)} required type='number' placeholder='Enter here'/>
        </div>

        <div className='ModelInput'>
          <h3>opinion_h1n1_vacc_effective: How effective do you believe the H1N1 vaccine is?</h3>
          <input value={values[2] || ""} onChange={(event) => handleInputChange(2, event)} required type='number' placeholder='Enter here'/>
        </div>

        <div className='ModelInput'>
          <h3>health_insurance: Do you have health insurance?</h3>
          <input value={values[8] || ""} onChange={(event) => handleInputChange(8, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div>

        <div className='ModelInput'>
          <h3>doctor_recc_h1n1: Has a doctor recommended the H1N1 flu vaccine to you?</h3>
          <input value={values[0] || ""} onChange={(event) => handleInputChange(0, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div>

        {/* <div className='ModelInput'>
          <h3>chronic_med_condition: Do you have any chronic medical conditions (e.g., asthma, diabetes, heart condition)?</h3>
          <input value={values[7] || ""} onChange={(event) => handleInputChange(7, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div> */}

        <div className='ModelInput'>
          <h3>h1n1_concern: How concerned are you about the H1N1 flu?</h3>
          <input value={values[7] || ""} onChange={(event) => handleInputChange(7, event)} required type='number' placeholder='Enter here'/>
        </div>

        <div className='ModelInput'>
          <h3>health_worker: Are you a healthcare worker?</h3>
          <input value={values[6] || ""} onChange={(event) => handleInputChange(6, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div>

        {/* <div className='ModelInput'>
          <h3>behavioral_touch_face: Do you avoid touching your face?</h3>
          <input value={values[10] || ""} onChange={(event) => handleInputChange(10, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div> */}

        <div className='ModelInput'>
          <h3>h1n1_knowledge: How would you rate your level of knowledge about H1N1 flu?</h3>
          <input value={values[9] || ""} onChange={(event) => handleInputChange(9, event)} required type='number' placeholder='Enter here'/>
        </div>
      
        <div className="ModelInputPredictButton">
          <button className="ModelButton">Predict</button>
        </div>

        {response && <h3>{response}</h3>}
        
      </form>

    </div>
  );
}

export default Model1;