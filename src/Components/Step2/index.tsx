interface StepProps {
  currentStep: number; 
  username: string;
  handleChange: (event:React.FormEvent<HTMLInputElement>) => void;
}

export function Step2(props:StepProps) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        />
    </div>
  );
}