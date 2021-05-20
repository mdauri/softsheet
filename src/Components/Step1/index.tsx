interface StepProps {
  currentStep: number;
  email: string;
  handleChange: (event:React.FormEvent<HTMLInputElement>) => void;
}
export function Step1({ currentStep, email, handleChange }: StepProps) {
  if (currentStep !== 1) { // Prop: The current step
    return null
  };

  return (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input 
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={email} // Prop: The email input data
        onChange={handleChange} // Prop: Puts data into state
      />
    </div>
  );
}