import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1f6fa;
  padding: 100px 0;
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #292d33;
  max-width: 540px;
  margin: 0 0 30px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #9497a1;
  max-width: 540px;
  margin: 0 0 30px 0;
`;
