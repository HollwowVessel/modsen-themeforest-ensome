import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 120px 0;
`;

export const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(328px, 540px));
  justify-items: center;

  gap: 15px;
  max-width: 1120px;
`;

export const Card = styled.div`
  max-width: 540px;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  padding: 20px 35px;
`;

export const Image = styled.img`
  margin: 0 0 26px 0;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;

  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 16px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #9497a1;
  margin: 0 0 20px 0;
`;
