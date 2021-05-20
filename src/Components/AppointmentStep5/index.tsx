import CheckCircle from '../../assets/Check-circle.png'
import { useAppontments } from "../../hooks/useAppointments";
import Button from '../Button';
import { JourneyStep } from '../JourneyStep';
import { Container, SubTitle, Title, RoteiroContainer, ButtonContainer } from "./styles";

interface AppointmentStep5Props {
  
  handleClose?(): void;
}

export function AppointmentStep5({handleClose }:AppointmentStep5Props) {

  const { appointmentStep, currentAppointment } = useAppontments()

  if (appointmentStep !== 5) { // Prop: The current step
    return null
  };

  return (
    <Container>
      <img src={CheckCircle} alt="Ponto Registrado" />
      <Title>Ponto registrado com sucesso</Title>
      <SubTitle>Recibo nº {currentAppointment.id}</SubTitle>
      <RoteiroContainer>        
        <li><JourneyStep isActive={false} isFilled={true} type="entrada"/></li>
        <li><JourneyStep isActive={true} isFilled={true} type="intervalo"/></li>
        <li><JourneyStep isActive={false} isFilled={false} type="segunda_entrada"/></li>
        <li><JourneyStep isActive={false} isFilled={false} type="saida"/></li>
      </RoteiroContainer>
      <ButtonContainer>
        <Button onClick={handleClose}>OK</Button>
      </ButtonContainer>
    </Container>
    
  );
}