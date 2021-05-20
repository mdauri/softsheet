import Grupo29 from '../../assets/Grupo29.svg'
import { Container } from "./styles";

export function AppointmentFrame() {

  return (
    <Container>
      <img src={Grupo29} alt="Enquadrar QRCode" />
      <p>Enquadre o seu QR Code no espaço delimitado e logo após sorria para a foto.</p>
    </Container>
  );
}