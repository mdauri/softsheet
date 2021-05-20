import React, { useState } from 'react';
import Modal from 'react-modal';
import { AppointmentsProvider } from './hooks/useAppointments';
import { NewAppointmentModal } from './Components/NewAppointment';

Modal.setAppElement('#root')

export function App() {  
  const [isNewAppointmentModalOpen, setIsNewappointmentModalOpen] = useState(false);

  function handleOpenNewAppointmentModal() {
    setIsNewappointmentModalOpen(true);
  }

  function handleCloseNewAppointmentModal() {
    setIsNewappointmentModalOpen(false);    
  }

  return (
    <AppointmentsProvider>
    <div>
      <h1>SoftSheet</h1>
      <button type='button' onClick={handleOpenNewAppointmentModal} >
        Registrar Ponto
      </button>
      <NewAppointmentModal
        isOpen={isNewAppointmentModalOpen}
        onRequestClose={handleCloseNewAppointmentModal}
      />
      </div>
    </AppointmentsProvider>
  );
}