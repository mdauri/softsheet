import Grupo75 from '../../assets/Grupo75.svg'
import { Container, RightContainer } from './styles';
import { useAppontments } from '../../hooks/useAppointments';
import { AppointmentFrame } from '../AppointmentFrame';

interface AppointmentStep2Props {  
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;  
  handleClose?(): void;  
}

export function AppointmentStep2({ handleClose }: AppointmentStep2Props) {
  const { appointmentStep } = useAppontments();
  
  if (appointmentStep !== 2) { // Prop: The current step
    return null
  };

  return (
    <Container>
      <div>
        <img src={Grupo75} alt="Capturar QRCode" />
      </div>
      <RightContainer>
        <AppointmentFrame/>        
      </RightContainer>     
    </Container>
  );
}