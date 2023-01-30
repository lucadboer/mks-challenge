import styled from 'styled-components'

export const CartEmpityContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-size: 1.35rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  opacity: 0.8;
`
