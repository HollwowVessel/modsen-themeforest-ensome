import styled from 'styled-components';

export const Fill = styled.button`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  letter-spacing: -0.015em;
  padding: 16px 56px;
  background: #185cff;
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  border-radius: 6px;
  border: none;

  &:hover {
    background: #467dff;
  }

  &:disabled {
    background: #9497a1;
  }
`;
