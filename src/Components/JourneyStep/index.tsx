import Caminho33 from '../../assets/Caminho33.svg';
import Caminho34 from '../../assets/Caminho34.svg';
import Caminho35 from '../../assets/Caminho35.svg';
import Caminho36 from '../../assets/Caminho36.svg';

import { Container, Marker, Content } from './styles'

interface JourneyStepProps {
  isActive: Boolean;
  isFilled: Boolean;
  type: string;
}

export function JourneyStep({ isActive, isFilled, type }: JourneyStepProps) {
  let description = '';
  let img = '';
  switch (type) {
    case 'entrada':
      description = 'Entrada';
      img = Caminho33;
      break;
    case 'intervalo':
      description = 'Intervalo';
      img = Caminho34;
      break;
    case 'segunda_entrada':
      description = '2ª Entrada';
      img = Caminho35;
      break;
    case 'saida':
      description = 'Saída'
      img = Caminho36;
      break;
    default:
      description = 'Entrada';
      img = Caminho33;
      break;
  }

  return (
    <Container>
      { isActive && <Marker/>}      
      <Content isFilled={isFilled}>
        <img src={img} alt={description} />
      </Content>
      <p>{ description }</p>
    </Container>
  );
}