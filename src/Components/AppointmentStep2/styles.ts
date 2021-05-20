import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  p {
  font-size: 1rem;
  color: var(--text-title);
  }

  img {
    display: block;
    margin: 4.375rem auto 1rem auto;
  }
`

export const RightContainer = styled.div`
  align-self: center;
  max-width: 344px;
  margin-left: 7.156rem;
  margin-right: 7.344rem;
`

export const ButtonContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;  
  gap: 0.5rem;
`;