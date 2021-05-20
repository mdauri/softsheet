import { Container, ButtonContainer } from './styles';

import Button from '../Button';
import ButtonWhite from '../ButtonWhite';
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { useAppontments } from '../../hooks/useAppointments';
import { AppointmentJourneyFrame } from '../AppointmentJourneyFrame/AppointmentJourneyFrame';


interface AppointmentStep3Props {
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;  
  handleClose?(): void;    
  showButtons: Boolean;
}

export function AppointmentStep3({ showButtons }: AppointmentStep3Props) {
  
  const {appointments, appointmentStep, _next, _prev } = useAppontments();
  
  console.log(appointments);
  
  if (appointmentStep !== 3) { // Prop: The current step
    return null
  };

  return (
    <Container>
      <AppointmentJourneyFrame/>      
      {showButtons && 
          <ButtonContainer>
            <ButtonWhite onClick={_prev}>Voltar Para Captura</ButtonWhite>
            <Button icon={AiOutlineThunderbolt} onClick={_next}>Registrar Ponto
            </Button>
          </ButtonContainer>
        }
    </Container>
  );
}