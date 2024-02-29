// Model1.js

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

function Model1() {

  const OptionsQues1_4 = [
    {value: 1, label: 'Very low'},
    {value: 2, label: 'Somewhat low'},
    {value: 3, label: 'Don\'t know'},
    {value: 4, label: 'Somewhat high'},
    {value: 5, label: 'Very high'}
  ];
  const DefaultOptionQues1_4 = OptionsQues1_4[0];

  const OptionsQues3_5 = [
    {value: 1, label: 'Not at all effective'},
    {value: 2, label: 'Not very effective'},
    {value: 3, label: 'Don\'t know'},
    {value: 4, label: 'Somewhat effective'},
    {value: 5, label: 'Very effective'}
  ];
  const DefaultOptionQues3_5 = OptionsQues3_5[0];

  const OptionsQues9 = [
    {value: 0, label: 'Not at all concerned'},
    {value: 1, label: 'Not very concerned'},
    {value: 2, label: 'Somewhat concerned'},
    {value: 3, label: 'Very concerned'}
  ];
  const DefaultOptionQues9 = OptionsQues9[0];

  const OptionsQues12 = [
    {value: 0, label: 'No knowledge'},
    {value: 1, label: 'A little knowledge'},
    {value: 2, label: 'A lot of knowledge'}
  ];
  const DefaultOptionQues12 = OptionsQues9[0];

  return (
    <div className="Model1">

      <div className="ModelInputs">
        <h3>Answers these questions and hit the Predict button</h3>

        <div className='ModelInput'>
          <h3>opinion_seas_risk : What do you think is your risk of getting sick with the seasonal flu without the vaccine?</h3>
          <Dropdown className='ModelInputsDropdown' options={OptionsQues1_4} value={DefaultOptionQues1_4} placeholder="Select an option"/>
        </div>

        <div className='ModelInput'>
          <h3>doctor_recc_seasonal : Has a doctor recommended the seasonal flu vaccine to you?</h3>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={0} name="ques2"></input>No</label>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={1} name="ques2"></input>Yes</label>
        </div>

        <div className='ModelInput'>
          <h3>opinion_seas_vacc_effective: How effective do you believe the seasonal flu vaccine is?</h3>
          <Dropdown className='ModelInputsDropdown' options={OptionsQues3_5} value={DefaultOptionQues3_5} placeholder="Select an option"/>
        </div>

        <div className='ModelInput'>
          <h3>opinion_h1n1_risk: What do you think is your risk of getting sick with H1N1 flu without the vaccine?</h3>
          <Dropdown className='ModelInputsDropdown' options={OptionsQues1_4} value={DefaultOptionQues1_4} placeholder="Select an option"/>
        </div>

        <div className='ModelInput'>
          <h3>opinion_h1n1_vacc_effective: How effective do you believe the H1N1 vaccine is?</h3>
          <Dropdown className='ModelInputsDropdown' options={OptionsQues3_5} value={DefaultOptionQues3_5} placeholder="Select an option"/>
        </div>

        <div className='ModelInput'>
          <h3>health_insurance: Do you have health insurance?</h3>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={0} name="ques6"></input>No</label>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={1} name="ques6"></input>Yes</label>
        </div>

        <div className='ModelInput'>
          <h3>doctor_recc_h1n1: Has a doctor recommended the H1N1 flu vaccine to you?</h3>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={0} name="ques7"></input>No</label>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={1} name="ques7"></input>Yes</label>
        </div>

        <div className='ModelInput'>
          <h3>chronic_med_condition: Do you have any chronic medical conditions (e.g., asthma, diabetes, heart condition)?</h3>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={0} name="ques8"></input>No</label>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={1} name="ques8"></input>Yes</label>
        </div>

        <div className='ModelInput'>
          <h3>h1n1_concern: How concerned are you about the H1N1 flu?</h3>
          <Dropdown className='ModelInputsDropdown' options={OptionsQues9} value={DefaultOptionQues9} placeholder="Select an option"/>
        </div>

        <div className='ModelInput'>
          <h3>health_worker: Are you a healthcare worker?</h3>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={0} name="ques10"></input>No</label>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={1} name="ques10"></input>Yes</label>
        </div>

        <div className='ModelInput'>
          <h3>behavioral_touch_face: Do you avoid touching your face?</h3>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={0} name="ques11"></input>No</label>
          <label className='RadioButtonLabel'><input className='RadioButton' type="radio" value={1} name="ques11"></input>Yes</label>
        </div>

        <div className='ModelInput'>
          <h3>h1n1_knowledge: How would you rate your level of knowledge about H1N1 flu?</h3>
          <Dropdown className='ModelInputsDropdown' options={OptionsQues12} value={DefaultOptionQues12} placeholder="Select an option"/>
        </div>
        
      </div>

      <div className="ModelInputPredictButton">
        <button className="ModelButton">Predict</button>
      </div>

    </div>
  );
}

export default Model1;