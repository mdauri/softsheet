import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.5rem;
  min-width: 26.875rem;
`

export const Content = styled.div`
  padding-right: 2.781rem;
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-Bottom: 1.8rem;
  
  
  img {
    height: 80px;
    width: 80px;
  }

  h5 {
    height: 1.5rem;
    color: var(--text-title);
    margin-top: 0.4rem;
    margin-bottom: 1px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
  }
  
  h6 {
    height: 1.1rem;
    color: var(--text-body);
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
  }
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem; /*Popup tem 1.5rem padding*/
  padding: 1rem 1.5rem 1rem 1.5rem;
  

  svg {
    color: var(--blue);
  }

  h5 {
    height: 1.5rem;
    color: var(--text-title);
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  h6 {
    height: 0.75rem;
    color: var(--text-body);
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

export const LocationContent = styled.div`
  display: flex;
  margin-left: 6px;
  flex-direction: column;  
`

export const SeparatorLine = styled.hr`
  border-bottom: 1px solid var(--line-color);
  margin-top: 1.563rem;
  margin-left: 2rem;
  margin-bottom: 1.2rem;
  max-width: 23.938rem;
`
export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem; /*Popup tem 1.5rem padding*/
  padding: 1rem 1.5rem 1rem 1.5rem;

  svg {
    color: var(--blue);
  }

  h5 {
    height: 1.5rem;
    color: var(--text-title);
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  h6 {
    height: 0.75rem;
    color: var(--text-body);
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
  }
`
export const DateContent = styled.div`
  display: flex;
  margin-left: 6px;
  flex-direction: column;  
`
export const RoteiroTitle = styled.p`
  margin-top: 2.188rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-title);
  text-align: center;
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
  margin-top: 4.875rem;
  display: flex;
  justify-content: center;  
  gap: 0.5rem;
`;