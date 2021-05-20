import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--background);
  height: 3rem;
  border-radius: 0.50rem;
  border: 2px solid var(--blue);
  padding: 0.875rem 1.5rem 0.875rem 1.5rem ;
  color: var(--blue);  
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  display: inline-flex;
  align-items: center;
  text-align: center;
  &:hover {
    background: ${shade(0.2, '#FFFFFF')};
  }

  svg {
    height: 14px;
    width: 14px;
    margin-right: 10px;
  }
`;