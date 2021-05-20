import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import logoImg from '../../assets/logoHorizontal.svg';

import { Appointment } from '../Appointment';

interface NewAppointmentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewAppointmentModal({ isOpen, onRequestClose }: NewAppointmentModalProps) {
  
  return (
    <Modal isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <img src={logoImg} alt="TimeSheet" className={"react-modal-logo"}/>
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>      

      <Appointment onRequestClose={onRequestClose}/>

    </Modal>
  );
}