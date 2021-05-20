import styled from 'styled-components';

export const Container = styled.div`
  max-width: 344px;
  margin-left: 7.156rem;
  margin-right: 7.344rem;

  p {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: var(--text-title);
    text-align: center;
  }

  img {
    display: block;
    margin: 4.375rem auto 1rem auto;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;  
  gap: 0.5rem;
`;