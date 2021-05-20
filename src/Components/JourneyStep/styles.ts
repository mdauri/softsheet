import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p {
    color: var(--text-title);
    font-family: 'Poppins', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: capitalize;
  }
`

export const Marker = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 8px 2px 8px;
  border-color: var(--green) transparent transparent transparent;
`

interface JourneyStepProps {
  isFilled: Boolean;
}

export const Content = styled.div<JourneyStepProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-radius:50%;
  border: 1px solid var(--line-color);
  background: ${(props) => props.isFilled ? '#65FFC4' : '#FFFFFF'};

  img {
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
    color: ${(props) => props.isFilled ? '#65FFC4' : '#65B2FF'};
    
  }  
`
