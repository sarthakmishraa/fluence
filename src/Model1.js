// Model1.js

import { useState } from 'react';

function Model1() {

  const [values, setValues] = useState([""]);
  const [response, setResponse] = useState([""]);
  const [selectedOption1, setSelectedOption1] = useState([""]);
  const [selectedOption2, setSelectedOption2] = useState([""]);
  const [selectedOption3, setSelectedOption3] = useState([""]);
  const [selectedOption4, setSelectedOption4] = useState([""]);
  const [selectedOption5, setSelectedOption5] = useState([""]);
  const [selectedOption6, setSelectedOption6] = useState([""]);
  const [selectedOption7, setSelectedOption7] = useState([""]);
  const [selectedOption8, setSelectedOption8] = useState([""]);
  const [selectedOption9, setSelectedOption9] = useState([""]);
  const [selectedOption10, setSelectedOption10] = useState([""]);

  const onValueChange1 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption1(event.target.value);
  }
  
  const onValueChange2 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption2(event.target.value);
  }

  const onValueChange3 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption3(event.target.value);
  }
  
  const onValueChange4 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption4(event.target.value);
  }

  const onValueChange5 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption5(event.target.value);
  }
  
  const onValueChange6 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption6(event.target.value);
  }
  const onValueChange7 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption7(event.target.value);
  }
  
  const onValueChange8 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption8(event.target.value);
  }

  const onValueChange9 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption9(event.target.value);
  }
  
  const onValueChange10 = (index, event) => {
    values[index] = event.target.value;
    setSelectedOption10(event.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setValues(values);
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
          <h3>What do you think is your risk of getting sick with the seasonal flu without the vaccine?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '1' name='opinion_seas_risk' onChange={(event) => onValueChange1(3, event)} checked={selectedOption1 === '1'}></input>Very Low</label>

            <label><input className='RadioButton' type='radio' value = '2' name='opinion_seas_risk' onChange={(event) => onValueChange1(3, event)} checked={selectedOption1 === '2'}></input>Somewhat low</label>
            
            <label><input className='RadioButton' type='radio' value = '3' name='opinion_seas_risk' onChange={(event) => onValueChange1(3, event)} checked={selectedOption1 === '3'}></input>Don't know</label>

            <label><input className='RadioButton' type='radio' value = '4' name='opinion_seas_risk' onChange={(event) => onValueChange1(3, event)} checked={selectedOption1 === '4'}></input>Somewhat high</label>

            <label><input className='RadioButton' type='radio' value = '5' name='opinion_seas_risk' onChange={(event) => onValueChange1(3, event)} checked={selectedOption1 === '5'}></input>Very High</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>Has a doctor recommended the seasonal flu vaccine to you?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '0' name='doctor_recc_seasonal' onChange={(event) => onValueChange2(4, event)} checked={selectedOption2 === '0'}></input>No</label>

            <label><input className='RadioButton' type='radio' value = '1' name='doctor_recc_seasonal' onChange={(event) => onValueChange2(4, event)} checked={selectedOption2 === '1'}></input>Yes</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>How effective do you believe the seasonal flu vaccine is?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '1' name='opinion_seas_vacc_effective' onChange={(event) => onValueChange3(5, event)} checked={selectedOption3 === '1'}></input>Very Low</label>

            <label><input className='RadioButton' type='radio' value = '2' name='opinion_seas_vacc_effective' onChange={(event) => onValueChange3(5, event)} checked={selectedOption3 === '2'}></input>Somewhat low</label>
            
            <label><input className='RadioButton' type='radio' value = '3' name='opinion_seas_vacc_effective' onChange={(event) => onValueChange3(5, event)} checked={selectedOption3 === '3'}></input>Don't know</label>

            <label><input className='RadioButton' type='radio' value = '4' name='opinion_seas_vacc_effective' onChange={(event) => onValueChange3(5, event)} checked={selectedOption3 === '4'}></input>Somewhat high</label>

            <label><input className='RadioButton' type='radio' value = '5' name='opinion_seas_vacc_effective' onChange={(event) => onValueChange3(5, event)} checked={selectedOption3 === '5'}></input>Very High</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>What do you think is your risk of getting sick with H1N1 flu without the vaccine?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '1' name='opinion_h1n1_risk' onChange={(event) => onValueChange4(1, event)} checked={selectedOption4 === '1'}></input>Very Low</label>

            <label><input className='RadioButton' type='radio' value = '2' name='opinion_h1n1_risk' onChange={(event) => onValueChange4(1, event)} checked={selectedOption4 === '2'}></input>Somewhat low</label>
            
            <label><input className='RadioButton' type='radio' value = '3' name='opinion_h1n1_risk' onChange={(event) => onValueChange4(1, event)} checked={selectedOption4 === '3'}></input>Don't know</label>
            
            <label><input className='RadioButton' type='radio' value = '4' name='opinion_h1n1_risk' onChange={(event) => onValueChange4(1, event)} checked={selectedOption4 === '4'}></input>Somewhat high</label>
            
            <label><input className='RadioButton' type='radio' value = '5' name='opinion_h1n1_risk' onChange={(event) => onValueChange4(1, event)} checked={selectedOption4 === '5'}></input>Very High</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>How effective do you believe the H1N1 vaccine is?</h3>
          <div className='RadioButtons'>            
            <label><input className='RadioButton' type='radio' value = '1' name='opinion_h1n1_vacc_effective' onChange={(event) => onValueChange5(2, event)} checked={selectedOption5 === '1'}></input>Very Low</label>
            
            <label><input className='RadioButton' type='radio' value = '2' name='opinion_h1n1_vacc_effective' onChange={(event) => onValueChange5(2, event)} checked={selectedOption5 === '2'}></input>Somewhat low</label>
            
            <label><input className='RadioButton' type='radio' value = '3' name='opinion_h1n1_vacc_effective' onChange={(event) => onValueChange5(2, event)} checked={selectedOption5 === '3'}></input>Don't know</label>
            
            <label><input className='RadioButton' type='radio' value = '4' name='opinion_h1n1_vacc_effective' onChange={(event) => onValueChange5(2, event)} checked={selectedOption5 === '4'}></input>Somewhat high</label>
   
            <label><input className='RadioButton' type='radio' value = '5' name='opinion_h1n1_vacc_effective' onChange={(event) => onValueChange5(2, event)} checked={selectedOption5 === '5'}></input>Very High</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>Do you have health insurance?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '0' name='health_insurance' onChange={(event) => onValueChange6(8, event)} checked={selectedOption6 === '0'}></input>No</label>

            <label><input className='RadioButton' type='radio' value = '1' name='health_insurance' onChange={(event) => onValueChange6(8, event)} checked={selectedOption6 === '1'}></input>Yes</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>Has a doctor recommended the H1N1 flu vaccine to you?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '0' name='doctor_recc_h1n1' onChange={(event) => onValueChange7(0, event)} checked={selectedOption7 === '0'}></input>No</label>
            
            <label><input className='RadioButton' type='radio' value = '1' name='doctor_recc_h1n1' onChange={(event) => onValueChange7(0, event)} checked={selectedOption7 === '1'}></input>Yes</label>
          </div>
        </div>

        {/* <div className='ModelInput'>
          <h3>chronic_med_condition: Do you have any chronic medical conditions (e.g., asthma, diabetes, heart condition)?</h3>
          <input value={values[7] || ""} onChange={(event) => handleInputChange(7, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div> */}

        <div className='ModelInput'>
          <h3>How concerned are you about the H1N1 flu?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '1' name='h1n1_concern' onChange={(event) => onValueChange8(7, event)} checked={selectedOption8 === '1'}></input>Very Low</label>
            
            <label><input className='RadioButton' type='radio' value = '2' name='h1n1_concern' onChange={(event) => onValueChange8(7, event)} checked={selectedOption8 === '2'}></input>Somewhat low</label>
            
            <label><input className='RadioButton' type='radio' value = '3' name='h1n1_concern' onChange={(event) => onValueChange8(7, event)} checked={selectedOption8 === '3'}></input>Don't know</label>
            
            <label><input className='RadioButton' type='radio' value = '4' name='h1n1_concern' onChange={(event) => onValueChange8(7, event)} checked={selectedOption8 === '4'}></input>Somewhat high</label>
      
            <label><input className='RadioButton' type='radio' value = '5' name='h1n1_concern' onChange={(event) => onValueChange8(7, event)} checked={selectedOption8 === '5'}></input>Very High</label>
          </div>
        </div>

        <div className='ModelInput'>
          <h3>Are you a healthcare worker?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '0' name='health_worker' onChange={(event) => onValueChange9(6, event)} checked={selectedOption9 === '0'}></input>No</label>

            <label><input className='RadioButton' type='radio' value = '1' name='health_worker' onChange={(event) => onValueChange9(6, event)} checked={selectedOption9 === '1'}></input>Yes</label>
          </div>
        </div>

        {/* <div className='ModelInput'>
          <h3>behavioral_touch_face: Do you avoid touching your face?</h3>
          <input value={values[10] || ""} onChange={(event) => handleInputChange(10, event)} required type='number' placeholder='Enter 0 for No and 1 for Yes'/>
        </div> */}

        <div className='ModelInput'>
          <h3>How would you rate your level of knowledge about H1N1 flu?</h3>
          <div className='RadioButtons'>
            <label><input className='RadioButton' type='radio' value = '1' name='h1n1_knowledge' onChange={(event) => onValueChange10(9, event)} checked={selectedOption10 === '1'}></input>Very Low</label>

            <label><input className='RadioButton' type='radio' value = '2' name='h1n1_knowledge' onChange={(event) => onValueChange10(9, event)} checked={selectedOption10 === '2'}></input>Somewhat low</label>
            
            <label><input className='RadioButton' type='radio' value = '3' name='h1n1_knowledge' onChange={(event) => onValueChange10(9, event)} checked={selectedOption10 === '3'}></input>Don't know</label>
            
            <label><input className='RadioButton' type='radio' value = '4' name='h1n1_knowledge' onChange={(event) => onValueChange10(9, event)} checked={selectedOption10 === '4'}></input>Somewhat high</label>

            <label><input className='RadioButton' type='radio' value = '5' name='h1n1_knowledge' onChange={(event) => onValueChange10(9, event)} checked={selectedOption10 === '5'}></input>Very High</label>
          </div>
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