import Button from '../Button';
import ButtonWhite from '../ButtonWhite';
import { Container, ButtonContainer } from './styles';
import { useAppontments } from '../../hooks/useAppointments';
import { AppointmentFrame } from '../AppointmentFrame';

interface AppointmentStep1Props {
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleClose?(): void;
}

export function AppointmentStep1({ handleClose }: AppointmentStep1Props) {
  const { appointmentStep, _next } = useAppontments();
    
  if (appointmentStep !== 1) { // Prop: The current step
    return null
  };
  
  return (
    <Container>
      <AppointmentFrame/>      
      <ButtonContainer>
        <ButtonWhite onClick={handleClose}>Cancelar</ButtonWhite>
        <Button onClick={_next}>Confirmar</Button>
      </ButtonContainer>      
    </Container>
  );
}