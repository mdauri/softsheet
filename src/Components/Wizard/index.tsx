import { Wizard, useWizardStep } from "react-wizard-primitive";

const FirstStep = () => {
  const { isActive, nextStep } = useWizardStep();
  
  return isActive ? <div onClick={nextStep}>First Step</div> : null;
};

const SecondStep = () => {
  const { isActive, nextStep } = useWizardStep();
  return isActive ? <div onClick={nextStep}>Second Step</div> : null;
};

export function WizardAppointment() {
  return (
    <Wizard>
      <FirstStep />
      {/* a step doesn't need to be a direct child of the wizard. It can be nested inside of html or react components, too!*/}
      <div>
        <SecondStep />
      </div>
    </Wizard>
  );
}