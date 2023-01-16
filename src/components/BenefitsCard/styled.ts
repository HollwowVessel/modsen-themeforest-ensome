import styled from 'styled-components';

export const Card = styled.div`
  max-width: 255px;
  max-height: 248px;
  background: #fff;
  padding: 25px;
  &:nth-of-type(even) {
    transform: translateY(56px);
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 0 15px 0;
`;

export const Heading = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 10px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #9497a1;
`;
