import styled from 'styled-components'

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.65rem 0.75rem;
  margin-right: 5.5rem;

  font-weight: bold;
  background-color: #fff;
  border-radius: 8px;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    margin-right: 1.25rem;
  }
`
