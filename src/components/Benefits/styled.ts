import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 32px;
  background: #f1f6fa;
  padding: 120px 0;
  justify-content: center;
  align-items: center;
  margin: 0 0 120px 0;
`;

export const Info = styled.div`
  max-width: 540px;
  max-height: 218px;
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 30px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #9497a1;
`;

export const Cards = styled.div`
  max-width: 540px;
  max-height: 582px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
