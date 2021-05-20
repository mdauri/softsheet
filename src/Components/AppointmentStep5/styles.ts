import styled from 'styled-components';

export const Container = styled.div`
  min-width: 24.688rem;
  margin: 7.656rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin-left: auto;
    margin-right: auto;    
  }  
`

export const Title = styled.p`
  margin-top: 1.063rem;
  margin-bottom: 0.5rem;

  text-align: center;

  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-title);
  
  
`
export const SubTitle = styled.p`
  text-align: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-body);
  text-align: center;
  margin-bottom: 2.5rem;
`

export const RoteiroContainer = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 2rem;
  margin-top: 1.452rem;
  list-style-type: none;
`
export const ButtonContainer = styled.div`
  margin-top: 4.014rem;
  display: flex;
  justify-content: center;

  button {
    padding: 14px 45px 14px 45px;
  }
`;