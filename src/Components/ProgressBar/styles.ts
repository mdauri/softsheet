import styled from 'styled-components';

interface ProgressBarProps {
  width: string;
  color: string;
}

export const Container = styled.div<ProgressBarProps>`

  progress {
    margin-right: 0.5rem;    
  };

  progress[value] {
    -webkit-appearance: none;
    appearance: none;

    width: ${props => props.width};   
  };

  progress[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 20px;
    height: 1rem;
  };

  progress[value]::-webkit-progress-value {
    height: 1rem;
    border-radius: 20px;
    background-color: ${props => props.color};
  };

  span {    
    color: var(--text-title);    
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }
`