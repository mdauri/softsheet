import {
  Content, AvatarContainer, SeparatorLine, LocationContainer, LocationContent,
  DateContainer, DateContent, RoteiroTitle, RoteiroContainer, 
} from './styles';

import Elipse1 from '../../assets/Elipse1.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCalendar } from 'react-icons/io'

import { JourneyStep } from '../JourneyStep';
import { useAppontments } from '../../hooks/useAppointments';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function AppointmentJourneyFrame() {
  const { currentAppointment } = useAppontments();

  const date = format(currentAppointment.createdAt, 'dd MMMM - RRRR / H:m', {locale: ptBR})

  return (
    <Content>
      <AvatarContainer>
        <img src={Elipse1} alt="Foto funcionário" />
        <h5>{currentAppointment.userName}</h5>
        <h6>{currentAppointment.userRole}</h6>
      </AvatarContainer>
      <LocationContainer>
        <IoLocationOutline />
        <LocationContent>        
          <h5>Localização</h5>
          <h6>{currentAppointment.userLocation}</h6>
        </LocationContent>        
      </LocationContainer>
      <SeparatorLine />
      <DateContainer>
        <IoIosCalendar />
        <DateContent>        
          <h5>Data / Hora</h5> 
          <h6>{date}</h6>
        </DateContent>        
      </DateContainer>
      <RoteiroTitle>Roteiro de Hoje</RoteiroTitle>      
      <RoteiroContainer>        
        <li><JourneyStep isActive={false} isFilled={true} type="entrada"/></li>
        <li><JourneyStep isActive={true} isFilled={false} type="intervalo"/></li>
        <li><JourneyStep isActive={false} isFilled={false} type="segunda_entrada"/></li>
        <li><JourneyStep isActive={false} isFilled={false} type="saida"/></li>
      </RoteiroContainer>        
    </Content>       
  );
}