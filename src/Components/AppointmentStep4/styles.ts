import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 7rem;
`

export const LeftContainer = styled.div`

`

export const RightContainer = styled.div`
  min-width: 27rem;
`

export const TimerContainer = styled.div`
  margin-top: 3.75rem;
  margin-left: 2rem;

  p {
    height: 1.438rem;
    color: var(--text-title);
    margin-top: 0.4rem;    
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
  }

  progress {
    height: 1rem;
  }
`