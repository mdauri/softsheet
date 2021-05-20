import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Appointment {
  id: number;
  qrCode: string;
  userName: string;
  userRole: string;
  userLocation: string;
  type: string;
  createdAt: Date;
  step: number;
}

type AppointmentInput = Omit<Appointment, 'id' | 'createdAt'>;

interface AppointmentProviderProps {
  children: ReactNode;
}

interface AppointmentsContextData {
  appointments: Appointment[];
  currentAppointment: Appointment;
  createAppointment: (appointment: AppointmentInput) => Promise<void>;
  _reset: () => void;
  _prev: () => void;
  _next: () => void;
  appointmentStep: number;
}

const AppointmentsContext = createContext<AppointmentsContextData>({} as AppointmentsContextData);

export function AppointmentsProvider({children}:AppointmentProviderProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentStep, SetAppointmentStep] = useState(1);
  const [currentAppointment, SetCurrentAppointment] = useState({} as Appointment);

  useEffect(() => {
    api.get('appointments')
      .then(reponse => setAppointments(reponse.data.appointments))
    
    //Criando o apontamento fake
    const currentAppointment:Appointment = {
      id: 2,
      userName: 'Roberto Almeida',
      userRole: 'Analista de Marketing',
      userLocation: 'Av Santos Dumont Km 4,5 - Lauro de Freitas',
      createdAt: new Date(),
      qrCode: '1',
      type: 'intervalo',
      step: 2
    }
    SetCurrentAppointment(currentAppointment);
    
  }, [])

  async function createAppointment(appointmentInput:AppointmentInput) {
    const response = await api.post('/appointments', {
      ...appointmentInput,
      createdAt: new Date()
    })
    const { appointment } = response.data;

    setAppointments([
      ...appointments,
      appointment,
    ])

  }

  function _reset() {    
    SetAppointmentStep(1);
  }

  function _next() {
    let currentStep = appointmentStep
    currentStep = currentStep >= 5 ? 5 : currentStep + 1    
    SetAppointmentStep(currentStep)    
  }

  function _prev() {
    let currentStep = appointmentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    SetAppointmentStep(currentStep)
    
  }
  
  return (
    <AppointmentsContext.Provider value={{ appointments, currentAppointment, createAppointment, _reset, _prev, _next, appointmentStep }}>
      {children}
    </AppointmentsContext.Provider> 
  );

}

export function useAppontments() {
  const context = useContext(AppointmentsContext);

  return context;
}