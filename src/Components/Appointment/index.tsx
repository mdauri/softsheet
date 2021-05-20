import React, { useEffect, useState } from "react"

import { AppointmentStep1 } from '../AppointmentStep1';
import { AppointmentStep2 } from '../AppointmentStep2';
import { AppointmentStep3 } from '../AppointmentStep3';
import { AppointmentStep4 } from '../AppointmentStep4';
import { AppointmentStep5 } from "../AppointmentStep5";

import { useAppontments } from "../../hooks/useAppointments";

interface AppointmentProps {
  onRequestClose: () => void;
}

export function Appointment({ onRequestClose }: AppointmentProps) {
  const { _reset: ResetStep, _next: NextStep, _prev: PreviousStep } = useAppontments();

  useEffect(() => {
    ResetStep();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const [wizardData, setWizardData] = useState(
    {
      currentStep: 1,
      email: '',
      username: '',
      password: '',
    }
  );  
  
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget
    
    // this.setState({
    //   [name]: value
    // })    
    setWizardData({ ...wizardData, [name]: value });
  }
   
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { email, username, password } = wizardData
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
  }
  
  function _next() {
    let currentStep = wizardData.currentStep
    currentStep = currentStep >= 5? 5: currentStep + 1
    // this.setState({
    //   currentStep: currentStep
    // })
    setWizardData({ ...wizardData, currentStep: currentStep });
    NextStep();
    
  }
    
  function _prev() {
    let currentStep = wizardData.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    // this.setState({
    //   currentStep: currentStep
    // })
    setWizardData({ ...wizardData, currentStep: currentStep });
    PreviousStep();
  }

/*
* the functions for our button
*/
function previousButton() {
  let currentStep = wizardData.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={_prev}>
      Previous
      </button>
    )
  }
  return null;
}

function nextButton() {
  let currentStep = wizardData.currentStep;
  if(currentStep <6){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={_next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  return (      
      <form onSubmit={handleSubmit}>              
        <AppointmentStep1
          handleChange={handleChange}                              
          handleClose={onRequestClose}          
        />
        <AppointmentStep2          
          handleChange={handleChange}                              
          handleClose={onRequestClose}          
        />
        <AppointmentStep3
          showButtons={true}
          handleChange={handleChange}                              
          handleClose={onRequestClose}          
        />
        <AppointmentStep4 />
        <AppointmentStep5 handleClose={onRequestClose}/>

        {previousButton()}
        {nextButton()}

      </form>
    );  
}