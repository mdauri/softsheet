import { useEffect, useState } from 'react';
import Grupo75 from '../../assets/Grupo75.svg'
import { useAppontments } from '../../hooks/useAppointments';
import { AppointmentJourneyFrame } from '../AppointmentJourneyFrame/AppointmentJourneyFrame';
import { ProgressBar } from '../ProgressBar';
import { Container, LeftContainer, RightContainer, TimerContainer } from "./styles";

export function AppointmentStep4() {
  
  const { appointmentStep } = useAppontments();
   
  const max = 100;
  const maxStep = 5;

  const [value, setValue] = useState(0);
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const tick = max / maxStep;  
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + tick;
        if (newValue === 100) {
          clearInterval(interval);
          // _next();
        }
        return newValue;
      });

      setStep((oldStep) => {
        const newStep = oldStep + 1;        
        return newStep;
      });
    }, 1000)
  }, [])

  if (appointmentStep !== 4) { // Prop: The current step
    return null
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Grupo75} alt="Moldura Captura Imagem" />
      </LeftContainer>
      <RightContainer>        
        <AppointmentJourneyFrame />
        <TimerContainer>
          <p>Sorria para a foto</p>
          <ProgressBar value={value} step={step} max={max} color="#65FFC4" width="300px" />
        </TimerContainer>
      </RightContainer>
    </Container>
  );
}