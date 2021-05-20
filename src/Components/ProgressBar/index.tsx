import { Container } from "./styles";

interface ProgressBarProps {
  value: number;
  step: number;
  max?: number;
  color: string;
  width: string;
}

export const ProgressBar = ({ value, step=1, max=100, color='#65B2FF', width='250px' }:ProgressBarProps) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      {step > 0 && <span>{step} {step === 1 ? 'segundo' : 'segundos' }</span>}
      
      {/* <span>{value/max * 100}%</span> */}
    </Container>
  );
}