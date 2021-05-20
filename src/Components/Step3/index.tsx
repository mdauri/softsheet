interface StepProps {
  currentStep: number; 
  password: string;
  handleChange: (event:React.FormEvent<HTMLInputElement>) => void;
}

export function Step3(props:StepProps) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success btn-block">Sign up</button>
    </>
  );
}
